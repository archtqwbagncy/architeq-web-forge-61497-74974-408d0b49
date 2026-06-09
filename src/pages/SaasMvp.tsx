import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Rocket, Smartphone, ShieldCheck, Layers, Sparkles } from "lucide-react";
import ServiceContactForm from "@/components/ServiceContactForm";
import BuiltByArchiteq from "@/components/BuiltByArchiteq";

const packages = [
  {
    name: "Starter MVP",
    price: "R24 999+",
    timeline: "2–4 Weeks",
    cta: "Start My MVP",
    suitable: ["Booking systems", "Customer portals", "Membership websites", "Business dashboards", "Online platforms"],
  },
  {
    name: "Growth Platform",
    price: "R59 999+",
    timeline: "4–8 Weeks",
    popular: true,
    cta: "Build My Platform",
    suitable: ["Larger customer platforms", "Subscription businesses", "Multi-user systems", "Advanced online platforms", "Businesses preparing to scale"],
  },
];

const process = [
  { code: "01", title: "Discovery", body: "Map the core problem, users and must-have features. No scope bloat." },
  { code: "02", title: "Design", body: "Clickable UI and flows so you see the product before we build it." },
  { code: "03", title: "Development", body: "Modern stack, clean code, shipped in milestones — not in a black box." },
  { code: "04", title: "Testing", body: "Real-user testing across devices. Bugs fixed before you see them." },
  { code: "05", title: "Launch", body: "Deployment, handover and a working product in your hands." },
];

const benefits = [
  { icon: <Rocket className="h-5 w-5" />, title: "Faster launch times", body: "Ship a real working product in weeks, not quarters." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Mobile-friendly platforms", body: "Every screen built to work flawlessly on phone, tablet and desktop." },
  { icon: <Layers className="h-5 w-5" />, title: "Scalable foundations", body: "Architecture designed to grow with your customer base." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Secure user accounts", body: "Authentication, role-based access and best-practice security baked in." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Modern user experience", body: "Clean, fast interfaces your customers will actually want to use." },
];

const faqs = [
  { q: "What exactly is an MVP?", a: "A Minimum Viable Product — the smallest version of your idea that delivers real value to real users so you can validate quickly." },
  { q: "Do I own the code?", a: "Yes. Full code ownership and repository access transferred on completion." },
  { q: "Can it scale once we grow?", a: "Yes. We build on modern frameworks designed to scale from your first user to thousands." },
  { q: "Do you handle hosting?", a: "We deploy your platform on production-ready infrastructure and walk you through everything." },
  { q: "What if I need changes after launch?", a: "Ongoing development and maintenance packages are available, or we can train your team." },
  { q: "How are payments handled?", a: "50% deposit to start, balance on launch. Clear milestones throughout." },
];

const SaasMvp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative px-6 lg:px-10 pt-8 lg:pt-12 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-between mb-10">
            <span className="plate-label">SaaS & MVP Development</span>
            <span className="tabular text-[10px] tracking-[0.2em] uppercase text-muted-foreground hidden sm:inline">
              From R24 999 · 2–4 weeks
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="display text-foreground"
              style={{ fontSize: "clamp(2.75rem, 9vw, 8rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
            >
              Launch your
              <br />
              software idea
              <br />
              <span className="text-primary">faster.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-5 lg:pb-4"
            >
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Turn your business idea into a working online platform in weeks. Booking systems, customer portals, dashboards and subscription products — built to launch and scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-ember">Build my platform <span className="tabular">→</span></Link>
                <a href="#packages" className="btn-ghost-line">See packages</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* PACKAGES */}
      <section id="packages" className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="plate-label mb-4 block">Pricing</span>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
                Two ways to launch.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Fixed scope, fixed price. 50% deposit, balance on launch. ZAR.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative p-8 lg:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${p.popular ? "border-primary ring-1 ring-primary/20 bg-primary/[0.03]" : "border-border/40 hover:border-primary/30"}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full">Most picked</span>
                )}
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="display text-2xl lg:text-3xl font-medium">{p.name}</h3>
                  <span className="tabular text-[11px] tracking-[0.16em] uppercase text-muted-foreground font-semibold">{p.timeline}</span>
                </div>
                <div className="drafting-numeral text-foreground mb-6" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>{p.price}</div>
                <p className="text-xs tabular tracking-wider uppercase text-muted-foreground font-semibold mb-3">Suitable for</p>
                <ul className="space-y-2 mb-8">
                  {p.suitable.map((s, j) => (
                    <li key={j} className="flex items-start gap-2 text-[15px]">
                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-ember w-full justify-center">{p.cta} <span className="tabular">→</span></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* PROCESS */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="plate-label mb-4 block">Process</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Five steps. <span className="text-muted-foreground">Built for speed.</span>
            </h2>
          </div>
          <div className="border-t border-b" style={{ borderColor: "hsl(var(--rule))" }}>
            {process.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-6 lg:gap-12 py-6 lg:py-8 border-b last:border-b-0"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <span className="drafting-numeral text-muted-foreground group-hover:text-primary transition-colors" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>{s.code}</span>
                <div>
                  <h3 className="display text-xl lg:text-2xl font-medium mb-1">{s.title}</h3>
                  <p className="text-muted-foreground max-w-2xl">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* BENEFITS */}
      <section className="px-6 lg:px-10 py-14 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="plate-label mb-4 block">Benefits</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Built to launch. <span className="text-primary">Built to scale.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-6 rounded-3xl border border-border/40 bg-background hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-4">{b.icon}</div>
                <h3 className="font-semibold mb-1.5">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* FAQ */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="plate-label mb-4 block">FAQ</span>
          <h2 className="display mb-12" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Common questions.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-border/40">
                <h3 className="font-semibold text-[15px] mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* CTA + FORM */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="plate-label mb-4 block">Get started</span>
            <h2 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Got an idea?
              <br /><span className="text-primary">Let's ship it.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Tell us about the platform you want to launch. We'll come back with a scoped plan and timeline.
            </p>
          </div>
          <ServiceContactForm service="SaaS & MVP Development" heading="Start your MVP" subheading="Share your idea — we reply within 24 hours." />
        </div>
      </section>

      <BuiltByArchiteq />
    </div>
  );
};

export default SaasMvp;
