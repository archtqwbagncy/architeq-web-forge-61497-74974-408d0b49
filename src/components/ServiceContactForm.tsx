import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight } from "lucide-react";

interface Props {
  service: string;
  heading?: string;
  subheading?: string;
}

const ServiceContactForm: React.FC<Props> = ({ service, heading = "Request a quote", subheading = "Tell us about your project — we reply within 24 hours." }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (field: string, value: string) => setFormData(p => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Missing fields", description: "Please fill in name, email, and message.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { sendEmail } = await import("@/lib/emailjs");
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        service,
        message: `Phone: ${formData.phone}\n\n${formData.message}`,
      });
      if (!result.success) throw new Error();
      toast({ title: "Message sent", description: "Thanks — we'll be in touch within 24 hours." });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Send failed", description: "Please try again or email admin@architeq.co.za.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 lg:p-10 rounded-3xl border border-border/40 bg-card">
      <h3 className="display text-2xl lg:text-3xl font-medium mb-2">{heading}</h3>
      <p className="text-sm text-muted-foreground mb-6">{subheading}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="sf-name" className="text-sm">Name *</Label>
            <Input id="sf-name" value={formData.name} onChange={e => handleChange("name", e.target.value)} placeholder="Your full name" required disabled={isSubmitting} className="rounded-xl h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sf-email" className="text-sm">Email *</Label>
            <Input id="sf-email" type="email" value={formData.email} onChange={e => handleChange("email", e.target.value)} placeholder="your@email.com" required disabled={isSubmitting} className="rounded-xl h-11" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="sf-phone" className="text-sm">Phone</Label>
          <Input id="sf-phone" type="tel" value={formData.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+27 ..." disabled={isSubmitting} className="rounded-xl h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sf-msg" className="text-sm">Message *</Label>
          <Textarea id="sf-msg" value={formData.message} onChange={e => handleChange("message", e.target.value)} placeholder="Tell us what you need…" rows={5} required disabled={isSubmitting} className="rounded-xl" />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full rounded-full h-12 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 gap-2">
          {isSubmitting ? "Sending…" : "Send message"}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ServiceContactForm;
