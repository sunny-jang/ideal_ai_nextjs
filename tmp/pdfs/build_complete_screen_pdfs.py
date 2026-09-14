from pathlib import Path
import re
import html

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, PageBreak

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf" / "screens"
FONT = "/Users/sunny/Library/Fonts/NotoSansKR-Light.ttf"
FONT_BOLD = "/Users/sunny/Library/Fonts/NotoSansKR-Black.ttf"
pdfmetrics.registerFont(TTFont("NotoKR", FONT))
pdfmetrics.registerFont(TTFont("NotoKR-Bold", FONT_BOLD))

SCREEN_SOURCES = {
    "home": [ROOT / "app" / "page.js", ROOT / "lib" / "knowledge.js"],
    "about": [ROOT / "app" / "about" / "page.js"],
    "services": [ROOT / "app" / "services" / "page.js"],
    "solutions": [ROOT / "app" / "solutions" / "page.js"],
    "cases": [ROOT / "app" / "cases" / "page.js"],
    "blog": [ROOT / "app" / "blog" / "page.js", ROOT / "lib" / "posts.js"],
}


def escape(s):
    return html.escape(html.unescape(s), quote=False)


def is_noise(s):
    s = s.strip()
    if not s or s in {"use client", "use strict"}:
        return True
    if s.startswith(",") or s in {"description", "url"}:
        return True
    if s.startswith("#"):
        return True
    if re.fullmatch(r"(?:명|년|주|%)[+]", s):
        return True
    if s.startswith(("@/", "/", "./", "../", "http://", "https://", "tel:", "mailto:")):
        return True
    if any(x in s for x in ["var(--", "rgba(", "linear-gradient", "objectFit", "objectPosition", "clamp(", "=>", "<", ">", "className", "style="]):
        return True
    if re.fullmatch(r"[MCLHVZAS0-9.,\-+ ]+", s):
        return True
    if re.match(r"^M\d", s) or re.fullmatch(r"[a-z0-9_-]+(?: [a-z0-9_-]+)+", s):
        return True
    if re.fullmatch(r"[a-z0-9_-]+(?: [a-z0-9_-]+)*", s):
        return True
    if re.fullmatch(r"[0-9.\-+ ]+", s):
        return True
    if re.fullmatch(r"[A-Za-z_]+:", s) or s in {"center right", "absolute"}:
        return True
    if "https:" in s or "http:" in s or "@/" in s:
        return True
    if re.fullmatch(r"[A-Za-z_][A-Za-z0-9_-]*", s) and s.lower() in {
        "main", "section", "article", "div", "span", "p", "h1", "h2", "h3", "h4", "svg", "path", "circle", "line", "polygon", "none", "contain", "cover", "center", "right", "left", "true", "false"
    }:
        return True
    if re.fullmatch(r"[A-Za-z0-9_-]+\.(png|jpg|jpeg|svg|ico|webp)", s):
        return True
    if re.fullmatch(r"[0-9.]+(px|vw|vh|%|rem|em)?", s):
        return True
    return False


def extract_user_text(path):
    src = path.read_text(encoding="utf-8")
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    src = re.sub(r"//.*", "", src)
    # Remove JSX tags and JavaScript expressions so attributes and SVG paths
    # cannot be mistaken for user-facing text.
    found = []
    # JSX-visible text between tags.
    for m in re.finditer(r">\s*([^<>\n][^<>]*?)\s*<", src):
        value = re.sub(r"\s+", " ", m.group(1)).strip()
        if not is_noise(value) and (re.search(r"[가-힣]", value) or " " in value) and len(value) > 1:
            found.append(value)
    # Object content, metadata, labels, descriptions, and blog prose.
    for m in re.finditer(r"(['\"`])((?:\\.|(?!\1).)*)\1", src, flags=re.S):
        value = m.group(2)
        context = src[max(0, m.start() - 40):m.start()]
        if re.search(r"(?:className|href|src|alt|sizes|style|url|id|key)\s*[:=]\s*$", context):
            continue
        value = re.sub(r"\s+", " ", value).strip()
        value = value.replace("\\'", "'").replace('\\"', '"')
        if not is_noise(value) and (re.search(r"[가-힣]", value) or " " in value) and len(value) > 1:
            found.append(value)
    # Keep source order approximately while removing duplicates.
    result = []
    seen = set()
    for value in found:
        if value not in seen:
            seen.add(value)
            result.append(value)
    return result


def draw_header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setStrokeColor(colors.HexColor("#E5E7EB"))
    canvas.line(doc.leftMargin, h - 18 * mm, w - doc.rightMargin, h - 18 * mm)
    canvas.setFont("NotoKR", 7.5)
    canvas.setFillColor(colors.HexColor("#6B7280"))
    canvas.drawString(doc.leftMargin, h - 13 * mm, "Ideal AI | 화면별 홈페이지 원문 지식 문서")
    canvas.drawRightString(w - doc.rightMargin, 11 * mm, str(doc.page))
    canvas.restoreState()


def make_pdf(slug, title, sources):
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("title", fontName="NotoKR-Bold", fontSize=24, leading=32, alignment=1, textColor=colors.HexColor("#111827"), spaceAfter=12 * mm)
    intro_style = ParagraphStyle("intro", fontName="NotoKR", fontSize=9.5, leading=16, textColor=colors.HexColor("#4B5563"), spaceAfter=8 * mm)
    source_style = ParagraphStyle("source", fontName="NotoKR-Bold", fontSize=13, leading=20, textColor=colors.HexColor("#4F46E5"), spaceBefore=6 * mm, spaceAfter=3 * mm, keepWithNext=True)
    text_style = ParagraphStyle("text", fontName="NotoKR", fontSize=8.7, leading=14, textColor=colors.HexColor("#374151"), spaceAfter=2.2 * mm)
    output = OUT / f"ideal-ai-{slug}.pdf"
    doc = BaseDocTemplate(str(output), pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm, topMargin=25 * mm, bottomMargin=19 * mm, title=f"Ideal AI {title}", author="Ideal AI")
    doc.addPageTemplates([PageTemplate(id="main", frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")], onPage=draw_header_footer)])
    story = [Spacer(1, 25 * mm), Paragraph(f"Ideal AI 홈페이지<br/>{escape(title)}", title_style), Paragraph("화면의 사용자 노출 원문 전체를 추출한 챗봇 SDK 적재용 PDF", intro_style), Paragraph("페이지 소스의 텍스트, 메타데이터, 카드·리스트·통계·FAQ·블로그 본문을 자동 추출했습니다.", intro_style), PageBreak()]
    for source in sources:
        story.append(Paragraph(escape(f"원문 출처: {source.relative_to(ROOT)}"), source_style))
        values = extract_user_text(source)
        for value in values:
            story.append(Paragraph(escape(value), text_style))
    doc.build(story)
    return output


OUT.mkdir(parents=True, exist_ok=True)
titles = {"home": "홈 화면", "about": "About 화면", "services": "Services 화면", "solutions": "Solutions 화면", "cases": "Cases 화면", "blog": "Blog 화면"}
for slug, sources in SCREEN_SOURCES.items():
    print(make_pdf(slug, titles[slug], sources))
