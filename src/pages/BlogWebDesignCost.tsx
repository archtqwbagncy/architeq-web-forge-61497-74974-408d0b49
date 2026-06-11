import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const SITE = "https://architeq.co.za";
const PATH = "/blog/web-design-cost-south-africa";

const tiers = [
  {
    name: "One-page website",
    range: "R1,999 – R4,500",
    fit: "Solo operators, trades, pop-up brands, simple lead capture.",
    includes: ["Mobile-first layout", "Contact form & WhatsApp link", "Google Business Profile setup", "Basic on-page SEO"],
  },
  {
    name: "Small business site (3–5 pages)",
    range: "R4,999 – R9,000",
    fit: "Plumbers, electricians, salons, cafés, local service brands.",
    includes: ["Home, About, Services, Contact", "SEO-ready copy structure", "Lead form + email routing", "1 month of edits included"],
  },
  {
    name: "Growth website (6–10 pages)",
    range: "R9,999 – R18,000",
    fit: "Established businesses with multiple services or locations.",
    includes: ["Blog/CMS", "Advanced SEO setup", "Analytics & tracking", "Social integrations", "3 months support"],
  },
  {
    name: "Custom / e-commerce",
    range: "R14,999 – R45,000+",
    fit: "Online stores, booking platforms, multi-location brands.",
    includes: ["Payments & checkout", "Custom features", "Performance tuning", "6 months support"],
  },
];

const factors = [
  { title: "Number of pages", body: "More pages means more design, more copy, and more SEO work. Most local businesses need between 3 and 8 pages." },
  { title: "Custom design vs template", body: "Templates are faster and cheaper. A fully custom design takes longer but matches your brand exactly." },
  { title: "Copywriting", body: "If you write the words yourself, you save money. If the agency writes them for you, expect to add R1,500 to R6,000." },
  { title: "Photography", body: "Stock photos are free or cheap. A short brand shoot in Gauteng starts around R2,500." },
  { title: "Functionality", body: "Booking systems, payments, member logins and integrations all add cost. A simple contact form does not." },
  { title: "Hosting & domain", body: "Expect R150 to R350 a month for hosting and R150 to R250 a year for a .co.za domain. Our care plans from R299/month include hosting." },
  { title: "Ongoing maintenance", body: "Updates, backups, security and small edits. Skip this and small problems quietly become big ones." },
];

const faqs = [
  { q: "How much does a website cost in South Africa in 2026?", a: "A simple one-page site starts around R1,999. Most small businesses spend between R5,000 and R15,000 for a complete site. Custom builds and online stores typically run R20,000 to R45,000 or more." },
  { q: "Why are some web design quotes so cheap?", a: "Very low quotes often skip strategy, SEO, mobile testing, hosting and support. You get a site that exists but does not bring in work. Always ask what is included and what happens after launch." },
  { q: "Do I pay monthly or once-off?", a: "At Architeq the build is a once-off fixed price. Hosting, domain and maintenance are monthly from R299. You own the site." },
  { q: "How long does it take?", a: "We deliver in 7 days. The average is 5 days once we have your content and brand details." },
  { q: "Do I need a designer and a developer?", a: "Not with us. One team handles design, build, copy structure, SEO and launch under one fixed quote." },
];

export default function BlogWebDesignCost() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      { "@type": "ListItem", position: 3, name: "Web Design Cost in South Africa", item: `${SITE}${PATH}` },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Web Design Cost in South Africa (2026 Guide)",
    description: "Honest pricing guide for websites in South Africa. What a real site costs, what changes the price, and how to avoid wasting money.",
    author: { "@type": "Organization", name: "Architeq Web Agency" },
    publisher: { "@type": "Organization", name: "Architeq Web Agency", logo: { "@type": "ImageObject", url: `${SITE}/logo-dark.png` } },
    mainEntityOfPage: `${SITE}${PATH}`,
    image: `${SITE}/og-image.jpg`,
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Web Design Cost in South Africa (2026 Guide) · Architeq"
        description="What a website really costs in South Africa. Honest 2026 pricing for one-page, small business, growth and e-commerce sites — plus what changes the price."
        path={PATH}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <span>Guide</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">Web design cost in South Africa</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              2026 Pricing Guide · South Africa
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
              Web Design Cost in <span className="gradient-text">South Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              An honest 2026 breakdown of what a website really costs in South Africa — what you should pay, what you should avoid, and what changes the price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick summary */}
      <section className="py-10 lg:py-14 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="rounded-3xl border border-border/40 bg-muted/30 p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Short answer</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              In South Africa, a basic one-page website starts around <strong className="text-foreground">R1,999</strong>. Most small businesses pay between <strong className="text-foreground">R5,000 and R15,000</strong> for a complete site. Custom builds and online stores usually run <strong className="text-foreground">R20,000 to R45,000+</strong>. Hosting and care plans add about <strong className="text-foreground">R299–R699 per month</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-14 lg:py-20 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What you get at each price point</h2>
            <p className="text-lg text-muted-foreground">Real ranges from agencies in South Africa, not theoretical numbers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {tiers.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="p-8 rounded-3xl border border-border/30 hover:border-primary/30 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{t.range}</div>
                <p className="text-sm text-muted-foreground mb-5">{t.fit}</p>
                <ul className="space-y-2.5">
                  {t.includes.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes the price */}
      <section className="py-14 lg:py-20 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">What actually changes the price</h2>
          <div className="space-y-6">
            {factors.map((f, i) => (
              <div key={i} className="border-l-2 border-primary/40 pl-5">
                <h3 className="text-lg md:text-xl font-semibold mb-1.5">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cheap warning */}
      <section className="py-14 lg:py-20 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why "R500 websites" usually cost you more</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>A R500 site usually means a free template, no strategy, no real SEO, no testing on phones, and no support after launch. It looks like a website but it does not bring in work.</p>
            <p>Most business owners who start there pay again within a year to rebuild properly. The cheaper option ends up being the most expensive one.</p>
            <p>A fair, working website for a South African small business starts around <strong className="text-foreground">R4,999</strong>. That is the honest number.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-20 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border/30 p-6 lg:p-7">
                <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Want a real, fixed quote?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us what you do. We'll send back a fixed price and a 7-day plan — no sales call required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full h-12 px-7 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 gap-2">
              <Link to="/contact">Get my quote <ArrowUpRight className="h-3.5 w-3.5" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-7 text-sm font-medium">
              <Link to="/services/web-design">See web design packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
