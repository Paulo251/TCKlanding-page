import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Social", href: "#social" },
    { label: "Setup", href: "#setup" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Apoiar", href: "#apoiar" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "py-3 glass-card" : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-black text-gradient">
            TcK
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.twitch.tv/tck10/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#9146FF] hover:bg-[#7c3aed] text-foreground font-display font-bold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Twitch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.twitch.tv/tck10/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#9146FF] hover:bg-[#7c3aed] text-foreground font-display font-bold rounded-lg transition-all duration-300 text-center"
              >
                Twitch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
