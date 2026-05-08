import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";
import { getPostBySlug, portableTextToHtml, type BlogPost as SanityBlogPost } from "@/lib/sanity";
import { BlogPostSEO } from "@/app/components/SEO";
import { trackEvent } from "@/app/lib/analytics";

export function BlogPost() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const [post, setPost] = useState<SanityBlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      try {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
        if (fetchedPost) {
          trackEvent("blog_post_view", {
            slug,
            title: fetchedPost.title,
            category: fetchedPost.category,
            author: fetchedPost.author,
            read_time: fetchedPost.readTime,
          });
        } else {
          trackEvent("blog_post_not_found", { slug });
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white pt-24">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent mb-4"></div>
        <p className="text-slate-400">Loading blog post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white pt-24">
        <h1 className="text-4xl font-bold mb-4">{t.blog.postNotFound}</h1>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <ArrowLeft size={20} /> {t.blog.backToBlogs}
        </Link>
      </div>
    );
  }

  const themeColors = {
    blue: { badge: "text-blue-400 bg-blue-500/10 border-blue-500/30", accent: "text-blue-400" },
    purple: { badge: "text-purple-400 bg-purple-500/10 border-purple-500/30", accent: "text-purple-400" },
    emerald: { badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30", accent: "text-emerald-400" },
  };

  const colors = themeColors[post.themeColor];
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const htmlContent = post.body ? portableTextToHtml(post.body) : '';

  return (
    <>
      <BlogPostSEO post={post} />
      <div className="min-h-screen bg-slate-950 pt-20">
         {/* Back Button */}
         <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
         </div>

         {/* Article */}
         <article className="max-w-5xl mx-auto px-6 lg:px-12 py-12 pb-24">

            {/* Header */}
            <header className="mb-12 pb-12 border-b border-white/10">
               {/* Category Badge */}
               <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${colors.badge}`}>
                     {post.category}
                  </span>
               </div>

               {/* Title */}
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  {post.title}
               </h1>

               {/* Excerpt */}
               {post.excerpt && (
                  <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-3xl">
                     {post.excerpt}
                  </p>
               )}

               {/* Meta Info */}
               <div className="flex flex-wrap items-center gap-6 text-slate-400">
                  <div className="flex items-center gap-3">
                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                       {post.author.charAt(0)}
                     </div>
                     <div>
                        <p className="text-white font-semibold text-sm">By {post.author}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                           <time dateTime={post.publishedAt}>{formattedDate}</time>
                           <span>•</span>
                           <span>{post.readTime}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </header>

            {/* Featured Image */}
            {post.mainImage && (
              <div className="mb-16">
                <img
                  src={post.mainImage}
                  alt={post.title}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            )}

            {/* Content */}
            <div className="max-w-3xl">
               <div
                  className="article-content
                  [&>p]:text-slate-200 [&>p]:text-[1.125rem] [&>p]:leading-[2] [&>p]:mb-8
                  [&>p:first-of-type]:text-[1.25rem] [&>p:first-of-type]:leading-[2] [&>p:first-of-type]:text-slate-100 [&>p:first-of-type]:mb-10
                  [&>h2]:text-white [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-20 [&>h2]:mb-8 [&>h2]:first:mt-0 [&>h2]:leading-[1.3]
                  [&>h3]:text-white [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-16 [&>h3]:mb-6 [&>h3]:leading-[1.3]
                  [&>h4]:text-white [&>h4]:text-xl [&>h4]:font-semibold [&>h4]:mt-12 [&>h4]:mb-4 [&>h4]:leading-[1.3]
                  [&>ul]:my-8 [&>ul]:space-y-3
                  [&>ol]:my-8 [&>ol]:space-y-3
                  [&>li]:text-slate-200 [&>li]:text-[1.125rem] [&>li]:leading-[2]
                  [&>li]:marker:text-blue-400
                  [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-8 [&>blockquote]:py-4 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-slate-300 [&>blockquote]:text-xl [&>blockquote]:leading-[2]
                  [&>strong]:text-white [&>strong]:font-semibold
                  [&>em]:italic [&>em]:text-slate-200
                  [&>code]:text-blue-400 [&>code]:bg-slate-800/50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
                  [&>a]:text-blue-400 [&>a]:underline [&>a]:decoration-blue-400/30 [&>a]:underline-offset-4 [&>a]:transition-colors [&>a]:hover:text-blue-300 [&>a]:hover:decoration-blue-300
                  [&>a.external-link]:after:content-['_↗'] [&>a.external-link]:after:text-xs [&>a.external-link]:after:opacity-70
                  [&>a.internal-link]:font-medium
                  [&>img]:rounded-lg [&>img]:my-12 [&>img]:w-full [&>img]:shadow-xl"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
               />
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 pt-12 border-t border-white/10 max-w-3xl">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-slate-500 text-sm mb-1">Article by</p>
                     <p className="text-white font-semibold">{post.author}</p>
                  </div>
                  <Link
                     to="/blog"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                     <ArrowLeft size={18} />
                     Back to Blog
                  </Link>
               </div>
            </div>

         </article>
      </div>
    </>
  );
}
