'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { productService } from '@/services';
import type { Product } from '@/types';
import { getTranslation } from '@/lib/i18n';
import { useParams } from 'next/navigation';

export default function ProductsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  const translations = getTranslation(locale === 'en' ? 'en' : 'zh');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // 这里暂时使用模拟数据,实际应该调用 API
      const mockProducts: Product[] = [
        {
          id: '1',
          name: '防伪标签 A型',
          nameEn: 'Anti-counterfeiting Label Type A',
          description: '采用全息技术的高端防伪标签,适用于各类产品包装',
          descriptionEn: 'High-end anti-counterfeiting label with holographic technology, suitable for various product packaging',
          image: '/products/label-a.jpg',
          category: 'labels',
          features: ['全息图案', '二维码', '唯一编码'],
          featuresEn: ['Holographic pattern', 'QR code', 'Unique code'],
        },
        {
          id: '2',
          name: '防伪证书 B型',
          nameEn: 'Anti-counterfeiting Certificate Type B',
          description: '专业防伪证书印刷,适用于高端产品和认证文件',
          descriptionEn: 'Professional anti-counterfeiting certificate printing for high-end products and certification documents',
          image: '/products/certificate-b.jpg',
          category: 'certificates',
          features: ['特种纸张', '水印技术', '烫金工艺'],
          featuresEn: ['Special paper', 'Watermark technology', 'Hot stamping'],
        },
        {
          id: '3',
          name: '防伪包装 C型',
          nameEn: 'Anti-counterfeiting Packaging Type C',
          description: '一体化防伪包装解决方案,保护产品从生产到销售',
          descriptionEn: 'Integrated anti-counterfeiting packaging solution, protecting products from production to sales',
          image: '/products/packaging-c.jpg',
          category: 'packaging',
          features: ['一次性封条', '变色油墨', 'RFID芯片'],
          featuresEn: ['One-time seal', 'Color-changing ink', 'RFID chip'],
        },
      ];
      
      setProducts(mockProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{translations.common.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.products.title}
          </h1>
          <p className="text-lg text-gray-600">
            {translations.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Product Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-blue-600 font-medium">Product Image</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {locale === 'en' ? product.nameEn : product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {locale === 'en' ? product.descriptionEn : product.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    {translations.products.features}:
                  </h4>
                  <ul className="space-y-1">
                    {(locale === 'en' ? product.featuresEn : product.features).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {translations.products.viewDetails}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <p className="text-gray-500 text-lg">暂无产品</p>
          </div>
        )}
      </div>
    </div>
  );
}
