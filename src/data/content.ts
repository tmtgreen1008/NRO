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
  { icon: 'download', title: 'Tải game', text: 'Chỉ tải từ nguồn chính thức của nhà phát hành.' },
  { icon: 'user', title: 'Tạo nhân vật', text: 'Chọn hành tinh, đặt tên và kiểu tóc.' },
  { icon: 'book', title: 'Làm nhiệm vụ đầu', text: 'Nhiệm vụ dẫn đường giúp bạn lên cấp đầu tiên.' },
  { icon: 'users', title: 'Vào nhóm', text: 'Tham gia cộng đồng để tìm bạn cùng chơi.' },
  { icon: 'clock', title: 'Chơi có chừng mực', text: 'Nghỉ ngơi, không chơi quá 180 phút mỗi ngày.' },
] as const;

export const faqs = [
  { q: 'Trang này có phải trang chính thức không?', a: 'Không. Đây là trang cộng đồng do người hâm mộ lập. Chúng tôi không phát hành game và không quản lý tài khoản của bạn.' },
  { q: 'Tôi có phải đưa mật khẩu hoặc nạp tiền ở đây không?', a: 'Không bao giờ. Trang này không hỏi mật khẩu và không nhận nạp tiền. Mọi giao dịch chỉ thực hiện trong game chính thức.' },
  { q: 'Tải game ở đâu cho an toàn?', a: 'Nút "Tải game" chỉ dẫn về nguồn chính thức. Tránh file cài đặt từ link lạ hoặc nhóm chat.' },
  { q: 'Máy tôi chạy được không?', a: 'Hỗ trợ Android, iPhone/iPad và Windows 10 trở lên. Các thiết bị rất cũ không còn được hỗ trợ.' },
  { q: 'Nên chọn hành tinh nào lúc đầu?', a: 'Chưa chắc thì chọn Trái Đất. Bạn có thể thử các hành tinh khác bằng nhân vật mới sau.' },
] as const;

export const news = [
  { date: '2026-11-05', tag: 'Cộng đồng', title: 'Ra mắt trang cộng đồng', text: 'Trang tổng hợp hướng dẫn và link cộng đồng cho người chơi mới.' },
  { date: '2026-11-01', tag: 'Sự kiện', title: 'Nội dung mẫu — sự kiện tuần', text: 'Thay bằng tin thật từ nguồn chính thức.' },
  { date: '2026-10-28', tag: 'Hướng dẫn', title: 'Nội dung mẫu — mẹo cho tân thủ', text: 'Thay bằng bài viết của cộng đồng.' },
] as const;
