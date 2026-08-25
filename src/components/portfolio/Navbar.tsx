import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative grid shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-display font-bold text-primary shadow-[0_0_24px_-4px_var(--glow)]"
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      M
      <span className="absolute -bottom-px left-1/2 h-px w-5 -translate-x-1/2 bg-primary" />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/15 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <Logo />
          <span className="truncate font-display text-sm font-bold tracking-[0.18em] uppercase">
            Mike Estrada
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`group relative font-display text-[0.68rem] font-medium tracking-[0.2em] uppercase transition-colors ${
                    active === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-primary shadow-[0_0_10px_var(--glow)] transition-all duration-300 ${
                      active === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 font-display text-[0.68rem] font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-[0_0_28px_-6px_var(--glow)] transition-all hover:shadow-[0_0_38px_-4px_var(--glow)]"
          >
            Let&apos;s work together
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/25 text-primary lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-primary/15 bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/40 py-3 font-display text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-center font-display text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase"
              >
                Let&apos;s work together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
