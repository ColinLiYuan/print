'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { productService } from '@/services';
import type { Product, ProductListResponse } from '@/types';
import { getTranslation } from '@/lib/i18n';
import { useParams } from 'next/navigation';
import { categories } from '@/lib/categories';
import { getImageUrl as getR2ImageUrl, R2_BASE_URL } from '@/lib/r2-config';

export default function ProductsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'zh';
  // 确保 locale 是有效的语言代码
  const validLocales = ['zh', 'en', 'es', 'ru'] as const;
  const currentLocale = validLocales.includes(locale as any) ? (locale as typeof validLocales[number]) : 'en';
  const translations = getTranslation(currentLocale);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
    hasNext: false,
    hasPrevious: false,
  });

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async (page: number = 0) => {
    try {
      setLoading(true);
      console.log('Fetching products, page:', page);
      const response: ProductListResponse = await productService.getProducts(page, 12);
      
      console.log('API Response:', response);
      
      // 确保响应数据存在
      if (!response) {
        throw new Error('No response from API');
      }
      
      if (!response.content) {
        console.error('Response missing content:', response);
        throw new Error('Invalid API response: missing content');
      }
      
      // 根据分类筛选
      let filteredProducts = response.content;
      if (selectedCategory !== 'all') {
        filteredProducts = response.content.filter(product => 
          product.categories && Array.isArray(product.categories) && product.categories.some(cat => cat.includes(selectedCategory))
        );
      }
      
      console.log('Filtered products:', filteredProducts.length);
      
      setProducts(filteredProducts);
      setPagination({
        currentPage: response.currentPage ?? 0,
        totalPages: response.totalPages ?? 0,
        totalElements: response.totalElements ?? 0,
        hasNext: response.hasNext ?? false,
        hasPrevious: response.hasPrevious ?? false,
      });
    } catch (err) {
      console.error('Fetch products error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    fetchProducts(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 获取图片完整 URL（使用 Cloudflare R2 CDN）
  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return getPlaceholderUrl();
    // 如果已经是完整 URL，直接返回
    if (imagePath.startsWith('http')) return imagePath;
    // 后端返回的路径如 print/product/xxx.webp，拼接 R2 CDN URL
    return `https://pub-e5d14c6d386c4d90979458082617517a.r2.dev/${imagePath}`;
  };

  // 获取占位图绝对 URL（避免被 locale 路由拦截）
  const getPlaceholderUrl = () => {
    return typeof window !== 'undefined'
      ? new URL('/placeholder-product.svg', window.location.origin).href
      : '/placeholder-product.svg';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#00F2FE] mx-auto mb-4"></div>
          <p className="text-gray-400">{translations.common.loading}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <button
            onClick={() => fetchProducts()}
            className="px-6 py-2 bg-[#00F2FE] text-[#050505] rounded-lg font-medium hover:bg-[#00C4CC] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 242, 254, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 254, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5 mb-6">
              <span className="text-sm text-[#00F2FE] font-medium tracking-wide">
                {pagination.totalElements} Products Available
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#E5E5E5] mb-6">
              {translations.products.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {translations.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter - 嵌套层级设计 */}
      <section className="py-8 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-start gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {/* All Products */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-semibold shadow-lg shadow-[#00F2FE]/20'
                  : 'border border-white/10 text-gray-400 hover:border-[#00F2FE]/50 hover:text-[#E5E5E5] hover:bg-white/5'
              }`}
            >
              All Products
            </button>
            
            {/* Categories with subcategories */}
            {categories.filter(cat => cat.slug !== 'best-sellers').map((category) => {
              const isExpanded = expandedCategories.includes(category.slug);
              const hasChildren = category.children && category.children.length > 0;
              
              return (
                <div key={category.slug} className="flex-shrink-0">
                  {/* Main Category */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (hasChildren) {
                          setExpandedCategories(prev =>
                            prev.includes(category.slug)
                              ? prev.filter(s => s !== category.slug)
                              : [...prev, category.slug]
                          );
                        }
                        setSelectedCategory(category.slug);
                      }}
                      className={`px-5 py-2.5 rounded-lg whitespace-nowrap transition-all flex items-center gap-2 ${
                        selectedCategory === category.slug && !expandedCategories.includes(category.slug)
                          ? 'bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] font-semibold shadow-lg shadow-[#00F2FE]/20'
                          : 'border border-white/10 text-gray-400 hover:border-[#00F2FE]/50 hover:text-[#E5E5E5] hover:bg-white/5'
                      }`}
                    >
                      {category.name}
                      {hasChildren && (
                        <span className={`text-xs transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      )}
                    </button>
                    
                    {/* Subcategories Dropdown */}
                    {hasChildren && isExpanded && (
                      <div className="absolute top-full left-0 mt-2 bg-[#141414] border border-white/10 rounded-lg shadow-xl overflow-hidden z-50 min-w-[200px]">
                        {category.children!.map((sub) => (
                          <button
                            key={sub.slug}
                            onClick={() => {
                              setSelectedCategory(sub.slug);
                              setExpandedCategories([]);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-all ${
                              selectedCategory === sub.slug
                                ? 'bg-gradient-to-r from-[#00F2FE]/20 to-[#00C4CC]/20 text-[#00F2FE] font-medium'
                                : 'text-gray-400 hover:bg-white/5 hover:text-[#E5E5E5]'
                            }`}
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00F2FE]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00F2FE]/10 hover:-translate-y-1"
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] shadow-lg shadow-[#00F2FE]/30">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.alt || product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = getPlaceholderUrl();
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Quick view overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-[#00F2FE]/90 backdrop-blur-sm text-[#050505] px-6 py-3 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Details →
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  {/* Brand & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#00F2FE] uppercase tracking-wider">
                      {product.brand}
                    </span>
                    {product.categories && (
                      <span className="text-xs text-gray-500">
                        {Array.isArray(product.categories) ? product.categories[0].split('/').pop() : product.categories.split('/').pop()}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#E5E5E5] group-hover:text-[#00F2FE] transition-colors duration-300 line-clamp-2 min-h-[56px] leading-tight">
                    {product.title}
                  </h3>

                  {/* Description Preview */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
                    {product.description ? product.description.replace(/###|\*\*/g, '').substring(0, 120) + '...' : 'Premium security product'}
                  </p>

                  {/* Features Tags */}
                  {product.features && product.features.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs rounded-full bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/20 font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Price Section */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-baseline gap-3">
                      {product.originalPrice !== undefined && product.originalPrice !== null && product.originalPrice > product.currentPrice && (
                        <span className="text-base text-gray-600 line-through font-medium">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] bg-clip-text text-transparent">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                    </div>
                    {product.minOrder !== undefined && product.minOrder !== null && product.minOrder > 1 && (
                      <div className="flex items-center gap-2 mt-2">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p className="text-xs text-gray-500">
                          MOQ: {product.minOrder} pcs
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center space-x-4">
              <button
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={!pagination.hasPrevious}
                className="px-6 py-3 rounded-lg border border-white/10 text-[#E5E5E5] hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  let pageNum;
                  if (pagination.totalPages <= 5) {
                    pageNum = i;
                  } else if (pagination.currentPage <= 2) {
                    pageNum = i;
                  } else if (pagination.currentPage >= pagination.totalPages - 3) {
                    pageNum = pagination.totalPages - 5 + i;
                  } else {
                    pageNum = pagination.currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                        pagination.currentPage === pageNum
                          ? 'bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505]'
                          : 'border border-white/10 text-[#E5E5E5] hover:bg-white/5'
                      }`}
                    >
                      {pageNum + 1}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={!pagination.hasNext}
                className="px-6 py-3 rounded-lg border border-white/10 text-[#E5E5E5] hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <p className="text-gray-400 text-lg mb-2">No products found</p>
              <p className="text-gray-500 text-sm">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
