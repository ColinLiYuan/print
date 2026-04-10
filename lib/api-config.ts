// API 基础配置
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

// API 端点
export const API_ENDPOINTS = {
  // 防伪查询
  VERIFY_CODE: '/anti-counterfeit/verify',
  
  // 产品相关
  PRODUCTS: '/products',
  PRODUCT_DETAIL: (id: string) => `/products/${id}`,
  
  // 其他可能需要的方法
  CONTACT: '/contact',
} as const;
