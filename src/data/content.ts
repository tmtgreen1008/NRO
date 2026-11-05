export const planets = [
  {
    id: 'earth', name: 'Trái Đất', color: 'earth', race: 'Nhân loại',
    tagline: 'Dễ vào tay, hợp người mới.',
    traits: ['Cân bằng công thủ', 'Nhiều đồng đội, dễ tìm nhóm', 'Phù hợp chơi đầu tiên'],
  },
  {
    id: 'namek', name: 'Namek', color: 'namek', race: 'Người Namek',
    tagline: 'Bền bỉ, hồi phục và hỗ trợ.',
    traits: ['Trụ vững, lợi thế đánh dài', 'Hợp vai trò hỗ trợ nhóm', 'Lối chơi kiên nhẫn'],
  },
  {
    id: 'xayda', name: 'Xayda', color: 'xayda', race: 'Người Xayda',
    tagline: 'Sức mạnh bùng nổ, đánh nhanh.',
    traits: ['Sát thương cao', 'Hợp người thích tấn công', 'Cần tính toán thời điểm'],
  },
] as const;

export const steps = [
  { icon: 'download', title: 'Tải game', text: 'Tải từ nút Tải game trên trang này.' },
  { icon: 'user', title: 'Tạo nhân vật', text: 'Chọn hành tinh, đặt tên và kiểu tóc.' },
  { icon: 'book', title: 'Làm nhiệm vụ đầu', text: 'Nhiệm vụ dẫn đường giúp bạn lên cấp đầu tiên.' },
  { icon: 'users', title: 'Vào nhóm', text: 'Tham gia cộng đồng để tìm bạn cùng chơi.' },
  { icon: 'clock', title: 'Chơi có chừng mực', text: 'Nghỉ ngơi, không chơi quá 180 phút mỗi ngày.' },
] as const;

export const faqs = [
  { q: 'Làm sao biết trang này là thật?', a: 'Chỉ tin các link được đăng trên trang này và kênh cộng đồng chính thức của game. Đừng bấm link lạ gửi qua tin nhắn riêng.' },
  { q: 'Admin có bao giờ hỏi mật khẩu của tôi không?', a: 'Không bao giờ. Quản trị viên không hỏi mật khẩu hay mã OTP của bạn, dù là qua tin nhắn, cuộc gọi hay nhóm chat. Ai hỏi đều là lừa đảo.' },
  { q: 'Tải game ở đâu cho an toàn?', a: 'Hãy tải từ nút "Tải game" trên trang này. Tránh file cài đặt từ link lạ hoặc nhóm chat.' },
  { q: 'Máy tôi chạy được không?', a: 'Hỗ trợ Android, iPhone/iPad và Windows 10 trở lên. Các thiết bị rất cũ không còn được hỗ trợ.' },
  { q: 'Nên chọn hành tinh nào lúc đầu?', a: 'Chưa chắc thì chọn Trái Đất. Bạn có thể thử các hành tinh khác bằng nhân vật mới sau.' },
] as const;

export const news = [
  { date: '2026-11-05', tag: 'Cộng đồng', title: 'Ra mắt trang cộng đồng', text: 'Trang tổng hợp hướng dẫn và link cộng đồng cho người chơi mới.' },
  { date: '2026-11-01', tag: 'Sự kiện', title: 'Nội dung mẫu — sự kiện tuần', text: 'Thay bằng tin thật từ nguồn chính thức.' },
  { date: '2026-10-28', tag: 'Hướng dẫn', title: 'Nội dung mẫu — mẹo cho tân thủ', text: 'Thay bằng bài viết của cộng đồng.' },
] as const;

// ===== Sự kiện & ưu đãi — DỮ LIỆU MẪU, thay bằng thông tin thật trước khi đăng =====
export const eventsAreSample = true;

export const events = [
  { id: 'x2-nap-dau', art: 'x2', tag: 'Ưu đãi nạp', title: 'Nạp đầu nhân đôi', range: 'Mẫu: 01/12 – 07/12/2026', status: 'sap-dien-ra',
    short: 'Lần nạp đầu trong sự kiện nhận thêm 100% giá trị.',
    rules: ['Áp dụng một lần cho mỗi tài khoản.', 'Phần thưởng cộng trực tiếp sau khi nạp thành công.', 'Không áp dụng đồng thời với ưu đãi khác.'] },
  { id: 'qua-moc', art: 'gift', tag: 'Sự kiện', title: 'Quà mốc tích lũy', range: 'Mẫu: 05/11 – 30/11/2026', status: 'dang-dien-ra',
    short: 'Đạt mốc tích lũy để nhận hộp quà và vật phẩm hiếm.',
    rules: ['Mốc tính theo tổng nạp trong thời gian sự kiện.', 'Mỗi mốc nhận một lần.', 'Quà gửi vào hòm thư trong game.'] },
  { id: 'ngoc-giam-gia', art: 'gem', tag: 'Ưu đãi', title: 'Tuần lễ ngọc thưởng', range: 'Mẫu: 10/11 – 16/11/2026', status: 'dang-dien-ra',
    short: 'Nhận thêm ngọc thưởng cho mọi gói nạp trong tuần.',
    rules: ['Áp dụng cho tất cả các gói nạp.', 'Ngọc thưởng cộng cùng lúc với gói nạp.', 'Chi tiết xem bảng gói nạp.'] },
] as const;

export const statusLabel: Record<string, string> = {
  'dang-dien-ra': 'Đang diễn ra',
  'sap-dien-ra': 'Sắp diễn ra',
  'da-ket-thuc': 'Đã kết thúc',
};

export const topupTiers = [
  { amount: '20.000đ', gem: '200 ngọc', bonus: '' },
  { amount: '50.000đ', gem: '520 ngọc', bonus: '+4%' },
  { amount: '100.000đ', gem: '1.080 ngọc', bonus: '+8%' },
  { amount: '200.000đ', gem: '2.240 ngọc', bonus: '+12%' },
  { amount: '500.000đ', gem: '5.800 ngọc', bonus: '+16%' },
] as const;

export const topupSteps = [
  { icon: 'user', title: 'Đăng nhập', text: 'Đăng nhập tài khoản của bạn trên trang.' },
  { icon: 'planet', title: 'Chọn gói nạp', text: 'Chọn mệnh giá và xem ưu đãi đang áp dụng.' },
  { icon: 'check', title: 'Thanh toán', text: 'Thanh toán theo phương thức do trang công bố.' },
  { icon: 'download', title: 'Nhận ngọc', text: 'Ngọc cộng vào tài khoản sau khi giao dịch thành công.' },
] as const;
