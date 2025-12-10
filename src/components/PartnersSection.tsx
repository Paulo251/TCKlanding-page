import { useEffect, useRef, useState } from "react";
import growthImage from "@/assets/growth-tck.png";
import { ExternalLink } from "lucide-react";

const PartnersSection = () => {
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

  const mainPartners = [
    {
      name: "Tempo Meals",
      description: "Refeições preparadas",
      url: "https://eat.tempomeals.com/meal-prep-delivery?utm_campaign=cloud9&utm_source=cloud9&utm_medium=affinity&voucher=CLOUD960",
      coupon: "CLOUD960",
    },
    {
      name: "Samsung Odyssey",
      description: "Monitores Gaming",
      url: "https://www.samsung.com/br/campaign/odyssey-line-up/",
    },
    {
      name: "Growth Supplements",
      description: "Suplementos",
      url: "https://www.gsuplementos.com.br/",
      coupon: "TCK",
      hasImage: true,
    },
  ];

  const cloud9Partners = [
    {
      name: "Zenni Optical",
      description: "Gaming Glasses",
      url: "https://www.zennioptical.com/b/gaming-glasses/cloud9",
    },
    {
      name: "Secretlab",
      description: "Cadeiras Gaming",
      url: "https://secretlab.co/pages/cloud9",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="parceiros"
      className="relative py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(214 84% 6%) 0%, hsl(199 60% 8%) 50%, hsl(214 84% 6%) 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-display font-black text-gradient mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Parceiros
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Marcas incríveis que apoiam o canal
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Growth Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <a 
              href="https://www.gsuplementos.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <img 
                src={growthImage} 
                alt="Growth Supplements" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Main Partners */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-display font-bold text-primary mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              Parceiros Principais
            </h3>
            {mainPartners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-6 flex items-center justify-between group transition-all duration-500 hover:scale-[1.02] block ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div>
                  <h4 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">{partner.description}</p>
                  {partner.coupon && (
                    <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-bold">
                      Cupom: {partner.coupon}
                    </span>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Cloud9 Partners */}
        <div className={`transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            <span className="text-secondary">Parceiros</span>{" "}
            <span className="text-primary">Cloud9</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {cloud9Partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 text-center group transition-all duration-300 hover:scale-105 neon-border"
              >
                <h4 className="font-display font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-1">
                  {partner.name}
                </h4>
                <p className="text-muted-foreground text-sm">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
