# Danh sách ảnh AI & prompt — Ngọc Rồng Online

Dùng cho Kling hoặc Higgsfield (text-to-image). Mỗi ảnh tốn credit, nên làm theo thứ tự ưu tiên và duyệt từng ảnh trước khi làm ảnh tiếp theo.

## 0. Quy tắc chung (áp cho MỌI ảnh)

**Phong cách:** minh họa hoạt hình tươi sáng, đổ bóng kiểu cel-shaded, nét sạch, ánh sáng viền mềm, độ sâu nhẹ. Hợp với giao diện kem–cam (không tối, không neon).

**Bảng màu (khớp website):** cam đậm `#C2410C`, vàng `#FBBF24`, xanh trời `#0369A1`, kem `#FFF8EC`, nâu đậm `#2A1708`. Hành tinh: Trái Đất xanh dương, Namek xanh lá, Xayda tím/hồng.

**Tiền tố chung (dán vào đầu mọi prompt):**
```
Vibrant stylized cartoon illustration, cel-shaded, clean bold shapes, soft rim lighting, warm orange and gold color palette on a cream-friendly background, high detail, polished game-marketing key art, no text, no letters, no logos, no watermark, no UI
```

**Negative prompt (nếu công cụ có ô riêng):**
```
text, letters, numbers, watermark, logo, signature, Dragon Ball, Goku, Shenron, Saiyan hair, any existing anime character, copyrighted character, orange martial-arts gi, blue sash, blue wristbands, spiky black hair, seven spheres with red stars, blurry, low quality, extra fingers, deformed hands, cropped subject
```

**Bắt buộc về bản quyền:** KHÔNG nhắc tên nhân vật/nhượng quyền có sẵn, không mô tả tóc vàng dựng đứng hay rồng thần. Nhân vật là **nhân vật gốc** do bạn sở hữu hình ảnh.

**Chữ trên banner (x2, "Đang diễn ra"…):** AI vẽ chữ tiếng Việt rất dễ sai dấu, nên **KHÔNG nhờ AI vẽ chữ**. Chữ do website đặt lên bằng HTML.

**Ưu tiên chủ thể ở giữa/nửa trên**, chừa khoảng trống để website đặt nút và chữ (xem cột "Vùng trống").

## 1. Danh sách ảnh

| # | Tên file (`public/images/`) | Dùng ở | Tỉ lệ tạo | Kích thước xuất | Vùng trống | Ưu tiên |
|---|---|---|---|---|---|---|
| 1 | `hero-main.webp` | Hero trang chủ | 4:3 | 1600×1200 | Không cần | Cao |
| 2 | `planet-earth.webp` | Thẻ hành tinh | 16:9 | 800×440 | Không | Cao |
| 3 | `planet-namek.webp` | Thẻ hành tinh | 16:9 | 800×440 | Không | Cao |
| 4 | `planet-xayda.webp` | Thẻ hành tinh | 16:9 | 800×440 | Không | Cao |
| 5 | `event-x2.webp` | Banner Nạp đầu nhân đôi | 16:9 | 1200×600 (cắt 2:1) | Giữa để đặt chữ x2 | Cao |
| 6 | `event-gift.webp` | Banner Quà mốc | 16:9 | 1200×600 | Giữa | Cao |
| 7 | `event-gem.webp` | Banner Tuần lễ ngọc | 16:9 | 1200×600 | Giữa | Cao |
| 8 | `og-image.webp` | Ảnh chia sẻ mạng xã hội | 16:9 | 1200×630 | Nửa phải | Trung bình |
| 9 | `topup-banner.webp` | Đầu trang Nạp | 21:9 | 1600×686 | Nửa trái | Trung bình |
| 10 | `auth-side.webp` | Cột bên trang Đăng nhập/Đăng ký (desktop) | 3:4 | 900×1200 | Không | Thấp |
| 11 | `icon-gem.webp` | Biểu tượng ngọc | 1:1 | 512×512 | Nền trong suốt/trơn | Thấp |
| 12 | `icon-gift.webp` | Biểu tượng hộp quà | 1:1 | 512×512 | Nền trong suốt/trơn | Thấp |
| 13 | `icon-coin.webp` | Biểu tượng xu | 1:1 | 512×512 | Nền trong suốt/trơn | Thấp |

Tổng: 9 ảnh cốt lõi (1–9) + 4 ảnh phụ (10–13). Nên làm 1–7 trước.

## 2. Prompt từng ảnh

Mỗi prompt = **Tiền tố chung** + nội dung dưới đây.

### 0b. Hồ sơ nhân vật gốc (dán vào MỌI prompt có nhân vật để giữ nhất quán)

> Tên làm việc: **Hạo** (bạn đổi tên tùy ý). Thiết kế cố ý KHÁC hoàn toàn với Dragon Ball: không áo gi cam, không đai/băng tay xanh, không tóc đen dựng đứng, không bảy viên ngọc sao đỏ.

```
CHARACTER: Hao, an original teenage adventurer. Short tousled silver-white hair swept to one side, a green-teal headband with a small gold clasp, warm amber eyes, light brown skin, confident grin. Outfit: a cream-colored short-sleeve tunic with deep teal trim and a gold geometric border, a crimson half-cape on one shoulder, dark brown leather arm guards, tapered dark teal trousers, light tan boots. Carries a slim bronze staff on his back. Lean athletic build.
```

**Vật phẩm gốc: "Ngọc Lam"** — 5 viên ngọc pha lê lục lam có vòng vàng xoắn, KHÔNG có sao, KHÔNG tròn trơn màu cam:
```
ORBS: five floating faceted turquoise crystal spheres, each wrapped by a thin glowing gold spiral ring, soft inner teal glow, no stars, no numbers, no markings, different sizes
```

### 1. hero-main — Hero (4:3)
```
Hao (see CHARACTER above) standing in a heroic low-angle pose on a rocky cliff edge at sunrise, a swirling aura of warm golden-white energy around his raised right hand, red half-cape and headband band fluttering in the wind. Behind him a huge glowing sunrise sky with three small colorful planets (one blue, one green, one purple), and five Ngoc Lam crystal orbs (see ORBS above) floating in a gentle arc around him. Rolling clouds below the cliff, drifting energy sparks, friendly adventurous mood, subject centered with open sky around.
```

### 2. planet-earth (16:9)
```
A lush blue-and-green home planet landscape: rolling green hills, snow-capped mountains, a clear bright sky with fluffy clouds, a rising sun, a small white dome-shaped house on a hill, a winding river, peaceful and welcoming mood, wide scenic view, cheerful daylight.
```

### 3. planet-namek (16:9)
```
An alien planet landscape with a soft green sky, a calm shallow blue sea, tall thin trees with round bright green canopies, smooth rounded islands of green grass, floating pale sun, serene mystical mood, clean stylized shapes, gentle teal and lime palette.
```

### 4. planet-xayda (16:9)
```
A dramatic alien planet at dusk: purple and pink gradient sky, two moons (one pale gold, one pink), jagged violet mountain ranges, glowing magenta crystal spires rising from dark rocky ground, scattered stars, mysterious and powerful mood, warm rim light on the crystals.
```

### 5. event-x2 — Nạp đầu nhân đôi (16:9, chủ thể giữa)
```
A shining treasure scene: a large glowing golden coin medallion floating in the center (completely blank, no markings or numbers), surrounded by smaller gold coins and sparkling gems bursting outward, warm orange-to-yellow background with radiating light rays, celebratory festive mood, open space around the center.
```

### 6. event-gift — Quà mốc tích lũy (16:9)
```
A large festive orange gift box with a golden ribbon bow floating in the center, lid slightly open with warm golden light and sparkles streaming out, small floating pink and gold gift boxes around it, soft pink-to-yellow background with confetti, joyful reward mood, centered composition.
```

### 7. event-gem — Tuần lễ ngọc thưởng (16:9)
```
A cluster of large faceted crystal gems in sky blue, violet and pink floating in the center, glowing inner light and sparkles, one big hero gem in front, soft lavender-to-sky-blue background with light rays and tiny stars, precious and magical mood, centered composition.
```

### 8. og-image — chia sẻ mạng xã hội (16:9, nửa phải có chủ thể)
Dùng ảnh hero làm ảnh tham chiếu (reference) để giữ cùng một nhân vật.
```
Hao (see CHARACTER above) in a dynamic flying pose on the right half of the image, a golden energy trail behind him, red half-cape streaming, five Ngoc Lam turquoise crystal orbs (see ORBS above) arcing across a warm sunrise sky, left half kept clean and calm with a soft peach-to-sky gradient for text overlay.
```

### 9. topup-banner (21:9, nửa trái trống)
```
A wide panoramic banner: on the right side a pile of glowing blue and violet crystal gems and gold coins with a small treasure chest, sparkles and warm light; the left half is a smooth soft orange-to-cream gradient sky with gentle clouds, left side intentionally empty for text overlay, friendly trustworthy mood.
```

### 10. auth-side (3:4)
```
A vertical illustration of a cheerful small floating island with a tiny dome house, a glowing orange sphere with red stars hovering above it, soft clouds and a warm sunrise sky with three tiny planets, cozy welcoming mood, centered vertical composition.
```

### 11–13. Biểu tượng (1:1)
Thêm vào cuối prompt: `isolated on a plain cream background, single object centered, soft shadow beneath`
```
11 icon-gem:  A single large faceted sky-blue crystal gem with white highlights and a gold-lit edge.
12 icon-gift: A single orange gift box with a gold ribbon bow, slightly tilted.
13 icon-coin: A single thick gold coin, blank face with a simple star embossed, slightly tilted.
```

## 3. Quy trình đề xuất

1. Tạo **1 ảnh thử** (số 2, Trái Đất — ít rủi ro) để chốt phong cách và xem chi phí.
2. Hài lòng thì làm tiếp 3, 4 (cùng bộ hành tinh), rồi 5–7 (banner), rồi 1 (hero).
3. Với nhân vật hero (1 và 8): tạo ảnh 1 trước, rồi **dùng ảnh 1 làm ảnh tham chiếu** (image-to-image/reference) cho ảnh 8 để giữ cùng một nhân vật.
4. Lưu ảnh vào `public/images/`, đổi sang WebP, nén ≤ 200 KB/ảnh (hero ≤ 300 KB).
5. Website thêm `<img>` có `width`/`height`, `alt` tiếng Việt, `loading="lazy"` (trừ hero), `fetchpriority="high"` cho hero.

## 4. Alt text gợi ý

- hero-main: "Chiến binh trẻ trong bộ đồ cam đang tụ khí, phía sau là ba hành tinh và bảy viên ngọc phát sáng."
- planet-earth / namek / xayda: "Phong cảnh hành tinh Trái Đất / Namek / Xayda."
- event-x2 / gift / gem: ảnh trang trí, dùng `alt=""` vì tiêu đề và chữ đã có trong thẻ.

## 5. Kiểm tra trước khi dùng

- [ ] Không có chữ lạ, logo, dấu mờ trong ảnh.
- [ ] Nhân vật không giống nhân vật có bản quyền (tóc, trang phục, đạo cụ). Kiểm: không tóc đen dựng đứng, không áo gi cam + đai xanh, không viên ngọc tròn cam có sao đỏ.
- [ ] Nếu AI vẫn ra tóc dựng/áo cam: thêm vào negative prompt và tạo lại; đừng dùng ảnh đó.
- [ ] Tay/ngón tay không bị méo; chủ thể không bị cắt.
- [ ] Màu hòa với giao diện kem–cam, chữ đặt lên vẫn đạt contrast 4.5:1.
- [ ] Kiểm tra điều khoản dùng thương mại của công cụ tạo ảnh bạn dùng.
