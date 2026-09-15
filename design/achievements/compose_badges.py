from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).parent
FONT = "/System/Library/Fonts/Hiragino Sans GB.ttc"
BADGES = {
    "achievement-first-character.png": "初识彝文",
    "achievement-growing-collection.png": "小有积累",
    "achievement-hundred-characters.png": "百字同行",
    "achievement-halfway.png": "半程同行",
    "achievement-heritage-keeper.png": "彝文传承者",
    "achievement-streak-3.png": "连续学习 3 天",
    "achievement-streak-7.png": "连续学习 7 天",
    "achievement-streak-30.png": "连续学习 30 天",
    "achievement-streak-100.png": "连续学习 100 天",
}

CANVAS = (768, 896)
ICON_BOX = (656, 656)
TEXT_COLOR = "#A83816"
TEXT_STROKE = "#FFD45A"


def fit_icon(image: Image.Image) -> Image.Image:
    image = image.convert("RGBA")
    bbox = image.getchannel("A").getbbox()
    image = image.crop(bbox)
    image.thumbnail(ICON_BOX, Image.Resampling.LANCZOS)
    return image


def render(path: Path, label: str) -> None:
    icon = fit_icon(Image.open(path))
    canvas = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    canvas.alpha_composite(icon, ((CANVAS[0] - icon.width) // 2, 34))

    draw = ImageDraw.Draw(canvas)
    size = 68 if len(label) <= 5 else 58
    font = ImageFont.truetype(FONT, size=size, index=0)
    box = draw.textbbox((0, 0), label, font=font, stroke_width=2)
    x = (CANVAS[0] - (box[2] - box[0])) // 2
    y = 776
    draw.text(
        (x, y),
        label,
        font=font,
        fill=TEXT_COLOR,
        stroke_width=2,
        stroke_fill=TEXT_STROKE,
    )
    canvas.save(path, optimize=True)


for filename, label in BADGES.items():
    render(ROOT / filename, label)
