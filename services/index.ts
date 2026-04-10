import apiClient from '@/lib/api-client';
import { API_ENDPOINTS } from '@/lib/api-config';
import type { VerifyRequest, VerifyResult, Product, ApiResponse } from '@/types';

// 防伪验证服务
export const antiCounterfeitService = {
  // 验证防伪码
  async verifyCode(code: string): Promise<VerifyResult> {
    try {
      const response = await apiClient.post<ApiResponse<VerifyResult>>(
        API_ENDPOINTS.VERIFY_CODE,
        { code } as VerifyRequest
      );
      return response.data.data;
    } catch (error) {
      console.error('Verification failed:', error);
      throw error;
    }
  },
};

// 产品服务
export const productService = {
  // 获取产品列表
  async getProducts(): Promise<Product[]> {
    try {
      const response = await apiClient.get<ApiResponse<Product[]>>(
        API_ENDPOINTS.PRODUCTS
      );
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw error;
    }
  },

  // 获取产品详情
  async getProductDetail(id: string): Promise<Product> {
    try {
      const response = await apiClient.get<ApiResponse<Product>>(
        API_ENDPOINTS.PRODUCT_DETAIL(id)
      );
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch product detail:', error);
      throw error;
    }
  },
};
