// 产品分类配置 - 防伪行业嵌套层级版
export const categories = [
  {
    name: 'Best Sellers',
    slug: 'best-sellers',
    priority: 1.0,
    children: []
  },
  {
    name: 'Security Certificate & Document',
    slug: 'security-certificate-document',
    priority: 0.9,
    children: [] // 如果以后有毕业证、资格证细分可以往这塞
  },
  {
    name: 'Hologram Sticker',
    slug: 'hologram-sticker',
    priority: 0.9,
    children: []
  },
  {
    name: 'Security Label',
    slug: 'security-label',
    priority: 0.85,
    children: [
      { name: 'Holographic Transfer Label', slug: 'holographic-transfer-label' },
      { name: 'Optically Variable Label', slug: 'optically-variable-label' },
      { name: 'Fluorescent Label', slug: 'fluorescent-label' },
      { name: 'Tamper Evident Label', slug: 'tamper-evident-label' },
      { name: 'QR/Bar Code Label', slug: 'qr-barcode-label' },
      { name: 'Tax Label', slug: 'tax-label' },
      { name: 'Security Thread Label', slug: 'security-thread-label' },
      { name: 'Foil Stamping & Embossed Label', slug: 'foil-stamping-embossed-label' },
      { name: 'RFID Label', slug: 'rfid-label' }
    ]
  },
  {
    name: 'Security Tickets & Voucher',
    slug: 'security-tickets-voucher',
    priority: 0.8,
    children: [
      { name: 'Check Paper', slug: 'check-paper' },
      { name: 'Ticket', slug: 'ticket' },
      { name: 'Voucher', slug: 'voucher' },
      { name: 'Cash Coupon', slug: 'cash-coupon' }
    ]
  }
];