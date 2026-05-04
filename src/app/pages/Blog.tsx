import { Hero } from "@/app/components/Hero";
import { SEO } from "@/app/components/SEO";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/context/LanguageContext";
import { useState, useEffect } from "react";
import { getAllPosts, type BlogPost as SanityBlogPost } from "@/lib/sanity";

export function Blog() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('🔍 Fetching blog posts from Sanity...');
        const fetchedPosts = await getAllPosts();
        console.log('✅ Fetched posts:', fetchedPosts);
        console.log('📊 Number of posts:', fetchedPosts.length);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('❌ Error loading posts:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const getThemeStyles = (color: 'blue' | 'purple' | 'emerald') => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-blue-400',
          hoverText: 'group-hover:text-blue-400',
          hoverBorder: 'hover:border-blue-500/50',
          bg: 'bg-blue-900/20',
          placeholderText: 'text-blue-500/30'
        };
      case 'purple':
        return {
          text: 'text-purple-400',
          hoverText: 'group-hover:text-purple-400',
          hoverBorder: 'hover:border-purple-500/50',
          bg: 'bg-purple-900/20',
          placeholderText: 'text-purple-500/30'
        };
      case 'emerald':
        return {
          text: 'text-emerald-400',
          hoverText: 'group-hover:text-emerald-400',
          hoverBorder: 'hover:border-emerald-500/50',
          bg: 'bg-emerald-900/20',
          placeholderText: 'text-emerald-500/30'
        };
    }
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Read the latest articles about VPN security, privacy, streaming, gaming, and online protection."
        keywords={['VPN blog', 'cybersecurity', 'online privacy', 'VPN tutorials', 'internet security']}
      />
      <Hero
        badgeText={t.blog.badge}
        title={t.blog.title}
        subTitle={t.blog.subtitle}
        showCtaAndImages={false}
      />

      {/* Blog Content */}
      <section className="py-20 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent mb-4"></div>
                  <p className="text-slate-400">Loading blog posts...</p>
                </div>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-400 text-lg mb-4">No blog posts found.</p>
                <p className="text-slate-500 text-sm">
                  Add your first blog post in the Sanity Studio dashboard.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => {
                    const styles = getThemeStyles(post.themeColor);
                    const slug = typeof post.slug === 'string' ? post.slug : post.slug.current;
                    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    });

                    return (
                      <Link to={`/blog/${slug}`} key={post._id}>
                        <article className={`bg-gradient-to-b from-slate-900/90 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 ${styles.hoverBorder} hover:border-white/20 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 h-full flex flex-col`}>
                          {/* Image Section */}
                          <div className="h-56 bg-slate-800/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                            {post.mainImage ? (
                              <img
                                src={post.mainImage}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            ) : (
                              <div className={`w-full h-full ${styles.bg} flex items-center justify-center`}>
                                <span className={`text-6xl ${styles.placeholderText}`}>📝</span>
                              </div>
                            )}
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 z-20">
                              <span className={`${styles.text} ${styles.bg} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10`}>
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-6 flex-1 flex flex-col">
                            <h2 className={`text-2xl text-white font-bold mb-3 ${styles.hoverText} transition-colors leading-tight`}>
                              {post.title}
                            </h2>

                            <p className="text-slate-400 text-base mb-6 line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>

                            {/* Author & Meta */}
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                                  {post.author.charAt(0)}
                                </div>
                                <div>
                                  <p className="text-white text-sm font-medium">{post.author}</p>
                                  <p className="text-slate-500 text-xs">{formattedDate}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-slate-500 text-xs">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Read More */}
                            <div className="mt-4 pt-4 border-t border-white/5">
                              <span className={`${styles.text} text-sm font-semibold transition-all flex items-center gap-2 group-hover:gap-3`}>
                                {t.blog.readArticle}
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
              </div>
            )}
        </div>
      </section>
    </>
  );
}
