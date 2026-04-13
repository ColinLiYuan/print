'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogService } from '@/services';
import { BlogPost } from '@/types';
import { formatImageUrl } from '@/lib/api-config';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export default function BlogPage({ params }: BlogPageProps) {
  const { locale } = useParams();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    loadBlogs();
  }, [currentPage]);

  const loadBlogs = async () => {
    setLoading(true);
    try {
      const data = await blogService.getPublishedBlogs(currentPage, pageSize);
      setBlogs(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error('Failed to load blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-[#E5E5E5]">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            Expert analysis and industry updates on security technology, anti-counterfeiting solutions, and brand protection strategies.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00D4FF]"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#9CA3AF] text-xl">No blog posts available</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/${locale}/blog/${blog.slug}`}
                    className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#00D4FF] transition-all duration-300"
                  >
                    {/* Cover Image */}
                    {blog.coverImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={formatImageUrl(blog.coverImage)}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Category & Date */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-[#00D4FF]/10 text-[#00D4FF] text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                        <span className="text-sm text-[#6B7280]">
                          {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : ''}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-[#9CA3AF] text-sm line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      {blog.tags && (() => {
                        // 解析 tags：后端返回 JSON 字符串，前端转为数组
                        const parseTags = (tags: string | string[] | undefined): string[] => {
                          if (!tags) return [];
                          if (Array.isArray(tags)) return tags;
                          try {
                            return JSON.parse(tags);
                          } catch {
                            return tags.split(',').filter(t => t.trim());
                          }
                        };
                        
                        const tagsArray = parseTags(blog.tags);
                        
                        return tagsArray.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {tagsArray.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-[#2a2a2a] text-[#9CA3AF] text-xs rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#00D4FF] transition-all"
                  >
                    Previous
                  </button>
                  <span className="text-[#9CA3AF]">
                    Page {currentPage + 1} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={currentPage >= totalPages - 1}
                    className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#00D4FF] transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
