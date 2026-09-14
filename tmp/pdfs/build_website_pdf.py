from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    PageBreak,
    Paragraph,
    Spacer,
    KeepTogether,
)


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "docs" / "ideal-ai-website-knowledge.md"
OUTPUT_DIR = ROOT / "output" / "pdf" / "screens"
FONT = Path("/Users/sunny/Library/Fonts/NotoSansKR-Light.ttf")
FONT_BOLD = Path("/Users/sunny/Library/Fonts/NotoSansKR-Black.ttf")

pdfmetrics.registerFont(TTFont("NotoKR", str(FONT)))
pdfmetrics.registerFont(TTFont("NotoKR-Bold", str(FONT_BOLD)))


class NumberedDocTemplate(BaseDocTemplate):
    def __init__(self, filename, **kwargs):
        super().__init__(filename, **kwargs)
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            id="normal",
        )
        self.addPageTemplates([PageTemplate(id="main", frames=frame, onPage=draw_header_footer)])


def draw_header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(colors.HexColor("#E5E7EB"))
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, height - 18 * mm, width - doc.rightMargin, height - 18 * mm)
    canvas.setFont("NotoKR", 7.5)
    canvas.setFillColor(colors.HexColor("#6B7280"))
    canvas.drawString(doc.leftMargin, height - 13 * mm, "Ideal AI | 홈페이지 통합 지식 문서")
    canvas.drawRightString(width - doc.rightMargin, 11 * mm, f"{doc.page}")
    canvas.restoreState()


def clean(text):
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("·", "·")
    )


def styles_for():
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "TitleKR", parent=styles["Title"], fontName="NotoKR-Bold", fontSize=25,
        leading=34, textColor=colors.HexColor("#111827"), alignment=TA_CENTER,
        spaceAfter=12 * mm,
    )
    subtitle = ParagraphStyle(
        "SubtitleKR", parent=styles["Normal"], fontName="NotoKR", fontSize=10.5,
        leading=18, textColor=colors.HexColor("#4B5563"), alignment=TA_CENTER,
        spaceAfter=20 * mm,
    )
    h1 = ParagraphStyle(
        "H1KR", parent=styles["Heading1"], fontName="NotoKR-Bold", fontSize=17,
        leading=25, textColor=colors.HexColor("#4F46E5"), spaceBefore=10 * mm,
        spaceAfter=4 * mm, keepWithNext=True,
    )
    h2 = ParagraphStyle(
        "H2KR", parent=styles["Heading2"], fontName="NotoKR-Bold", fontSize=12.5,
        leading=19, textColor=colors.HexColor("#111827"), spaceBefore=6 * mm,
        spaceAfter=2.5 * mm, keepWithNext=True,
    )
    body = ParagraphStyle(
        "BodyKR", parent=styles["BodyText"], fontName="NotoKR", fontSize=9.3,
        leading=16, textColor=colors.HexColor("#374151"), spaceAfter=3 * mm,
    )
    bullet = ParagraphStyle(
        "BulletKR", parent=body, leftIndent=7 * mm, firstLineIndent=-4 * mm,
        bulletIndent=1.5 * mm, spaceAfter=1.5 * mm,
    )
    note = ParagraphStyle(
        "NoteKR", parent=body, fontSize=8.3, leading=14, textColor=colors.HexColor("#6B7280"),
    )

    return title, subtitle, h1, h2, body, bullet, note


def build_story(screen_title, description, source_text):
    title, subtitle, h1, h2, body, bullet, note = styles_for()
    story = [
        Spacer(1, 25 * mm),
        Paragraph(f"Ideal AI 홈페이지<br/>{clean(screen_title)}", title),
        Paragraph("화면별 챗봇 SDK / 지식베이스 적재용 PDF", subtitle),
        Paragraph(clean(description), body),
        Spacer(1, 24 * mm),
        Paragraph("문서 버전: 2026년 9월", note),
        PageBreak(),
    ]

    for raw in source_text.splitlines():
        line = raw.strip()
        if not line:
            story.append(Spacer(1, 1.5 * mm))
        elif line.startswith("# "):
            story.append(Paragraph(clean(line[2:]), h1))
        elif line.startswith("## "):
            story.append(Paragraph(clean(line[3:]), h1))
        elif line.startswith("### "):
            story.append(Paragraph(clean(line[4:]), h2))
        elif line.startswith("- "):
            story.append(Paragraph("• " + clean(line[2:]), bullet))
        else:
            story.append(Paragraph(clean(line), body))
    return story


text = SOURCE.read_text(encoding="utf-8")
sections = {}
current = "기본"
sections[current] = []
for line in text.splitlines():
    if line.startswith("## "):
        current = line[3:].strip()
        sections[current] = [line]
    else:
        sections[current].append(line)

screens = {
    "home": {
        "title": "홈 화면",
        "description": "홈 화면의 핵심 메시지, 기술 스택, 서비스 카드와 문의 CTA입니다.",
        "sections": ["문서 목적", "홈페이지 핵심 메시지", "홈페이지 기술 스택 문구", "홈페이지 서비스 소개", "문의 및 CTA"],
    },
    "about": {
        "title": "About 화면",
        "description": "회사 소개, 팀, 전문 분야, 미션과 비전 콘텐츠입니다.",
        "sections": ["About 페이지"],
    },
    "services": {
        "title": "Services 화면",
        "description": "AI 제품 개발, 프로세스 자동화, 데이터 엔지니어링, AI 컨설팅 상세 설명입니다.",
        "sections": ["Services 페이지 상세 내용"],
    },
    "solutions": {
        "title": "Solutions 화면",
        "description": "금융, 제조, 유통·이커머스, 의료, 법률, 교육 산업별 솔루션과 기술 구성입니다.",
        "sections": ["Solutions 페이지"],
    },
    "cases": {
        "title": "Cases 화면",
        "description": "은행 내부 규정 챗봇, 이커머스 추천, HR 문서 자동화, 법률 문서 리스크 탐지 사례입니다.",
        "sections": ["Cases 페이지: 프로젝트 사례"],
    },
    "blog": {
        "title": "Blog 화면",
        "description": "홈페이지 블로그 목록과 7개 기술 게시글의 제목 및 본문 요약입니다.",
        "sections": ["Blog 페이지 및 게시글"],
    },
}

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
for slug, config in screens.items():
    source_text = "\n\n".join("\n".join(sections.get(key, [])) for key in config["sections"])
    output = OUTPUT_DIR / f"ideal-ai-{slug}.pdf"
    doc = NumberedDocTemplate(
        str(output), pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=25 * mm, bottomMargin=19 * mm,
        title=f"Ideal AI 홈페이지 {config['title']}", author="Ideal AI",
    )
    doc.build(build_story(config["title"], config["description"], source_text))
    print(output)
