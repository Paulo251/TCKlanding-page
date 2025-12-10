import { useEffect, useState } from "react";
import jettImage from "@/assets/jett.png";
import tckAvatar from "@/assets/tck-avatar.png";
import { Twitch, Youtube, ExternalLink } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated glow orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(199 100% 50% / 0.4) 0%, transparent 70%)",
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.3) 0%, transparent 70%)",
          transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)`,
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--c9-blue) / 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--c9-blue) / 0.2) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Jett parallax image */}
      <div 
        className="absolute right-0 bottom-0 w-full md:w-2/3 lg:w-1/2 h-full flex items-end justify-end pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <img 
          src={jettImage} 
          alt="Jett - Valorant" 
          className="w-full max-w-2xl h-auto object-contain opacity-80 drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 40px hsl(199 100% 50% / 0.3))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Cloud9 badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full animate-fade-in">
            <span className="text-sm font-semibold text-secondary tracking-wider uppercase">Patrocinado por</span>
            <span className="text-primary font-display font-bold">Cloud9</span>
          </div>

          {/* Avatar and name */}
          <div className="flex items-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
                <img src={tckAvatar} alt="TcK" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-foreground rounded-full animate-pulse" />
              </div>
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-display font-black text-gradient tracking-tight">
                TcK
              </h1>
              <p className="text-secondary text-lg font-medium">Streamer & Content Creator</p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground font-medium">The Crying Kid</span> • 
            <span className="text-foreground font-medium"> The Cringe King</span> • 
            <span className="text-foreground font-medium"> The Cu King</span>
          </p>

          {/* Live schedule */}
          <div className="glass-card rounded-xl p-6 mb-8 neon-border animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <span className="text-primary font-display font-bold uppercase tracking-wider">Lives Diárias</span>
            </div>
            <p className="text-2xl font-display font-bold text-foreground">
              09:30 - 18:00
            </p>
            <p className="text-muted-foreground">Domingo a Domingo</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://www.twitch.tv/tck10/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#9146FF] hover:bg-[#7c3aed] text-foreground font-display font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ boxShadow: "0 0 30px rgba(145, 70, 255, 0.4)" }}
            >
              <Twitch className="w-6 h-6" />
              Assistir na Twitch
            </a>
            <a 
              href="https://www.youtube.com/TcK10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] hover:bg-[#cc0000] text-foreground font-display font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)" }}
            >
              <Youtube className="w-6 h-6" />
              YouTube
            </a>
            <a 
              href="https://streamlabs.com/tck10/tip" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 glass-card text-primary hover:text-accent font-display font-bold rounded-lg transition-all duration-300 hover:scale-105 glow-effect"
            >
              <ExternalLink className="w-5 h-5" />
              Apoiar
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-muted-foreground tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
