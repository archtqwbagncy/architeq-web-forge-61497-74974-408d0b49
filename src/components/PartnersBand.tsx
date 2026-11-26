import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export const PARTNERS = ["BOSSMANAGENT (PTY) LTD."] as const;

interface PartnersBandProps {
  variant?: "hero" | "section";
}

/**
 * Displays Architeq's named partners in either the home hero strip or an inner-page band.
 */
const PartnersBand: React.FC<PartnersBandProps> = ({ variant = "section" }) => {
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-10 lg:mt-12 pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="plate-label text-muted-foreground">Our Partners</span>
          <div className="flex flex-wrap items-center gap-3">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="display text-base lg:text-lg font-semibold tracking-tight text-foreground"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
        <Link
          to="/clients"
          className="tabular text-xs tracking-[0.16em] uppercase text-muted-foreground hover:text-primary transition-colors self-start sm:self-center"
        >
          Clients &amp; partners →
        </Link>
      </motion.div>
    );
  }

  return (
    <section className="py-10 lg:py-12 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 lg:p-8 rounded-3xl border border-border/30 bg-muted/20 hover:border-primary/20 transition-all duration-500">
            <div className="flex items-start sm:items-center gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary shrink-0">
                <Handshake className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                  Our Partners
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {PARTNERS.map((partner) => (
                    <span
                      key={partner}
                      className="text-lg font-semibold tracking-tight text-foreground"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-xs font-medium rounded-full border border-border/40 bg-background px-4 py-1.5 text-muted-foreground self-start sm:self-center shrink-0">
              Partner
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersBand;
