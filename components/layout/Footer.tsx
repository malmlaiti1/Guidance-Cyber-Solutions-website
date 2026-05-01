import Link from "next/link";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Logo } from "@/components/ui/Logo";
import { MAILTO, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <Logo variant="compact" scale={0.95} reversed />
          <div
            className="mt-5 text-white/70"
            style={{ fontSize: 15, lineHeight: 1.55 }}
          >
            {SITE.tagline.charAt(0).toUpperCase() + SITE.tagline.slice(1)}.
          </div>
          <div
            className="mt-3 text-white/50"
            style={{ fontSize: 13, lineHeight: 1.55 }}
          >
            {SITE.name}, {SITE.city}
          </div>
        </div>

        <div className="col-span-6 md:col-span-3">
          <Eyebrow tone="soft">Site</Eyebrow>
          <ul className="mt-5" style={{ fontSize: 15 }}>
            <li>
              <Link href="/#product" className="block py-1.5 text-white/85 hover:text-white">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="block py-1.5 text-white/85 hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/security" className="block py-1.5 text-white/85 hover:text-white">
                Security
              </Link>
            </li>
            <li>
              <Link href="/#company" className="block py-1.5 text-white/85 hover:text-white">
                Company
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <Eyebrow tone="soft">Get in touch</Eyebrow>
          <ul className="mt-5" style={{ fontSize: 15 }}>
            <li>
              {/* TODO(launch): replace mailto with real form handler. */}
              <a href={MAILTO.snapshot} className="block py-1.5 text-white hover:underline">
                Get your free HIPAA risk snapshot
              </a>
            </li>
            <li>
              <a href={MAILTO.partner} className="block py-1.5 text-white/85 hover:text-white">
                Become a design partner
              </a>
            </li>
            <li>
              <a href={MAILTO.investors} className="block py-1.5 text-white/60 hover:text-white/90">
                Investors: get in touch
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-white/60" style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} {SITE.name}.
          </div>
          <div className="text-white/60" style={{ fontSize: 13, lineHeight: 1.6 }}>
            We are HIPAA-aligned. BAA available on request. SOC 2 Type 1 in progress.
          </div>
        </div>
      </div>
    </footer>
  );
}
