import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-tck.png";
import { User, Dumbbell, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: User, label: "Altura", value: "1,78m" },
    { icon: Dumbbell, label: "Peso", value: "102kg" },
    { icon: Calendar, label: "Idade", value: "23 anos" },
    { icon: MapPin, label: "Cidade", value: "São Paulo" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="sobre"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(214 84% 6%) 0%, hsl(214 84% 10%) 50%, hsl(214 84% 6%) 100%)",
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(199 100% 50% / 0.3) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Sobre TcK" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gradient mb-6">
              Sobre Mim
            </h2>
            
            <div className="space-y-6 mb-10">
              <div className="glass-card rounded-xl p-6 neon-border">
                <h3 className="text-primary font-display font-bold mb-2">⚠️ Por que TcK?</h3>
                <p className="text-foreground text-lg">
                  <span className="text-secondary">The Crying Kid</span>, 
                  <span className="text-secondary"> The Cringe King</span>, 
                  <span className="text-secondary"> The Cu King</span>
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 neon-border">
                <h3 className="text-primary font-display font-bold mb-2">⭐ Qual seu agente favorito?</h3>
                <p className="text-foreground text-lg">
                  Não importa, sou muito bom com todos.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6 neon-border">
                <h3 className="text-primary font-display font-bold mb-2">⚠️ Quanto de braço?</h3>
                <p className="text-foreground text-lg font-bold text-accent">
                  Pra lá de meio metro 💪
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass-card rounded-xl p-4 text-center transition-all duration-500 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
