import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Globe, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { submitContactForm } from "~/server/contact";

const DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "estradamikeleuster@gmail.com",
    href: "mailto:estradamikeleuster@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "09649796538", href: "tel:+639649796538" },
  { icon: MapPin, label: "Location", value: "Bohol, Philippines" },
  { icon: Globe, label: "Availability", value: "Remote — worldwide" },
];

const FIELD =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary/70 focus:shadow-[0_0_24px_-6px_var(--glow)]";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  type: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      await submitContactForm(data);
      setSent(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(errorMessage);
      console.error("Form submission error:", err);
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="eyebrow">Let&apos;s build something great</p>
          <h2 className="mt-4 font-display text-3xl leading-tight font-bold uppercase sm:text-4xl">
            Have a project
            <br />
            <span className="text-gradient">in mind?</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            I&apos;m available for freelance web development, mobile app development, and software
            projects.
          </p>
          <ul className="mt-10 space-y-4">
            {DETAILS.map((d) => (
              <li key={d.label} className="glass flex items-center gap-4 rounded-2xl px-5 py-4">
                <d.icon size={17} className="shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="font-display text-[0.58rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="truncate text-sm transition-colors hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>


        <Reveal delay={120}>
          <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-7 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  {...register("name")}
                  className={FIELD}
                  placeholder="Juan Dela Cruz"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                  Your Email
                </label>
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  className={FIELD}
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="type" className="mb-2 block text-xs text-muted-foreground">
                  Project Type
                </label>
                <select id="type" {...register("type")} className={FIELD}>
                  <option value="">Select a type</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Full Stack Development</option>
                  <option>UI/UX Implementation</option>
                  <option>Other</option>
                </select>
                {errors.type && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.type.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-xs text-muted-foreground">
                  Budget Range
                </label>
                <select id="budget" {...register("budget")} className={FIELD}>
                  <option value="">Select a range</option>
                  <option>Below $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500+</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.budget.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Tell me about your project...
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className={FIELD}
                  placeholder="Goals, timeline, platforms..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-7 py-3.5 font-display text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-[0_0_30px_-8px_var(--glow)] transition-all hover:shadow-[0_0_44px_-4px_var(--glow)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send message
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {error && (
              <p className="mt-4 text-center text-xs text-red-500 flex items-center justify-center gap-2">
                <AlertCircle size={14} /> {error}
              </p>
            )}

            {sent && (
              <p className="mt-4 text-center text-xs text-primary flex items-center justify-center gap-2">
                <CheckCircle2 size={14} /> Thanks — your message has been sent!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
