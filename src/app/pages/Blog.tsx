import { Hero } from "@/app/components/Hero";
import { blogPosts } from "@/app/data/blogPosts";
import { Link } from "react-router-dom";
import { useLanguage } from "@/app/context/LanguageContext";

export function Blog() {
  const { t } = useLanguage();

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
      <Hero 
        badgeText={t.blog.badge}
        title={t.blog.title}
        subTitle={t.blog.subtitle}
        showCtaAndImages={false}
      />
      
      {/* Blog Content */}
      <section className="py-20 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => {
                  const styles = getThemeStyles(post.themeColor);
                  return (
                    <article key={post.id} className={`bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 ${styles.hoverBorder} transition-all group`}>
                        <div className="h-48 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className={`${styles.text} text-xs font-bold uppercase tracking-wider mb-3`}>{post.category}</div>
                            <h3 className={`text-xl text-white font-bold mb-3 ${styles.hoverText} transition-colors`}>{post.title}</h3>
                            <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link to={`/blog/${post.slug}`} className={`text-white text-sm font-medium ${styles.hoverText} transition-colors flex items-center gap-2`}>
                                {t.blog.readArticle} &rarr;
                            </Link>
                        </div>
                    </article>
                  );
                })}
            </div>
        </div>
      </section>
    </>
  );
}
