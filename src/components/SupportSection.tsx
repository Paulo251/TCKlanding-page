import { useEffect, useRef, useState } from "react";
import { Heart, ExternalLink, Gift } from "lucide-react";

const SupportSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="apoiar"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(214 84% 6%) 0%, hsl(214 84% 10%) 100%)",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(199 100% 50% / 0.3) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8 animate-pulse-glow">
            <Heart className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-black text-gradient mb-6">
            Apoie o Canal
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10">
            Sua contribuição ajuda a manter as lives rolando todos os dias! Cada doação é uma motivação a mais para entregar o melhor conteúdo.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://streamlabs.com/tck10/tip"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: "200ms",
                boxShadow: "0 0 40px hsl(var(--c9-blue) / 0.4), 0 0 80px hsl(var(--c9-cyan) / 0.2)",
              }}
            >
              <Gift className="w-6 h-6" />
              Fazer uma Doação
              <ExternalLink className="w-5 h-5" />
            </a>

            <a 
              href="https://linktr.ee/tck10"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-10 py-5 glass-card text-foreground font-display font-bold text-xl rounded-xl transition-all duration-300 hover:scale-105 neon-border ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Linktree
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
