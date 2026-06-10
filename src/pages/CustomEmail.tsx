import React from "react";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Mail, ShieldCheck, Zap, Globe, Users, Inbox } from "lucide-react";
import ServiceContactForm from "@/components/ServiceContactForm";
import BuiltByArchiteq from "@/components/BuiltByArchiteq";

const packages = [
  { name: "Single Email Setup", price: "R499+", emails: "1 email address", features: ["Domain email setup", "Gmail send & receive", "Full DNS configuration", "Spam protection", "Delivery testing"] },
  { name: "Business Starter", price: "R799+", emails: "2–4 email addresses", popular: true, features: ["Everything in Single", "2–4 branded addresses", "info@, sales@, etc.", "Per-mailbox setup", "Full setup testing"] },
  { name: "Full Business Setup", price: "R1 999+", emails: "5–10 email addresses", features: ["Everything in Starter", "5–10 branded mailboxes", "Team-wide configuration", "DNS hardening", "Priority delivery"] },
  { name: "Custom Package", price: "Contact us", emails: "10+ mailboxes / custom", features: ["Unlimited business emails", "Custom routing & aliases", "Migration assistance", "Onboarding for your team", "Bespoke configuration"] },
];

const whatWeDo = [
  "Domain email setup",
  "Gmail integration (send & receive)",
  "Unlimited business emails (info@, sales@, etc.)",
  "Full DNS configuration",
  "Spam protection + full setup testing",
  "Fully tested delivery setup",
];

const benefits = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Instant credibility", body: "A branded address tells customers you're a real, established business." },
  { icon: <Users className="h-5 w-5" />, title: "Build client trust", body: "No more Gmail or Hotmail addresses for serious business communication." },
  { icon: <Globe className="h-5 w-5" />, title: "Own your identity", body: "Your domain, your inbox — independent of any free provider's branding." },
  { icon: <Zap className="h-5 w-5" />, title: "Fully set up in under 24 hours", body: "Most setups are live the same day. Zero monthly cost on your side." },
  { icon: <Inbox className="h-5 w-5" />, title: "Tested deliverability", body: "We configure SPF, DKIM, DMARC and test every mailbox before handover." },
  { icon: <Mail className="h-5 w-5" />, title: "Works with Gmail", body: "Send and receive directly from your existing Gmail — nothing new to learn." },
];

const faqs = [
  { q: "How long does setup take?", a: "Most setups are fully live within 24 hours of receiving your domain access." },
  { q: "Is there a monthly fee?", a: "No monthly fees from us — it's a once-off setup. Mailbox provider costs (if any) are billed directly to you by them." },
  { q: "Can I keep my existing Gmail?", a: "Yes. We integrate your branded address with your existing Gmail account so you send and receive in one place." },
  { q: "What if I don't have a domain yet?", a: "We'll help you register one and configure it during setup." },
  { q: "Do you handle migrations?", a: "Yes — our Custom Package covers migrations from existing providers with no data loss." },
  { q: "What's included in spam protection?", a: "Full SPF, DKIM and DMARC configuration plus end-to-end delivery testing." },
];

const CustomEmail = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Custom Business Email Setup · Gmail-Integrated · From R499+" description="Branded business email on your domain with full Gmail send & receive, DNS configuration, and same-day setup. From R499+." path="/services/custom-email" />
      {/* HERO */}
      <section className="relative px-6 lg:px-10 pt-8 lg:pt-12 pb-14 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex items-center justify-between mb-10">
            <span className="plate-label">Custom Business Email</span>
            <span className="tabular text-[10px] tracking-[0.2em] uppercase text-muted-foreground hidden sm:inline">
              Fully set up in under 24 hours
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
              Look the part.
              <br />
              <span className="text-primary">From the inbox.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col gap-5 lg:pb-4"
            >
              <p className="text-[17px] leading-relaxed text-muted-foreground">
                Professional business email setup with zero monthly cost. Branded addresses on your domain, integrated with Gmail, fully tested and live in under 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-ember">Get Professional Email <span className="tabular">→</span></Link>
                <a href="#packages" className="btn-ghost-line">See pricing</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* WHAT WE DO */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <span className="plate-label mb-4 block">What we do for you</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              The full email stack — handled end-to-end.
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4 self-end">
            {whatWeDo.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 py-3 border-b border-border/40"
              >
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-[15px] leading-snug">{item}</span>
              </motion.li>
            ))}
          </ul>
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
                Once-off setup. <span className="text-muted-foreground">Zero monthly fees.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Fully set up in under 24 hours. Pricing in ZAR, billed once on completion.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative p-7 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${p.popular ? "border-primary ring-1 ring-primary/20 bg-primary/[0.03]" : "border-border/40 hover:border-primary/30"}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full">Most picked</span>
                )}
                <h3 className="text-base font-semibold mb-1">{p.name}</h3>
                <p className="text-xs tabular tracking-wider uppercase text-muted-foreground mb-4">{p.emails}</p>
                <div className="drafting-numeral text-foreground mb-5" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}>{p.price}</div>
                <ul className="space-y-2.5 mb-6 min-h-[140px]">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-primary mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center w-full rounded-full py-2.5 text-sm font-medium border border-foreground hover:bg-foreground hover:text-background transition-colors">
                  Get this package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* WHY IT MATTERS / BENEFITS */}
      <section className="px-6 lg:px-10 py-14 lg:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="plate-label mb-4 block">Why it matters</span>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Why businesses choose <span className="text-primary">professional email.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
              Look more professional instantly. Build client trust. Own your business identity — and stop sending invoices from a free Gmail address.
            </p>
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
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-4">
                  {b.icon}
                </div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="p-6 rounded-2xl border border-border/40"
              >
                <h3 className="font-semibold text-[15px] mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* CTA + CONTACT FORM */}
      <section className="px-6 lg:px-10 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="plate-label mb-4 block">Get started</span>
            <h2 className="display" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 0.95 }}>
              Ready for a<br /><span className="text-primary">branded inbox?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Send us your domain and we'll come back with the exact package and a 24-hour setup plan.
            </p>
          </div>
          <ServiceContactForm service="Custom Email Setup" heading="Get professional email" subheading="Tell us about your domain — we reply within 24 hours." />
        </div>
      </section>

      <BuiltByArchiteq />
    </div>
  );
};

export default CustomEmail;
