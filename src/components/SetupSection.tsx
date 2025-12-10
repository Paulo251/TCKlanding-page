import { useEffect, useRef, useState } from "react";
import setupImage from "@/assets/setup-tck.png";
import { Cpu, Monitor, Mouse, Headphones } from "lucide-react";

const SetupSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"pc" | "perifericos">("pc");
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

  const pcSpecs = [
    { label: "Processador", value: "Intel I9-13900KF" },
    { label: "Placa de Vídeo", value: "GeForce RTX 4090" },
    { label: "Placa Mãe", value: "Z790" },
    { label: "Fonte", value: "CORSAIR 1000W" },
    { label: "RAM", value: "x2 7200Mhz" },
    { label: "SSD", value: "2TB SN850X" },
  ];

  const perifericos = [
    { icon: Mouse, label: "Mouse", value: "Vaxee AW" },
    { icon: () => <span className="text-lg">⌨️</span>, label: "Teclado", value: "Wooting 60HE" },
    { icon: Headphones, label: "Fone", value: "Truthear Crinacle Zero" },
    { icon: () => <span className="text-lg">🖱️</span>, label: "Mousepad", value: "Artisan Zero XSOFT" },
    { icon: () => <span className="text-lg">🎙️</span>, label: "Microfone", value: "Shure SM7B + Goxlr mini" },
    { icon: () => <span className="text-lg">📷</span>, label: "Câmera", value: "Sony a6600" },
  ];

  const monitores = [
    { label: "Monitor 1", value: "Alienware AW2527 360hz" },
    { label: "Monitor 2", value: "Asus 144hz" },
    { label: "Monitor 3", value: "Superframe 240hz" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="setup"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(214 84% 6%) 0%, hsl(214 84% 10%) 50%, hsl(214 84% 6%) 100%)",
      }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
            <img 
              src={setupImage} 
              alt="Setup TcK" 
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">Montado em SET/2023</p>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gradient mb-8">
              Setup
            </h2>

            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab("pc")}
                className={`px-6 py-3 rounded-lg font-display font-bold transition-all duration-300 ${
                  activeTab === "pc" 
                    ? "bg-primary text-primary-foreground" 
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Cpu className="w-5 h-5 inline-block mr-2" />
                PC
              </button>
              <button
                onClick={() => setActiveTab("perifericos")}
                className={`px-6 py-3 rounded-lg font-display font-bold transition-all duration-300 ${
                  activeTab === "perifericos" 
                    ? "bg-primary text-primary-foreground" 
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                <Mouse className="w-5 h-5 inline-block mr-2" />
                Periféricos
              </button>
            </div>

            {/* PC Specs */}
            {activeTab === "pc" && (
              <div className="space-y-3 animate-fade-in">
                {pcSpecs.map((spec, index) => (
                  <div 
                    key={spec.label}
                    className="glass-card rounded-lg p-4 flex justify-between items-center hover:scale-[1.02] transition-transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-muted-foreground font-medium">{spec.label}</span>
                    <span className="text-foreground font-display font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Periféricos */}
            {activeTab === "perifericos" && (
              <div className="space-y-3 animate-fade-in">
                {perifericos.map((item, index) => (
                  <div 
                    key={item.label}
                    className="glass-card rounded-lg p-4 flex justify-between items-center hover:scale-[1.02] transition-transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                    </div>
                    <span className="text-foreground font-display font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Monitors section */}
            <div className="mt-8">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Monitores
              </h3>
              <div className="grid gap-3">
                {monitores.map((monitor) => (
                  <div 
                    key={monitor.label}
                    className="glass-card rounded-lg p-4 flex justify-between items-center hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-muted-foreground font-medium">{monitor.label}</span>
                    <span className="text-foreground font-display font-bold">{monitor.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
