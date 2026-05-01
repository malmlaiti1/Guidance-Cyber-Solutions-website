"use client";

import { useId, useState } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { FAQ } from "@/lib/copy";

export function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  const baseId = useId();

  return (
    <section className="bg-off">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-24 pb-28">
        <Eyebrow>{FAQ.eyebrow}</Eyebrow>
        <h2
          className="mt-5 text-navy font-bold"
          style={{
            fontSize: "clamp(28px, 3.8vw, 40px)",
            letterSpacing: "-0.015em",
            lineHeight: 1.1,
            maxWidth: 720,
          }}
        >
          {FAQ.title}
        </h2>

        <div className="mt-10 bg-white border border-border">
          {FAQ.items.map((it, i) => {
            const isOpen = openIdx === i;
            const panelId = `${baseId}-${i}`;
            return (
              <div
                key={it.q}
                style={{
                  borderBottom:
                    i < FAQ.items.length - 1 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left flex items-center justify-between gap-6"
                    style={{ padding: "24px 28px" }}
                  >
                    <span
                      className="text-navy font-semibold"
                      style={{ fontSize: 18, lineHeight: 1.4 }}
                    >
                      {it.q}
                    </span>
                    <span style={{ flexShrink: 0 }}>
                      <Icon
                        name={isOpen ? "minus" : "plus"}
                        size={20}
                        color="#2C6BED"
                        strokeWidth={2}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  hidden={!isOpen}
                  style={{ padding: "0 28px 28px 28px", maxWidth: 880 }}
                >
                  <p className="text-body" style={{ fontSize: 16, lineHeight: 1.65 }}>
                    {it.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
