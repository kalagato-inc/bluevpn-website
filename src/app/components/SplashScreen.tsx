import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { EncryptedText } from '@/app/components/ui/encrypted-text';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isTextDone, setIsTextDone] = useState(false);

  useEffect(() => {
    if (isTextDone) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Wait 1 second after text finishes before triggering completion
      return () => clearTimeout(timer);
    }
  }, [isTextDone, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#02040a]"
    >
      <div className="font-['Space_Grotesk'] font-medium text-[38.88px] leading-[38.88px] tracking-[-0.972px]">
        <EncryptedText
          text="Welcome to Fast Vpn Turbo Ip Changer"
          revealDelayMs={60}
          encryptedClassName="text-slate-700"
          revealedClassName="text-[rgba(59,136,208,0.94)]"
          onComplete={() => setIsTextDone(true)}
        />
      </div>
    </motion.div>
  );
}
