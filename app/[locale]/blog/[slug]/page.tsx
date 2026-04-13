import { blogService } from '@/services';
import { BlogPost } from '@/types';
import Link from 'next/link';
import { formatImageUrl } from '@/lib/api-config';

interface BlogDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// 生成静态参数（可选，用于 SSG）
export async function generateStaticParams() {
  return [];
}

// 生成元数据
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  
  try {
    const blog = await blogService.getBlogBySlug(slug);
    return {
      title: `${blog.title} | HoloVerify`,
      description: blog.excerpt,
    };
  } catch {
    return {
      title: 'Blog Not Found | HoloVerify',
    };
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { locale, slug } = await params;
  
  let blog: BlogPost | null = null;
  let error: string | null = null;
  
  try {
    blog = await blogService.getBlogBySlug(slug);
  } catch (err: any) {
    error = err.message || 'Failed to load blog post';
  }
  
  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-[#E5E5E5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-[#9CA3AF] mb-8">{error || 'The requested blog post could not be found.'}</p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-[#00D4FF] text-[#0a0a0a] rounded-lg font-semibold hover:bg-[#00b8e6] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-[#E5E5E5]">
      {/* Hero */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-[#00D4FF] hover:text-[#00b8e6] mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>
          
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-medium rounded-full">
              {blog.category}
            </span>
            {blog.publishedAt && (
              <span className="text-[#6B7280] text-sm">
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {blog.viewCount !== undefined && (
              <span className="text-[#6B7280] text-sm">
                👁 {blog.viewCount} views
              </span>
            )}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>
          
          {/* Excerpt */}
          <p className="text-xl text-[#9CA3AF] leading-relaxed">
            {blog.excerpt}
          </p>
          
          {/* Author */}
          {blog.authorName && (
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00D4FF] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold">
                {blog.authorName.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium">{blog.authorName}</p>
                <p className="text-sm text-[#6B7280]">Author</p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Cover Image */}
      {blog.coverImage && (
        <section className="px-6 pb-8">
          <div className="max-w-4xl mx-auto">
            <img
              src={formatImageUrl(blog.coverImage)}
              alt={blog.title}
              className="w-full rounded-xl"
            />
          </div>
        </section>
      )}
      
      {/* Content */}
      <section className="px-6 pb-20">
        <article className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-xl p-8 md:p-12 border border-[#2a2a2a]">
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </section>
      
      {/* Tags */}
      {blog.tags && (() => {
        // 解析 tags：可能是 JSON 字符串或数组
        let tagsArray: string[] = [];
        if (typeof blog.tags === 'string') {
          try {
            tagsArray = JSON.parse(blog.tags);
          } catch {
            // 解析失败，尝试按逗号分隔
            tagsArray = (blog.tags as string).split(',').filter((t: string) => t.trim());
          }
        } else if (Array.isArray(blog.tags)) {
          tagsArray = blog.tags;
        }
        
        return tagsArray.length > 0 ? (
          <section className="px-6 pb-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tagsArray.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] text-[#9CA3AF] rounded-lg hover:border-[#00D4FF] hover:text-[#00D4FF] transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}
    </div>
  );
}
