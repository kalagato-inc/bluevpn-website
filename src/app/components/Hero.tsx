import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Globe, Power, Lock, MapPin } from 'lucide-react';
import DownloadHeroButton from '@/imports/Group1437253753';
import ShinyText from '@/app/components/ui/ShinyText';
import { useLanguage } from "@/app/context/LanguageContext";
import { trackEvent } from "@/app/lib/analytics";

export function Hero({
  badgeText,
  title,
  subTitle,
  showCtaAndImages = true,
}: {
  badgeText?: string;
  title?: string;
  subTitle?: string;
  showCtaAndImages?: boolean;
}) {
  const { t } = useLanguage();
  
  // Use props if provided (overrides translation), otherwise use translation
  const displayBadgeText = badgeText || t.hero.badge;
  const displayTitle = title || t.hero.title;
  const displaySubTitle = subTitle || t.hero.subtitle;

  return (
    <section 
      className={`relative overflow-hidden bg-[#02040a] flex flex-col ${
        showCtaAndImages 
          ? "pt-32 pb-32 lg:pt-48 lg:pb-48 min-h-screen justify-center" 
          : "pt-32 pb-10 lg:pt-40 lg:pb-12"
      }`}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-950/0 to-transparent pointer-events-none" />
      
      {/* Top Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8 items-center gap-4"
          >
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-blue-400/50" />
            <span className="text-blue-200/80 text-sm font-medium tracking-widest uppercase font-[Space_Grotesk]">{displayBadgeText}</span>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-blue-400/50" />
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9] font-[Space_Grotesk]"
          >
            <ShinyText 
              text={displayTitle}
              disabled={false} 
              speed={3} 
              className=""
              color="#ffffff"
              shineColor="#3b82f6"
            />
          </motion.h1>

          {/* Subheadline with Highlight */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {displaySubTitle}
          </motion.p>


          {showCtaAndImages && (
            <>
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
              >
                <a
                  href="https://apps.apple.com/us/app/fast-vpn-turbo-ip-changer/id6444899367"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("download_click", { location: "hero", platform: "ios" })}
                  className="w-[243px] h-[91px] relative cursor-pointer hover:scale-105 transition-transform duration-300 block"
                >
                   <DownloadHeroButton />
                </a>
              </motion.div>

              {/* Stacked Mockups Container */}
              <div className="relative h-[400px] w-full max-w-2xl mx-auto perspective-[1000px]">
                 
                 {/* Left Card (Behind) */}
                 <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -10, scale: 0.9 }}
                    animate={{ opacity: 0.4, x: -140, rotateY: -15, scale: 0.9 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[380px] bg-[#0B101B] rounded-xl border border-white/5 p-6 shadow-2xl z-0 hidden md:block"
                 >
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <span className="text-slate-400 text-sm font-medium">{t.hero.serverList}</span>
                        <Globe size={16} className="text-slate-500" />
                    </div>
                    <div className="space-y-3">
                        {[
                            { country: 'United States', ping: '24ms' },
                            { country: 'United Kingdom', ping: '42ms' },
                            { country: 'Germany', ping: '45ms' },
                            { country: 'Japan', ping: '120ms' },
                        ].map((server, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-green-500" />
                                     <span className="text-slate-300 text-sm">{server.country}</span>
                                 </div>
                                 <span className="text-slate-500 text-xs">{server.ping}</span>
                            </div>
                        ))}
                    </div>
                 </motion.div>

                 {/* Right Card (Behind) */}
                 <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: 10, scale: 0.9 }}
                    animate={{ opacity: 0.4, x: 140, rotateY: 15, scale: 0.9 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[380px] bg-[#0B101B] rounded-xl border border-white/5 p-6 shadow-2xl z-0 hidden md:block"
                 >
                     <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <span className="text-slate-400 text-sm font-medium">{t.hero.protection}</span>
                        <ShieldCheck size={16} className="text-slate-500" />
                    </div>
                     <div className="space-y-6">
                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                             <div className="text-blue-400 text-xs uppercase font-bold mb-1">{t.hero.status}</div>
                             <div className="text-white font-medium">{t.hero.encrypted}</div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">{t.hero.killSwitch}</span>
                                <div className="w-10 h-5 rounded-full bg-green-500/20 p-0.5">
                                    <div className="w-4 h-4 rounded-full bg-green-500 ml-auto" />
                                </div>
                            </div>
                             <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm">{t.hero.dnsLeak}</span>
                                <div className="w-10 h-5 rounded-full bg-green-500/20 p-0.5">
                                    <div className="w-4 h-4 rounded-full bg-green-500 ml-auto" />
                                </div>
                            </div>
                        </div>
                     </div>
                 </motion.div>

                 {/* Center Card (Main) */}
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] h-[420px] bg-[#0F1623] rounded-2xl border border-blue-500/20 p-1 shadow-[0_0_60px_-10px_rgba(37,99,235,0.3)] z-10"
                 >
                    <div className="w-full h-full rounded-xl bg-[#0B101B] p-6 flex flex-col items-center relative overflow-hidden">
                        
                        {/* Active Glow behind button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] animate-pulse" />

                        {/* Header */}
                        <div className="w-full flex justify-between items-center mb-10 relative z-10">
                            <div className="flex items-center gap-2 text-emerald-400/90 bg-emerald-950/30 px-2 py-1 rounded-full border border-emerald-500/20">
                                 <Lock size={12} />
                                 <span className="text-[10px] font-mono tracking-wider uppercase font-bold">Encrypted</span>
                            </div>
                            <div className="flex items-center gap-2">
                                 <span className="text-blue-400 text-[10px] font-mono tracking-widest uppercase font-bold text-shadow-sm">{t.hero.connected}</span>
                                 <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                 </span>
                            </div>
                        </div>

                        {/* Main Button (Active State) */}
                        <div className="relative z-10">
                             <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                             <button className="relative w-36 h-36 rounded-full border-[6px] border-blue-500/20 bg-[radial-gradient(circle_at_center,_#1e3a8a_0%,_#0f172a_100%)] flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] group overflow-hidden">
                                 {/* Inner Ring Animation */}
                                 <div className="absolute inset-0 border-[2px] border-blue-400/30 rounded-full animate-[spin_8s_linear_infinite]" />
                                 <div className="absolute inset-2 border border-blue-400/10 rounded-full" />
                                 
                                 <Power size={48} className="text-white drop-shadow-[0_0_10px_rgba(59,130,246,1)] relative z-10" />
                             </button>
                        </div>

                        {/* Connection Info */}
                        <div className="mt-8 w-full space-y-3 relative z-10">
                             <div className="text-center mb-4">
                                <div className="text-blue-300/50 text-[10px] uppercase tracking-widest mb-1 font-medium">{t.hero.sessionDuration}</div>
                                <div className="text-white font-mono text-2xl tracking-widest font-light text-shadow-glow">00:42:15</div>
                             </div>
                             
                             <div className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-900/20 to-slate-900/40 border border-blue-500/20 flex items-center justify-between backdrop-blur-md">
                                 <div className="flex items-center gap-3">
                                     <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/50">
                                         <Globe size={14} className="text-white" />
                                     </div>
                                     <div className="flex flex-col text-left">
                                         <span className="text-white text-sm font-bold">San Francisco</span>
                                         <span className="text-blue-400 text-[10px] uppercase tracking-wide font-medium">United States</span>
                                     </div>
                                 </div>
                                 <div className="flex items-end flex-col">
                                    <span className="text-slate-500 text-[10px] font-bold">{t.hero.ipAddress}</span>
                                    <span className="text-slate-300 text-xs font-mono">192.168.0.1</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                 </motion.div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
