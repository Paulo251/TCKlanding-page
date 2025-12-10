import designerImage from "@/assets/designer-tck.png";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30" style={{
      background: "linear-gradient(180deg, hsl(214 84% 6%) 0%, hsl(214 84% 4%) 100%)",
    }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-display font-black text-gradient">TcK</h3>
            <p className="text-muted-foreground mt-2">Streamer & Content Creator</p>
            <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
              <span className="text-sm text-muted-foreground">Patrocinado por</span>
              <span className="text-primary font-display font-bold">Cloud9</span>
            </div>
          </div>

          {/* Links */}
          <div className="text-center">
            <nav className="flex flex-wrap gap-6 justify-center">
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#social" className="text-muted-foreground hover:text-primary transition-colors">Social</a>
              <a href="#setup" className="text-muted-foreground hover:text-primary transition-colors">Setup</a>
              <a href="#parceiros" className="text-muted-foreground hover:text-primary transition-colors">Parceiros</a>
              <a href="#apoiar" className="text-muted-foreground hover:text-primary transition-colors">Apoiar</a>
            </nav>
          </div>

          {/* Designer */}
          <div className="text-center md:text-right">
            <a 
              href="https://www.instagram.com/minke.digital/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 glass-card rounded-xl p-4 transition-all duration-300 hover:scale-105 group"
            >
              <img 
                src={designerImage} 
                alt="Minke Digital" 
                className="w-16 h-auto"
              />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Arte & Design por</p>
                <p className="font-display font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  @minke.digital
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-8 text-center">
          <p className="text-xs text-muted-foreground/60">
            um presente de Paulo "spark" Ricardo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
