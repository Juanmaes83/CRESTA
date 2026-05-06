"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Play, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const word = "CRESTA";

export function HeroVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 1.5;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Text fades out based on scroll
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.4));
  const overlayOpacity = 0.4 + (scrollProgress * 0.3);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="/images/hero-main.png"
          >
            <source 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcdafadc-cb7e-4cb7-9cbf-edcbaf2360a5_1-cNBCz5fomcLRmm1cTXSBOKCq10VP91.mp4" 
              type="video/mp4" 
            />
          </video>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            style={{ opacity: overlayOpacity }}
          />

          {/* Social Proof Badge */}
          <div 
            className="absolute top-6 left-6 z-20 md:top-10 md:left-10"
            style={{ opacity: textOpacity }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-white">
                4.9 · {t("Mas de 3.000 aventureros", "3,000+ adventurers")}
              </span>
            </div>
          </div>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-6 right-6 z-20 md:top-10 md:right-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all hover:bg-white/30"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-white" />
            ) : (
              <Volume2 className="h-5 w-5 text-white" />
            )}
          </button>

          {/* Brand Text - Fades out on scroll */}
          <div 
            className="absolute inset-0 flex items-end overflow-hidden pb-6 md:pb-10"
            style={{ opacity: textOpacity }}
          >
            <h1 className="w-full text-[22vw] font-medium leading-[0.8] tracking-tighter text-white">
              {word.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                    transition: 'all 1.5s',
                    transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            style={{ opacity: textOpacity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-widest text-white/70">
                {t("Scroll para explorar", "Scroll to explore")}
              </span>
              <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[150vh]" />

      {/* Tagline Section */}
      <div className="px-6 pt-32 pb-28 md:pt-48 md:px-12 md:pb-36 lg:px-20 lg:pt-56 lg:pb-44">
        <p className="mx-auto max-w-2xl text-center text-2xl leading-relaxed text-foreground font-medium md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          {t(
            "La botella inteligente que te guia, ilumina y calienta",
            "The smart bottle that guides, illuminates and warms you"
          )}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
          {t(
            "Ligera, duradera y lista para la aventura.",
            "Lightweight, durable and adventure-ready."
          )}
        </p>
      </div>
    </section>
  );
}
