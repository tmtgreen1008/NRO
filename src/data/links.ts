// Chỉ điền link CHÍNH THỨC từ nhà phát hành. Để "#" nếu chưa có — nút sẽ hiện cảnh báo.
export const downloads = {
  android: { label: 'Android', url: '#' },
  ios: { label: 'iPhone / iPad', url: '#' },
  pc: { label: 'Windows 10 trở lên', url: '#' },
} as const;

export const community = [
  { id: 'zalo', name: 'Zalo', desc: 'Nhóm chat nhanh, hỏi đáp mỗi ngày.', url: '#' },
  { id: 'discord', name: 'Discord', desc: 'Voice, tìm đồng đội, theo dõi sự kiện.', url: '#' },
  { id: 'telegram', name: 'Telegram', desc: 'Kênh thông báo tin mới, không spam.', url: '#' },
] as const;

// Điền từ nguồn chính thức. Không tự bịa số giấy phép.
export const license = {
  decision: '[Số quyết định cấp phép G1 — điền từ nguồn chính thức]',
  publisher: '[Đơn vị phát hành — điền từ nguồn chính thức]',
};
