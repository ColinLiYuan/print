'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { productService } from '@/services';
import type { Product } from '@/types';
import { getTranslation } from '@/lib/i18n';

export default function ProductDetailPage() {
  const allParams = useParams();
  const locale = (allParams?.locale as string) || 'zh';
  const productId = allParams?.id as string;
  const translations = getTranslation(locale === 'en' ? 'en' : 'zh');
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      // 这里暂时使用模拟数据
      const mockProduct: Product = {
        id: productId,
        name: '防伪标签 A型',
        nameEn: 'Anti-counterfeiting Label Type A',
        description: '采用全息技术的高端防伪标签,适用于各类产品包装。我们的防伪标签采用先进的全息技术和独特的编码系统,确保每个标签都是唯一的,无法复制。',
        descriptionEn: 'High-end anti-counterfeiting label with holographic technology, suitable for various product packaging. Our labels use advanced holographic technology and unique coding systems to ensure each label is unique and cannot be replicated.',
        image: '/products/label-a.jpg',
        category: 'labels',
        price: 0.5,
        features: ['全息图案', '二维码', '唯一编码', '易碎材料', '定制设计'],
        featuresEn: ['Holographic pattern', 'QR code', 'Unique code', 'Fragile material', 'Custom design'],
      };
      
      setProduct(mockProduct);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load product details');
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

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 text-lg mb-4">{error || 'Product not found'}</p>
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {translations.products.title}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                {translations.common.home}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/products" className="text-blue-600 hover:text-blue-800">
                {translations.products.title}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">
              {locale === 'en' ? product.nameEn : product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="text-blue-600 font-medium text-lg">Product Image</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {translations.products.category}: {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'en' ? product.nameEn : product.name}
              </h1>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {locale === 'en' ? product.descriptionEn : product.description}
              </p>

              {product.price && (
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-500 ml-2">/ piece</span>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {translations.products.features}:
                </h3>
                <ul className="space-y-2">
                  {(locale === 'en' ? product.featuresEn : product.features).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto space-y-3">
                <Link
                  href="/verify"
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {translations.verify.button}
                </Link>
                <Link
                  href="/contact"
                  className="block w-full border-2 border-blue-600 text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {translations.common.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
