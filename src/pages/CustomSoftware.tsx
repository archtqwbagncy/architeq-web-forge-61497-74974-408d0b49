import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Cpu, TrendingUp, Workflow, Building2, ShieldCheck } from "lucide-react";
import ServiceContactForm from "@/components/ServiceContactForm";
import BuiltByArchiteq from "@/components/BuiltByArchiteq";

const packages = [
  {
    name: "Business Software",
    price: "R34 999+",
    timeline: "3–6 Weeks",
    cta: "Get Started",
    suitable: ["Staff management systems", "Inventory tracking", "Customer management", "Internal business tools", "Custom dashboards"],
  },
  {
    name: "Advanced Software Solutions",
    price: "R79 999+",
    timeline: "6–16 Weeks",
    popular: true,
    cta: "Request A Quote",
    suitable: ["Large business systems", "Multi-location businesses", "Advanced automation", "Custom company platforms", "Large-scale online systems"],
  },
];

const process = [
  { title: "Consultation", body: "We learn your business, workflows and what's slowing you down." },
  { title: "Planning", body: "Architecture, feature scope and milestones agreed before a line of code." },
  { title: "Development", body: "Built in iterations you can see, with regular check-ins — not silence." },
  { title: "Testing", body: "End-to-end QA across roles, devices and edge cases." },
  { title: "Deployment", body: "Production rollout, team training and handover documentation." },
];

const benefits = [
  { icon: <TrendingUp className="h-5 w-5" />, title: "Increased efficiency", body: "Software shaped around how your team actually works." },
  { icon: <Workflow className="h-5 w-5" />, title: "Reduced manual work", body: "Automate the repetitive tasks eating into your team's day." },
  { icon: <Building2 className="h-5 w-5" />, title: "Better organisation", body: "Centralised data, dashboards and reporting in one place." },
  { icon: <Cpu className="h-5 w-5" />, title: "Improved productivity", body: "Faster workflows mean more output without more headcount." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Long-term scalability", body: "Built on modern frameworks designed to evolve with your business." },
];

const faqs = [
  { q: "How is this different from off-the-shelf software?", a: "Custom software is built around your exact workflows — no compromises, no monthly per-seat fees that scale with your team." },
  { q: "Do you integrate with existing systems?", a: "Yes. We commonly integrate with CRMs, payment providers, accounting platforms and existing databases." },
  { q: "Who owns the software?", a: "You do. Full code ownership and repository access transferred on completion." },
  { q: "Do you offer ongoing support?", a: "Yes — maintenance, feature additions and team training are available as monthly or hourly packages." },
  { q: "What if requirements change mid-project?", a: "Scope changes are handled transparently with revised milestones and quotes." },
  { q: "How are payments structured?", a: "50% deposit, balance against agreed milestones. Clear cost and timeline upfront." },
];

const CustomSoftware = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative px-6 lg:px-10 pt-8 lg:pt-12 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-between mb-10">
            <span className="plate-label">Custom Software Development</span>
            <span className="tabular text-[10px] tracking-[0.2em] uppercase text-muted-foreground hidden sm:inline">
              From R34 999 · 3–6 weeks
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
              Software,
              <br />
              built around
              <br />
              <span className="text-primary">your business.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-5 lg:pb-4"
            >
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Custom software designed around your goals, processes and workflows. Internal tools, dashboards, automation and full-scale company platforms — engineered to fit, not compromise.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-ember">Get a software quote <span className="tabular">→</span></Link>
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
                Scoped to your business.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Pricing scales with complexity. 50% deposit to start, balance against milestones. ZAR.</p>
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

      {/* BENEFITS */}
      <section className="px-6 lg:px-10 py-14 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="plate-label mb-4 block">Benefits</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Software that <span className="text-primary">pays for itself.</span>
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

      {/* PROCESS */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <span className="plate-label mb-4 block">Process</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              How we build it.
            </h2>
          </div>
          <div className="border-t border-b" style={{ borderColor: "hsl(var(--rule))" }}>
            {process.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group grid grid-cols-[1fr] items-baseline gap-2 py-5 lg:py-6 border-b last:border-b-0"
                style={{ borderColor: "hsl(var(--border))" }}
              >
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
              Custom software,<br /><span className="text-primary">scoped properly.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Tell us about your workflows. We'll come back with a scoped plan and a fixed quote.
            </p>
          </div>
          <ServiceContactForm service="Custom Software Development" heading="Request a quote" subheading="Tell us about your business — we reply within 24 hours." />
        </div>
      </section>

      <BuiltByArchiteq />
    </div>
  );
};

export default CustomSoftware;
