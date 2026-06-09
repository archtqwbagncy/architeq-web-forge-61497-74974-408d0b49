import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t" style={{ borderColor: "hsl(var(--rule))" }}>
      {/* Closing CTA */}
      <section className="px-6 lg:px-10 pt-8 lg:pt-12 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <span className="plate-label">Get a fixed 7-day quote</span>
            <span className="tabular text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Reply within 24 hrs · Mon–Sat
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
            <h2 className="display text-foreground" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)", lineHeight: 0.9 }}>
              More calls.<br />
              Booked solid.<br />
              <span className="text-primary">Start this week.</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-muted-foreground text-lg max-w-md">
                Tell us about your trade. We'll send back a fixed quote and a 7-day delivery plan — no sales call required.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/contact" className="btn-ember">
                  Request a quote
                  <span className="tabular">→</span>
                </Link>
                <a href="tel:0694900189" className="btn-ghost-line">
                  <Phone className="h-4 w-4" /> 069 490 0189
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Lower grid */}
      <div className="px-6 lg:px-10 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-10 gap-x-6">
          <div className="col-span-2 md:col-span-5">
            <Link to="/" className="display text-3xl tracking-tight font-semibold">
              Architeq<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Websites built for South African trades and home-services operators.
              Quote-ready in 7 days. Built to bring in calls.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/architeqwebagency/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border hover:bg-foreground hover:text-background transition-colors"
                style={{ borderColor: "hsl(var(--rule))" }}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/27694900189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tabular tracking-[0.16em] uppercase font-semibold hover:text-primary transition-colors"
              >
                WhatsApp →
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="plate-label mb-4">Index</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="plate-label mb-4">Contact</p>
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                <a href="tel:0694900189" className="tabular hover:text-primary transition-colors">069 490 0189</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                <a href="mailto:admin@architeq.co.za" className="hover:text-primary transition-colors break-all">admin@architeq.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">Gauteng, South Africa — serving SA nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-3" style={{ borderColor: "hsl(var(--border))" }}>
          <p className="text-xs text-muted-foreground tabular tracking-wider">
            © {year} Architeq Web Agency — All rights reserved
          </p>
          <p className="text-xs text-muted-foreground tabular tracking-wider">
            Built in Gauteng · Serving South Africa nationwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
