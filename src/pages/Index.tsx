import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Star, Check, Mail, Rocket, Cpu, ArrowUpRight, Gauge, Milestone, MessagesSquare, Zap, Target } from "lucide-react";

const Index = () => {
  const services = [
    { title: "Websites that bring in leads", line: "Built for phones first, designed to turn searches into booked jobs." },
    { title: "Google Business setup", line: "Get found on Google Maps. Reviews, photos and service areas sorted for you." },
    { title: "Quote and booking forms", line: "Capture the right details upfront so you can quote without phone tag." },
    { title: "Website care and hosting", line: "We host your site, keep it fast, secure and up to date — all in one monthly plan." },
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
    { name: "Essential",    price: "1 999+",  days: "2",  pages: "1 page",     lines: ["One-page site", "Mobile-first", "Click-to-call", "Google Business"] },
    { name: "Starter",      price: "4 999+",  days: "4",  pages: "Up to 5",    lines: ["5 pages", "Service area map", "Quote form", "Reviews block"] },
    { name: "Professional", price: "9 999+",  days: "7",  pages: "Up to 10",   lines: ["10 pages + blog", "Local SEO setup", "Lead routing", "Booking-ready"], popular: true },
    { name: "Enterprise",   price: "14 999+", days: "10", pages: "15+ pages",  lines: ["Unlimited pages", "Analytics + tracking", "Priority support", "Custom features"] },
  ];

  const newServices = [
    { icon: <Mail className="h-6 w-6" />, title: "Custom Email Services", body: "Branded business email setup with Gmail integration. Zero monthly cost, live in under 24 hours.", price: "From R499+", timeline: "< 24 hours", cta: "Get Professional Email", href: "/services/custom-email" },
    { icon: <Rocket className="h-6 w-6" />, title: "SaaS & MVP Development", body: "Turn your business idea into a working online platform — booking systems, portals, dashboards, subscription products.", price: "From R24 999+", timeline: "2–4 weeks", cta: "Build My Platform", href: "/services/saas-mvp" },
    { icon: <Cpu className="h-6 w-6" />, title: "Custom Software Development", body: "Custom software built around your business goals, processes and workflows. Internal tools, automation, full platforms.", price: "From R34 999+", timeline: "3–6 weeks", cta: "Get A Software Quote", href: "/services/custom-software" },
  ];

  const usp = [
    { icon: <Gauge className="h-5 w-5" />, title: "Faster turnaround times", body: "Days, not months. We start work the day you sign off." },
    { icon: <Milestone className="h-5 w-5" />, title: "Clear project milestones", body: "You always know what's shipping next and when." },
    { icon: <MessagesSquare className="h-5 w-5" />, title: "Direct communication", body: "Talk to the people building your project — not account managers." },
    { icon: <Zap className="h-5 w-5" />, title: "Less back-and-forth", body: "Tight briefs, decisive feedback rounds, no meeting bloat." },
    { icon: <Target className="h-5 w-5" />, title: "Results-focused execution", body: "Every decision serves the outcome you're trying to drive." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ============ HERO ============ */}
      <section className="relative px-6 lg:px-10 pt-8 lg:pt-12 pb-14 lg:pb-20 overflow-hidden">
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
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 lg:mb-20">
            <div>
              <span className="plate-label mb-4 block">What we build</span>
              <h2 className="display max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Simple tools.
                <br />
                <span className="text-muted-foreground">Built to bring in work.</span>
              </h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex btn-ghost-line text-sm">
              See full menu →
            </Link>
          </div>

          <div>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-6 lg:gap-12 py-6 lg:py-8 border-t last:border-b transition-colors"
                style={{ borderColor: "hsl(var(--rule))" }}
              >
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

      {/* ============ NEW SERVICES ============ */}
      <section className="px-6 lg:px-10 py-14 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span className="plate-label mb-4 block">More from Architeq</span>
              <h2 className="display max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
                Beyond websites.
                <br />
                <span className="text-muted-foreground">Email, platforms, software.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Three more ways we help South African businesses move faster — branded inboxes, MVP launches, and custom software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {newServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-7 lg:p-8 rounded-3xl border border-border/40 bg-background hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {s.icon}
                  </div>
                </div>
                <h3 className="display text-2xl font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{s.body}</p>
                <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                  <div>
                    <p className="text-[10px] tabular tracking-[0.16em] uppercase text-muted-foreground font-semibold mb-1">From</p>
                    <p className="text-sm font-semibold text-foreground">{s.price}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tabular tracking-[0.16em] uppercase text-muted-foreground font-semibold mb-1">Timeline</p>
                    <p className="text-sm font-semibold text-foreground">{s.timeline}</p>
                  </div>
                </div>
                <Link to={s.href} className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors">
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* ============ USP — IDEA TO LAUNCH ============ */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start mb-14 lg:mb-20">
            <div>
              <span className="plate-label mb-4 block">How we work</span>
              <h2 className="display" style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)", lineHeight: 0.92 }}>
                Move from idea
                <br />
                to launch
                <br />
                <span className="text-primary">faster.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed lg:pt-8">
              Many agencies spend weeks in meetings before any real work begins. We focus on streamlined communication, rapid execution and clear milestones so your project starts moving forward immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {usp.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-6 rounded-2xl border border-border/40 hover:border-primary/40 hover:bg-muted/30 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-4">
                  {u.icon}
                </div>
                <h3 className="font-semibold text-[15px] mb-1.5">{u.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />


      {/* ============ NUMBERS / PROOF ============ */}
      <section className="px-6 lg:px-10 py-12 lg:py-16">
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
      <section className="px-6 lg:px-10 py-14 lg:py-20">
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
      <section className="px-6 lg:px-10 py-14 lg:py-20 bg-foreground text-background">
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
      <section className="px-6 lg:px-10 py-14 lg:py-20">
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
              All packages billed in ZAR. 50% deposit, balance on launch. One revision round included. Hosting is included with any monthly website care plan.
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
