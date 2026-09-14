/**
 * 은선 문의 폼 → 구글 스프레드시트 기록 + 이메일 알림용 Apps Script
 * ─────────────────────────────────────────────────────────
 * 사용법
 *  1) 구글 스프레드시트를 새로 하나 만든다 (예: "은선 문의 로그")
 *  2) 상단 메뉴  확장 프로그램 → Apps Script  를 연다
 *  3) 기본 코드를 지우고 이 파일 내용을 통째로 붙여넣는다
 *  4) 우측 상단  배포 → 새 배포 → 유형: 웹 앱
 *       - 실행 계정:  나
 *       - 액세스 권한:  모든 사용자
 *     → 배포 → (권한 승인) → "웹 앱 URL" 복사
 *  5) 그 URL 을 .env.local 의 GOOGLE_SHEET_WEBHOOK_URL 에 넣는다
 *
 *  ※ 코드를 수정한 뒤에는  배포 → 배포 관리 → (연필) 수정 → 버전: "새 버전"
 *    으로 다시 배포해야 반영된다. (기존 URL 은 그대로 유지됨)
 */

// 문의 알림을 받을 이메일 주소
const NOTIFY_EMAIL = "esunbest@gmail.com";

// 문의 폼 헤더
const HEADERS = ["접수시각", "이름", "연락처", "이메일", "유입페이지", "문의내용"];
// 챗봇 로그 헤더
const CHAT_HEADERS = ["시간", "출처", "세션ID", "연락처", "사용자 질문", "봇 답변"];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 챗봇 대화 로그 분기
    if (data.type === "chat") {
      return saveChatLog(data);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // 헤더가 없으면 첫 줄에 자동으로 넣어줌
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    const now = Utilities.formatDate(
      new Date(),
      "Asia/Seoul",
      "yyyy-MM-dd HH:mm:ss"
    );

    const row = {
      time: now,
      name: data.name || "-",
      phone: data.phone || "-",
      email: data.email || "-",
      source: data.source || "-",
      message: data.message || "-",
    };

    sheet.appendRow([
      row.time,
      row.name,
      row.phone,
      row.email,
      row.source,
      row.message,
    ]);

    // 이메일 알림 발송 (실패해도 시트 기록은 유지)
    try {
      sendNotifyEmail(row);
    } catch (mailErr) {
      console.error("이메일 발송 실패:", mailErr);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotifyEmail(row) {
  const subject = `[은선 문의] ${row.name} (${row.source})`;
  const htmlBody = `
    <div style="font-family:system-ui,'Apple SD Gothic Neo',sans-serif;font-size:15px;line-height:1.6;color:#111827">
      <h2 style="margin:0 0 16px">새 문의가 접수되었습니다</h2>
      <table style="border-collapse:collapse">
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280">접수시각</td><td style="padding:6px 0">${row.time}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280">이름</td><td style="padding:6px 0">${row.name}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280">연락처</td><td style="padding:6px 0">${row.phone}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280">이메일</td><td style="padding:6px 0">${row.email}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280">유입페이지</td><td style="padding:6px 0">${row.source}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280;vertical-align:top">문의내용</td><td style="padding:6px 0">${String(row.message).replace(/\n/g, "<br>")}</td></tr>
      </table>
    </div>`;

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: row.email && row.email !== "-" ? row.email : undefined,
  });
}

function saveChatLog(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = data.source === "Ideal" ? "Ideal AI 상담로그" : "AI 상담 로그";
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(CHAT_HEADERS);
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(2, 80);
    sheet.setColumnWidth(3, 110);
    sheet.setColumnWidth(4, 130);
    sheet.setColumnWidth(5, 300);
    sheet.setColumnWidth(6, 500);
    sheet.getRange(1, 1, 1, 6).setBackground("#111827").setFontColor("#ffffff").setFontWeight("bold");
  }

  const now = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  const currentSessionId = data.sessionId || "-";
  const lastRow = sheet.getLastRow();

  const prevSessionId = lastRow > 1 ? sheet.getRange(lastRow, 3).getValue() : "-";
  const prevBg = lastRow > 1 ? sheet.getRange(lastRow, 1).getBackground() : "#f0f4ff";
  const newBg = prevSessionId !== currentSessionId
    ? (prevBg === "#ffffff" ? "#f0f4ff" : "#ffffff")
    : prevBg;

  sheet.appendRow([
    now,
    data.source || "-",
    currentSessionId,
    data.contactPhone || "-",
    data.userMessage || "-",
    data.botResponse || "-"
  ]);
  sheet.getRange(lastRow + 1, 1, 1, 6).setBackground(newBg);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

// 브라우저로 URL 을 직접 열었을 때 동작 확인용
function doGet() {
  return ContentService.createTextOutput("eunseon contact webhook OK");
}
