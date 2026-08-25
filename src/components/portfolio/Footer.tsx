import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Navbar";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Frontend Development",
  "Full Stack Development",
  "UI/UX Implementation",
];

const CONNECT = [
  "estradamikeleuster@gmail.com",
  "09649796538",
  "Bohol, Philippines",
  "Remote — worldwide",
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/mikeeyyyy04" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mike-leuster-estrada" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/mikemico.buchanestrada/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_mikeeyyyyyy/" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={36} />
              <span className="font-display text-sm font-bold tracking-[0.18em] uppercase">
                Mike Estrada
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Web Developer and Mobile App Developer building responsive websites and high-quality
              mobile applications.
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full border border-primary/25 text-muted-foreground transition-all hover:border-primary/70 hover:text-primary hover:shadow-[0_0_22px_-6px_var(--glow)]"
                  >
                    <s.icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title="Navigation">
            {NAV.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="transition-colors hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </FooterCol>

          <FooterCol title="Let's Connect">
            {CONNECT.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </FooterCol>
        </div>

        <p className="mt-14 border-t border-border/60 pt-6 text-center font-display text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
          © 2026 Mike Estrada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-[0.62rem] tracking-[0.24em] text-primary uppercase">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
