import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { useTheme } from "@/components/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
    { name: "Web Design", href: "/services/web-design", desc: "Lead-gen websites in 7 days" },
    { name: "Custom Email", href: "/services/custom-email", desc: "Branded business inboxes" },
    { name: "SaaS & MVP", href: "/services/saas-mvp", desc: "Launch your platform fast" },
    { name: "Custom Software", href: "/services/custom-software", desc: "Built around your workflows" },
    { name: "All services", href: "/services", desc: "Full service menu" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const logoSrc = theme === "dark" ? "/logo-dark.png" : "/logo-light.png";

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "hsl(var(--background) / 0.85)" : "hsl(var(--background))",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: "1px solid hsl(var(--rule))",
      }}
    >
      {/* Top utility strip */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-2 text-[10px] tracking-[0.18em] uppercase font-semibold tabular border-b" style={{ borderColor: "hsl(var(--border))" }}>
        <span>Architeq Web Agency · Est. 2022 · Gauteng, ZA · Nationwide</span>
        <span className="flex items-center gap-5">
          <span>Live in 7 days</span>
          <span>·</span>
          <a href="tel:0694900189" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
            <Phone className="h-3 w-3" /> 069 490 0189
          </a>
        </span>
      </div>

      <nav className="px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logoSrc} alt="Architeq Web Agency logo" className="h-9 w-auto object-contain" style={{ maxWidth: 180 }} />
        </Link>

        {/* Desktop nav — flat plate links with numerals */}
        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const isServices = item.name === "Services";
            return (
              <div key={item.name} className={isServices ? "relative group" : undefined}>
                <Link
                  to={item.href}
                  className={`group/link relative px-4 py-2 text-[13px] font-medium transition-colors inline-flex items-center ${
                    isActive(item.href) || (isServices && location.pathname.startsWith("/services")) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {(isActive(item.href) || (isServices && location.pathname.startsWith("/services"))) && (
                    <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-primary" />
                  )}
                </Link>

                {isServices && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div
                      className="w-72 border bg-background shadow-xl overflow-hidden"
                      style={{ borderColor: "hsl(var(--border))" }}
                    >
                      {serviceItems.map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          className="block px-4 py-3 border-b last:border-b-0 hover:bg-muted transition-colors"
                          style={{ borderColor: "hsl(var(--border))" }}
                        >
                          <div className="text-sm font-medium">{s.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link to="/contact" className="btn-ember text-sm py-2.5 px-5">
            Start a project
            <span className="tabular text-[10px] opacity-70">→</span>
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <a href="tel:0694900189" className="btn-ember text-[13px] py-2 px-3.5">
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 border"
            style={{ borderColor: "hsl(var(--rule))" }}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "hsl(var(--border))" }}
          >
            <div className="px-6 py-5 flex flex-col">
              {nav.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline justify-between py-3 border-b"
                    style={{ borderColor: "hsl(var(--border))" }}
                  >
                    <span className="display text-2xl font-medium">{item.name}</span>
                  </Link>
                  {item.name === "Services" && (
                    <div className="pl-4 py-2 flex flex-col border-b" style={{ borderColor: "hsl(var(--border))" }}>
                      {serviceItems.filter(s => s.href !== "/services").map((s) => (
                        <Link
                          key={s.href}
                          to={s.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          → {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between pt-5">
                <ModeToggle />
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="btn-ember">
                  Start a project →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
