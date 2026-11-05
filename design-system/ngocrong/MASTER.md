# Design System Master — Ngọc Rồng (trang fan/cộng đồng)

> Khi build một trang cụ thể: nếu có `design-system/ngocrong/pages/<tên>.md` thì file đó ghi đè Master này.

**Phương án:** A — Sunburst Hero
**Nguồn gốc:** Bộ sinh của ui-ux-pro-max gợi ý style *Vibrant & Block-based* + cặp font *Fredoka/Nunito* (khớp cơ sở dữ liệu). Bộ màu, token, quy tắc nội dung do tác giả tinh chỉnh; contrast đã tính tay (bên dưới). Không có preset riêng cho game anime.
**Ngày:** 2026-11-05 · **Stack:** Astro + Tailwind · **Ngôn ngữ:** vi-VN · **Mobile-first**

---

## 1. Vai trò & ràng buộc nội dung (BẮT BUỘC)

- Trang **cộng đồng/fan, KHÔNG phải trang chính thức**. Dòng này nằm ở header-banner nhỏ và footer.
- **Không** thu mật khẩu, tài khoản, nạp tiền/thẻ. Không có form đăng nhập.
- Nút "Tải game" chỉ trỏ về **nguồn chính thức** (URL cấu hình trong một file `src/data/links.ts`, mặc định placeholder `#` + cảnh báo "cập nhật link chính thức").
- Footer giữ nguyên: cảnh báo **chơi quá 180 phút/ngày không tốt cho sức khỏe** + thông tin giấy phép (số QĐ, đơn vị phát hành điền từ nguồn chính thức, không bịa).
- Không dùng logo/ảnh/GIF/tên-tài-sản của trang gốc. Minh họa = SVG tự vẽ. Ghi "Ngọc Rồng Online" như tên game để chỉ dẫn, kèm disclaimer thương hiệu thuộc chủ sở hữu.
- Bỏ hướng dẫn lỗi thời (Nokia/Java, Windows Phone, XP/7). Nền tảng hỗ trợ: Android, iOS, PC (Windows 10+).

## 2. Phong cách

**Vibrant & Block-based, bo tròn thân thiện:** khối màu lớn, khoảng cách section rộng (48–96px), tiêu đề lớn (≥32px mobile hero 36–40px), viền dày 2–3px, bóng "đổ cứng" nhẹ (offset, không blur nặng). Hero dùng gradient ấm (cam→vàng) + SVG mặt trời/tia sáng/hành tinh.

Tránh: neon, glassmorphism nặng, 3D WebGL, GIF nhỏ, emoji làm icon, hover-only.

## 3. Màu (token) — contrast đã tính (WCAG)

| Vai trò | Hex | Biến | Ghi chú contrast |
|---|---|---|---|
| Background | `#FFF8EC` | `--color-background` | |
| Foreground | `#2A1708` | `--color-foreground` | 16.2:1 trên bg |
| Card | `#FFFFFF` | `--color-card` | fg 17.2:1 |
| Muted fg | `#5B4636` | `--color-muted-foreground` | 8.4:1 trên bg |
| Border | `#F2D9B3` | `--color-border` | viền trang trí |
| Primary (CTA) | `#C2410C` | `--color-primary` | chữ trắng 5.2:1 |
| On primary | `#FFFFFF` | `--color-on-primary` | |
| Secondary | `#0369A1` | `--color-secondary` | chữ trắng 5.9:1; link trên bg 5.6:1 |
| Accent (vàng) | `#FBBF24` | `--color-accent` | **chỉ dùng chữ tối** `#2A1708` (10.3:1) |
| Hero gradient | `#FDBA74` → `#FDE68A` | `--hero-from/to` | chữ fg 10.2:1+ |
| Footer bg | `#2A1708` | `--color-footer` | chữ `#FDE9C8` 14.4:1 |
| Destructive | `#B91C1C` | `--color-destructive` | chữ trắng 6.5:1 |
| Ring (focus) | `#0369A1` | `--color-ring` | viền 3px + offset 2px, luôn hiện |

Hành tinh (chữ trắng trên nền): Trái Đất `#0369A1` (5.9) · Namek `#15803D` (5.0) · Xayda `#7E22CE` (7.0).

Quy tắc: không dùng hex thô trong component, chỉ token. Không truyền đạt ý nghĩa chỉ bằng màu (hành tinh luôn kèm tên + icon). Vàng accent không bao giờ làm chữ trên nền sáng.

## 4. Typography

- **Heading:** Baloo 2 600/700 (Fredoka KHÔNG có subset tiếng Việt nên đã thay) · **Body:** Nunito 400/600/700 (cả hai có subset `vietnamese`).
- Import: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Nunito:wght@400;600;700&display=swap&subset=vietnamese` (self-host ở bản build để nhanh/riêng tư).
- Body 16px (18px ≥768), line-height 1.6; heading line-height 1.15, `text-wrap: balance`. Tối đa ~65 ký tự/dòng cho đoạn văn.
- Kiểm thử dấu tiếng Việt (ế, ộ, ữ, Đ) ở mọi cỡ.

## 5. Spacing / Radius / Shadow

- Spacing: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96.
- Radius: nút 14px · card 20px · chip 999px.
- Shadow cứng: `--shadow-block: 0 4px 0 rgba(42,23,8,.9)`; card: `0 8px 24px rgba(42,23,8,.12)`.
- Container: max 1200px, gutter 16px (≥768: 24px).

## 6. Thành phần

**Nút chính "Tải game":** nền `--color-primary`, chữ trắng, 700, padding 14×28, **cao ≥ 52px**, viền 2px fg + shadow-block; hover: dịch lên 1px; active: lún 2px. Nhãn động theo nền tảng ("Tải cho Android" / "Tải cho iPhone" / "Tải cho Windows"), mặc định "Tải game". Phát hiện nền tảng bằng JS bổ sung (progressive enhancement); không JS vẫn thấy ba lựa chọn.
**Nút phụ:** viền 2px secondary, nền trong, chữ secondary; vd "Xem hướng dẫn tân thủ".
**Thẻ hành tinh:** card 20px, header màu hành tinh, SVG minh họa, 3 thông tin (đặc điểm, lớp nhân vật, phong cách chơi). Là `<button>`/radio-group có `aria-pressed`, chọn → panel chi tiết dưới (không chỉ hover). Bàn phím: mũi tên/Tab, Enter.
**Bước tân thủ:** 3–5 bước, mỗi bước icon SVG + tiêu đề ≤6 từ + 1 câu. Dưới là FAQ dạng `<details>`.
**Cộng đồng:** nhóm 3 thẻ Zalo / Discord / Telegram, mỗi thẻ có tên + icon + nút "Tham gia" (link mở tab mới `rel="noopener noreferrer"`).
**Tin/sự kiện:** card ngày + nhãn + tiêu đề, danh sách ≤4 mục.
**Touch target** ≥44×44px, khoảng cách ≥8px.

## 7. Bố cục trang chủ (thứ tự ưu tiên)

0. Banner mỏng: "Trang cộng đồng, không phải trang chính thức" (không cuộn theo, không chiếm hero)
1. **Hero:** H1 + 1 câu mô tả + nút "Tải game" (chính) + nút phụ; SVG minh họa bên phải (≥768) / phía dưới (mobile)
2. **Chọn hành tinh** (3 thẻ)
3. **Tân thủ** 3–5 bước + FAQ
4. **Sự kiện/tin** + **Cộng đồng** (cùng một vùng)
5. **Footer:** cảnh báo 180 phút + giấy phép + disclaimer + liên hệ

Nút tải lặp lại dạng sticky bar đáy trên mobile (ẩn khi hero đang hiện).

## 8. Chuyển động

- 150–250ms cho hover/press; 300–450ms cho reveal khi cuộn (opacity + translateY 16px). Chỉ animate `transform`/`opacity`.
- Hero: tia sáng/hành tinh trôi chậm (CSS, ≤1 vòng 30s), tạm dừng ngoài màn hình.
- **`prefers-reduced-motion: reduce`:** tắt mọi animation/parallax, hiện trạng thái cuối ngay.
- Không dùng GSAP trừ khi cần; ưu tiên CSS + IntersectionObserver (nhẹ cho Astro).

## 9. Truy cập & responsive

- Breakpoint kiểm thử: **375 / 768 / 1024 / 1440**; không cuộn ngang; `meta viewport` không khóa zoom.
- Focus: vòng 3px `--color-ring` + offset 2px, không bao giờ `outline: none` mà không thay thế; skip-link "Bỏ qua đến nội dung".
- Một `<h1>`; landmark `header/main/footer/nav`; `lang="vi"`; ảnh minh họa có `alt` hoặc `aria-hidden` nếu trang trí; icon-only button có `aria-label`.
- Cảnh báo 180 phút: chữ ≥14px, contrast ≥4.5:1, không ẩn/collapse.
- Ảnh: SVG/WebP, khai báo width/height (CLS < 0.1), lazy-load dưới màn hình đầu.

## 10. Checklist trước khi giao

- [ ] Không logo/ảnh/GIF của trang gốc; icon là SVG (không emoji)
- [ ] Banner "không chính thức" + footer 180 phút + giấy phép có mặt
- [ ] Không form mật khẩu/nạp tiền; link tải chỉ về nguồn chính thức
- [ ] Contrast ≥4.5:1 (chữ), ≥3:1 (UI) — kiểm lại bằng công cụ ở bản build
- [ ] Focus hiển thị; điều hướng bằng bàn phím trọn vẹn (thẻ hành tinh, FAQ)
- [ ] `prefers-reduced-motion` được tôn trọng
- [ ] 375/768/1024/1440 không vỡ bố cục, không cuộn ngang
- [ ] Dấu tiếng Việt hiển thị đúng
