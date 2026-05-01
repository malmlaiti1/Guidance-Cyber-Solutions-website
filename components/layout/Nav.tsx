"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { MAILTO } from "@/lib/site";

interface NavItem {
  label: string;
  type: "anchor" | "page";
  href: string;
}

const ITEMS: NavItem[] = [
  { label: "Product", type: "anchor", href: "#product" },
  { label: "Pricing", type: "page", href: "/pricing" },
  { label: "Security", type: "page", href: "/security" },
  { label: "Company", type: "anchor", href: "#company" },
];

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const menuId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function hrefFor(item: NavItem) {
    if (item.type === "page") return item.href;
    return onHome ? item.href : `/${item.href}`;
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between"
        style={{ height: 72 }}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo variant="primary" scale={0.85} />
          <span className="sr-only"> — home</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2" aria-label="Primary">
          {ITEMS.map((item) => (
            <Link
              key={item.label}
              href={hrefFor(item)}
              className="text-[14px] font-medium text-body px-4 py-3 hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <span className="w-3" aria-hidden="true" />
          <ButtonLink href={MAILTO.snapshot}>Get HIPAA risk snapshot</ButtonLink>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          type="button"
        >
          <Icon name={open ? "x" : "menu"} size={22} color="#0A1F44" />
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="lg:hidden border-t border-border bg-white"
      >
        <nav aria-label="Mobile primary">
          {ITEMS.map((item) => (
            <Link
              key={item.label}
              href={hrefFor(item)}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-border text-navy text-[15px] font-medium"
            >
              {item.label}
            </Link>
          ))}
          <div className="p-6">
            <ButtonLink href={MAILTO.snapshot} fullWidth onClick={() => setOpen(false)}>
              Get HIPAA risk snapshot
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
