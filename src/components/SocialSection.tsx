import { useEffect, useRef, useState } from "react";
import socialImage from "@/assets/social-tck.png";
import { Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const SocialSection = () => {
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

  const socials = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/tck10_",
      color: "#1DA1F2",
      handle: "@tck10_",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/tck10_/",
      color: "#E4405F",
      handle: "@tck10_",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/TcK10",
      color: "#FF0000",
      handle: "TcK10",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.gg/tck10",
      color: "#5865F2",
      handle: "tck10",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      url: "https://www.tiktok.com/@tck10_",
      color: "#000000",
      handle: "@tck10_",
    },
    {
      name: "Twitch",
      icon: () => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
        </svg>
      ),
      url: "https://www.twitch.tv/tck10/",
      color: "#9146FF",
      handle: "tck10",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="social"
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
            Redes Sociais
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Me siga em todas as plataformas!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Social links grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-6 text-center group transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center text-foreground transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: social.color,
                    boxShadow: `0 0 30px ${social.color}40`,
                  }}
                >
                  <social.icon />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </a>
            ))}
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}>
            <img 
              src={socialImage} 
              alt="Social TcK" 
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
