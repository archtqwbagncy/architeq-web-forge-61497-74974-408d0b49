import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Check } from "lucide-react";

const Index = () => {
  const services = [
    { code: "01", title: "Lead-gen websites", line: "Phone-first layouts engineered to turn searches into booked jobs." },
    { code: "02", title: "Google Business setup", line: "Rank in the local 3-pack. Reviews, photos, service areas — handled." },
    { code: "03", title: "Quote & booking forms", line: "Capture the right details upfront so you can quote without phone tag." },
    { code: "04", title: "Maintenance & speed", line: "Always on, always fast. We watch the site so you can stay on the job." },
  ];

  const industries = [
    "Roofing", "HVAC", "Electrical", "Plumbing", "Construction", "Landscaping",
    "Painting", "Renovations", "Solar", "Cleaning", "Accounting", "Pest Control",
    "Security", "Auto Repair", "Movers", "Locksmiths",
  ];

  const projects = [
    { name: "Lumavu Trading", image: "/portfolio/lumavu-trading.png", category: "Construction", plate: "PR-002" },
    { name: "H & N House of Beauty", image: "/portfolio/hn-house-of-beauty.png", category: "Local Services", plate: "PR-001" },
    { name: "Netshifhefhe Attorneys", image: "/portfolio/netshifhefhe-attorneys.png", category: "Legal", plate: "PR-003" },
    { name: "Home of Accounting", image: "/portfolio/hac-accounting.png", category: "Finance", plate: "PR-004" },
  ];

  const testimonials = [
    { quote: "Phone hasn't stopped ringing since the new site went live. Booked out three weeks ahead.", author: "H & N House of Beauty" },
    { quote: "They built our first site three years ago and our new one now. Seamless, always a call away.", author: "Kebogile Mokgoebo" },
    { quote: "Best web agency I can recommend. Service was tip-top and the outcome speaks for itself.", author: "Philly Jaroam" },
  ];

  const packages = [
    { name: "Essential",    price: "2 000+",  days: "2",  pages: "1 page",     lines: ["One-page site", "Mobile-first", "Click-to-call", "Google Business"] },
    { name: "Starter",      price: "5 000+",  days: "4",  pages: "Up to 5",    lines: ["5 pages", "Service area map", "Quote form", "Reviews block"] },
    { name: "Professional", price: "10 000+", days: "7",  pages: "Up to 10",   lines: ["10 pages + blog", "Local SEO setup", "Lead routing", "Booking-ready"], popular: true },
    { name: "Enterprise",   price: "15 000+", days: "10", pages: "15+ pages",  lines: ["Unlimited pages", "Analytics + tracking", "Priority support", "Custom features"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ============ HERO ============ */}
      <section className="relative px-6 lg:px-10 pt-10 lg:pt-16 pb-20 lg:pb-28 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-10 lg:mb-14">
            <span className="plate-label">Live in 7 days — fixed price</span>
            <span className="tabular text-[10px] tracking-[0.2em] uppercase text-muted-foreground hidden sm:inline">
              Gauteng-based · Serving SA nationwide
            </span>
          </div>

          {/* Asymmetric grid */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-foreground"
              style={{ fontSize: "clamp(3rem, 11vw, 11rem)", lineHeight: 0.88, letterSpacing: "-0.055em" }}
            >
              Your site,
              <br />
              live in
              <br />
              <span className="text-primary">7 days.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:max-w-[280px] flex flex-col gap-6 lg:pb-4"
            >
              <div>
                <div className="drafting-numeral text-foreground" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
                  07<span className="text-primary">.</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide mt-1">
                  Days from brief to live. Average build: 5. Fixed price. No drag-out timelines.
                </p>
              </div>
              <div className="rule-thin" />
              <p className="text-[15px] leading-relaxed">
                Lead-generating websites for South African home-services and local businesses — roofers, HVAC, accounting, pest control and beyond. Built to bring in calls, not awards.
              </p>
            </motion.div>
          </div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <Link to="/contact" className="btn-ember">
              Get my 7-day quote
              <span className="tabular">→</span>
            </Link>
            <a href="tel:0694900189" className="btn-ghost-line">
              <Phone className="h-4 w-4" /> 069 490 0189
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground sm:ml-auto">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="tabular tracking-wide">5.0 · Google reviewed</span>
            </div>
          </motion.div>

          {/* Tick rule under CTAs */}
          <div className="mt-12 lg:mt-16 tick-row" aria-hidden>
            {Array.from({ length: 40 }).map((_, i) => <i key={i} />)}
          </div>

        </div>
      </section>

      <div className="rule" />

      {/* ============ INDUSTRIES MARQUEE ============ */}
      <section className="py-6 lg:py-8 overflow-hidden bg-foreground text-background">
        <div className="flex marquee-track whitespace-nowrap" style={{ width: "max-content" }}>
          {[...industries, ...industries, ...industries].map((t, i) => (
            <span key={i} className="display flex items-center gap-10 px-6 text-3xl lg:text-5xl font-medium tracking-tight">
              {t}
              <span className="text-primary text-xl">●</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="px-6 lg:px-10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 lg:mb-20">
            <div>
              <span className="plate-label mb-4 block">What we build</span>
              <h2 className="display max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Four sharp tools.
                <br />
                <span className="text-muted-foreground">No bloat, no filler.</span>
              </h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex btn-ghost-line text-sm">
              See full menu →
            </Link>
          </div>

          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 lg:gap-12 py-7 lg:py-10 border-t last:border-b transition-colors"
                style={{ borderColor: "hsl(var(--rule))" }}
              >
                <span className="drafting-numeral text-muted-foreground group-hover:text-primary transition-colors" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}>
                  {s.code}
                </span>
                <div>
                  <h3 className="display text-2xl lg:text-4xl font-medium mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">{s.line}</p>
                </div>
                <span className="hidden lg:inline-flex tabular text-xs tracking-[0.18em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                  Detail →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ============ NUMBERS / PROOF ============ */}
      <section className="px-6 lg:px-10 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {[
            { n: "50+", l: "Projects shipped" },
            { n: "07", l: "Average delivery (days)" },
            { n: "5.0", l: "Google rating" },
            { n: "100%", l: "Built mobile-first" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="drafting-numeral text-foreground" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
                {s.n}
              </div>
              <p className="mt-2 text-xs tracking-[0.16em] uppercase font-semibold text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* ============ PORTFOLIO ============ */}
      <section className="px-6 lg:px-10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="plate-label mb-4 block">Recent work</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Built. Live. <span className="text-primary">Earning.</span>
              </h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-flex btn-ghost-line text-sm">
              Full portfolio →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-20">
            {projects.map((p, i) => (
              <motion.div
                key={p.plate}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={i % 2 === 1 ? "md:mt-16" : ""}
              >
                <Link to="/portfolio" className="group block">
                  <div className="flex items-center justify-between mb-3 text-xs tabular tracking-[0.16em] uppercase">
                    <span className="font-semibold">{p.plate}</span>
                    <span className="text-muted-foreground">{p.category}</span>
                  </div>
                  <div className="overflow-hidden border" style={{ borderColor: "hsl(var(--border))" }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ aspectRatio: "16/10" }}
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="display text-xl lg:text-2xl font-medium">{p.name}</h3>
                    <span className="tabular text-xs tracking-[0.16em] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                      View →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ============ TESTIMONIALS ============ */}
      <section className="px-6 lg:px-10 py-20 lg:py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <span className="plate-label" style={{ color: "hsl(var(--background))" }}>
              What clients say
            </span>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="tabular tracking-wide opacity-70">5.0 · Google</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="drafting-numeral text-primary mb-4" style={{ fontSize: "3rem" }}>
                  "
                </div>
                <blockquote className="display text-xl lg:text-2xl font-medium leading-[1.2] mb-6">
                  {t.quote}
                </blockquote>
                <figcaption className="pt-4 border-t flex justify-between items-baseline" style={{ borderColor: "hsl(var(--background) / 0.2)" }}>
                  <span className="text-sm font-semibold">{t.author}</span>
                  <span className="tabular text-[10px] tracking-[0.2em] uppercase opacity-50">Verified</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section className="px-6 lg:px-10 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span className="plate-label mb-4 block">Pricing</span>
              <h2 className="display max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Fixed price.
                <br />
                <span className="text-muted-foreground">No surprises after sign-off.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              All packages billed in ZAR. 50% deposit, balance on launch. Hosting and one revision round included.
            </p>
          </div>

          <div className="border-t border-b" style={{ borderColor: "hsl(var(--rule))" }}>
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={`group grid grid-cols-12 items-start gap-4 py-7 lg:py-10 border-b last:border-b-0 transition-colors hover:bg-muted/40 ${p.popular ? "bg-primary/[0.04]" : ""}`}
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div className="col-span-12 lg:col-span-3 flex items-baseline gap-3 flex-wrap">
                  <span className="tabular text-xs text-muted-foreground tracking-[0.16em] uppercase font-semibold">0{i + 1}</span>
                  <h3 className="display text-2xl lg:text-3xl font-medium">{p.name}</h3>
                  {p.popular && (
                    <span className="key text-primary border-primary">Most picked</span>
                  )}
                  <span className="tabular text-[11px] tracking-[0.14em] uppercase text-muted-foreground font-semibold w-full">{p.pages}</span>
                </div>

                <div className="col-span-6 lg:col-span-3">
                  <div className="drafting-numeral text-foreground" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                    R{p.price}
                  </div>
                  <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground mt-1 font-semibold">Excl. VAT</p>
                </div>

                <div className="col-span-6 lg:col-span-2">
                  <div className="drafting-numeral text-foreground" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                    {p.days}<span className="text-primary text-base align-top ml-1">d</span>
                  </div>
                  <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground mt-1 font-semibold">Delivery</p>
                </div>

                <ul className="col-span-12 lg:col-span-3 space-y-1.5 text-sm">
                  {p.lines.map((l) => (
                    <li key={l} className="flex items-baseline gap-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 translate-y-[2px]" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>

                <div className="col-span-12 lg:col-span-1 lg:text-right">
                  <Link
                    to="/contact"
                    className="inline-flex items-baseline gap-1.5 text-sm font-medium hover:text-primary transition-colors tabular tracking-wide"
                  >
                    Pick<span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground max-w-2xl">
            Websites scale from a single landing page to 15+ pages. Need an exact figure? Send us the brief — we reply within 24 hours with a fixed quote.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
