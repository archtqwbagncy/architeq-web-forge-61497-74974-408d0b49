import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "rmmnf1GfFjGlRh1cZ";
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_n7jkdgc";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_m987fnb";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

/**
 * Send a contact inquiry via EmailJS to admin@architeq.co.za.
 */
export const sendEmail = async (formData: ContactEmailPayload) => {
  if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
    const error = new Error("EmailJS configuration is missing.");
    console.error(error.message);
    return { success: false, error };
  }

  try {
    const email = formData.email.trim();
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name.trim(),
        from_email: email,
        reply_to: email,
        phone: formData.phone?.trim() || "Not provided",
        service: formData.service.trim() || "General Inquiry",
        message: formData.message.trim(),
        to_email: "admin@architeq.co.za",
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    );
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};