import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/app/data/blogPosts";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";

export function BlogPost() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#02040a] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 font-[Space_Grotesk]">{t.blog.postNotFound}</h1>
        <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          <ArrowLeft size={20} /> {t.blog.backToBlogs}
        </Link>
      </div>
    );
  }

  const themeColors = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  };

  const accentColor = themeColors[post.themeColor];

  return (
    <>
      <div className="pt-24 min-h-screen bg-[#02040a] relative overflow-hidden font-sans">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/0 to-transparent pointer-events-none" />

         <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
            
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-[Space_Grotesk] font-medium">{t.blog.backToBlogs}</span>
            </Link>

            {/* Main Card Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
                {/* Header Section */}
                <header className="mb-10 text-center md:text-left">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                       <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${accentColor} self-start`}>
                          {post.category}
                       </span>
                       
                       <div className="flex flex-wrap items-center gap-4 md:gap-6 text-slate-400 text-sm font-[Space_Grotesk]">
                          <div className="flex items-center gap-2">
                             <User size={16} className="text-blue-500" />
                             <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Calendar size={16} className="text-blue-500" />
                             <span>{post.date}</span>
                          </div>
                           <div className="flex items-center gap-2">
                             <Clock size={16} className="text-blue-500" />
                             <span>{post.readTime}</span>
                          </div>
                       </div>
                   </div>

                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[Space_Grotesk] tracking-tight">
                      {post.title}
                   </h1>
                </header>

                {/* Featured Image */}
                <div
                   className="w-full h-[300px] md:h-[450px] bg-slate-900/50 rounded-2xl mb-12 border border-white/5 overflow-hidden relative group"
                >
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] to-transparent opacity-50" />
                    )}
                    {!post.image && (
                      <div className={`w-full h-full flex items-center justify-center font-mono text-lg tracking-widest ${post.themeColor === 'blue' ? 'text-blue-500/20 bg-blue-500/5' : post.themeColor === 'purple' ? 'text-purple-500/20 bg-purple-500/5' : 'text-emerald-500/20 bg-emerald-500/5'}`}>
                         {t.blog.featuredImage}
                      </div>
                    )}
                </div>

                {/* Content */}
                <div 
                   className="prose prose-invert prose-lg max-w-none 
                   prose-headings:font-[Space_Grotesk] prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                   prose-h2:border-t prose-h2:border-white/10 prose-h2:pt-8 prose-h2:mb-6 prose-h2:mt-16
                   prose-h3:border-t prose-h3:border-white/10 prose-h3:pt-6 prose-h3:mb-6 prose-h3:mt-12
                   prose-p:text-slate-300 prose-p:leading-relaxed
                   prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-white prose-strong:font-semibold
                   prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                   prose-li:text-slate-300 prose-li:marker:text-blue-500"
                   dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Footer */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                   <span className="text-slate-400 font-[Space_Grotesk] font-medium">{t.blog.shareArticle}</span>
                   <div className="flex gap-4">
                      <button className="p-3 rounded-full bg-white/5 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 transition-all border border-transparent hover:border-blue-500/30">
                         <Share2 size={20} />
                      </button>
                   </div>
                </div>
            </motion.div>

         </article>
      </div>
    </>
  );
}
