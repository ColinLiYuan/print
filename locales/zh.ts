export default {
  common: {
    home: '首页',
    solutions: '解决方案',
    verify: '真伪验证',
    industries: '行业应用',
    contact: '联系我们',
    language: '语言',
    submit: '提交申请',
    cancel: '取消',
    loading: '处理中...',
    error: '错误',
    success: '成功',
    learnMore: '了解更多',
    requestSample: '申请样品套装',
  },
  hero: {
    title: '消除假冒。恢复品牌完整性。',
    subtitle: '高安全全息解决方案和热转印箔，专为绝对品牌保护而设计。',
    ctaPrimary: '申请免费样品套装',
    ctaSecondary: '技术解决方案',
  },
  productMatrix: {
    title: '先进安全解决方案',
    holographic: {
      title: '全息烫金',
      description: '高速工业应用，具有卓越光学效果，适合大规模认证。',
      features: ['高速应用', '卓越光学', '定制设计'],
    },
    tamperEvident: {
      title: '防篡改技术',
      description: 'VOID和结构安全技术，移除时显示隐藏图案，防止标签重复使用。',
      features: ['VOID技术', '不可逆损坏', '即时验证'],
    },
    digitalTraceability: {
      title: '安全数字追踪',
      description: '加密二维码与可追溯性集成，实现端到端供应链可视化。',
      features: ['加密二维码', '实时追踪', '数据分析'],
    },
    customLabels: {
      title: '定制美学安全',
      description: '定制高级饰面与多层安全功能相结合。',
      features: ['定制设计', '多层安全', '品牌提升'],
    },
  },
  trustBarrier: {
    title: '多级安全架构',
    subtitle: '三层认证系统提供全面保护',
    levels: {
      level1: {
        title: '一级 - 公众识别',
        description: '肉眼可见的特征，供消费者即时验证。',
        features: ['彩虹效应', '变色油墨', '可见水印'],
      },
      level2: {
        title: '二级 - 专业验证',
        description: '通过紫外灯或10倍放大镜可见的半隐蔽特征。',
        features: ['紫外荧光', '微缩文字', '红外标记'],
      },
      level3: {
        title: '三级 - 司法鉴定',
        description: '用于法律和实验室证据的不可见分子模式。',
        features: ['DNA标记', '化学示踪剂', '分子签名'],
      },
    },
    process: {
      title: '保密生产流程',
      steps: [
        { title: '加密设计', description: '我们用军用级加密保护您的原始 artwork' },
        { title: '无尘生产', description: '在无尘、高安全环境中制造' },
        { title: '安全销毁', description: '母模和废料在生产后经过认证销毁' },
      ],
    },
  },
  industries: {
    title: '行业专属解决方案',
    subtitle: '为关键领域量身定制的安全协议',
    pharmaceuticals: {
      title: '医药行业',
      description: '通过序列化和追溯合规性保护患者安全。',
    },
    luxury: {
      title: '奢侈品',
      description: '维护品牌完整性，打击平行市场渗透。',
    },
    liquor: {
      title: '高端烟酒',
      description: '保护高端产品免受复杂假冒操作侵害。',
    },
    government: {
      title: '政府证件',
      description: '护照、身份证和证书的国家级别安全特征。',
    },
  },
  leadGen: {
    title: '申请安全咨询',
    subtitle: '完成此简短评估以获取定制化安全方案',
    step1: {
      title: '选择您的行业',
      description: '哪个领域需要保护？',
    },
    step2: {
      title: '选择安全级别',
      description: '您需要什么级别的认证？',
    },
    step3: {
      title: '联系信息',
      description: '我们应该将样品套装寄到哪里？',
    },
    next: '下一步',
    previous: '上一步',
    complete: '提交申请',
  },
  verify: {
    title: '产品认证',
    subtitle: '输入验证码以验证产品真伪',
    placeholder: '输入认证码',
    button: '立即验证',
    verifying: '验证中...',
    result: {
      valid: '认证成功',
      invalid: '认证失败',
      validMessage: '这是经我们安全数据库验证的正品。',
      invalidMessage: '无效代码或已验证过。请立即确认产品来源。',
      productInfo: '产品详情',
      verifyTime: '验证时间戳',
    },
  },
  solutions: {
    title: '行业专属安全解决方案',
    subtitle: '为全球关键行业量身定制的保护协议',
    pharma: {
      title: '医药行业',
      description: '我们的微缩文字和紫外油墨解决方案确保患者安全和品牌完整性，抵御全球假冒网络。',
    },
    beauty: {
      title: '美容与个人护理',
      description: '高级美学安全功能在提供强大防伪保护的同时提升奢华吸引力。',
    },
    liquor: {
      title: '酒类与烈酒',
      description: '防篡改密封和破坏性标签防止灌装操作并保护高端品牌价值。',
    },
    documents: {
      title: '证件与证书',
      description: '政府级HRI覆膜技术，具有多光谱特征，适用于身份证、护照和官方文件。',
    },
  },
  footer: {
    rights: '版权所有',
    address: '全球总部',
    email: '电子邮箱',
    phone: '直线电话',
    followUs: '关注我们',
    quickLinks: '快速链接',
    security: '安全特性',
    privacy: '隐私政策',
    terms: '服务条款',
  },
} as const;
