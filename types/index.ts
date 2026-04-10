// 产品类型定义
export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
  price?: number;
  features: string[];
  featuresEn: string[];
}

// 防伪验证结果类型
export interface VerifyResult {
  isValid: boolean;
  productId?: string;
  productName?: string;
  verifyTime?: string;
  message: string;
  messageEn: string;
}

// 防伪验证请求
export interface VerifyRequest {
  code: string;
}

// 联系表单类型
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API 响应通用类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T;
}
