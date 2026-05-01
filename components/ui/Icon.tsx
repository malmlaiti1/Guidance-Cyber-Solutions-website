import type { SVGProps } from "react";

export type IconName =
  | "shield-check"
  | "clipboard-list"
  | "network"
  | "magnifier"
  | "lock-open"
  | "lock-closed"
  | "server"
  | "document"
  | "alert-triangle"
  | "gear"
  | "chart-line"
  | "person-headset"
  | "arrow-right"
  | "menu"
  | "x"
  | "plus"
  | "minus"
  | "check";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export function Icon({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  className,
}: IconProps) {
  const props: SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    xmlns: "http://www.w3.org/2000/svg",
    className,
  };
  switch (name) {
    case "shield-check":
      return (
        <svg {...props}>
          <path d="M12 3 L20 6 V12 C20 16.5 16.5 19.5 12 21 C7.5 19.5 4 16.5 4 12 V6 Z" />
          <path d="M9 12 L11.2 14 L15 10" />
        </svg>
      );
    case "clipboard-list":
      return (
        <svg {...props}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4 V3 H15 V4" />
          <path d="M9 9 H15" />
          <path d="M9 13 H15" />
          <path d="M9 17 H13" />
        </svg>
      );
    case "network":
      return (
        <svg {...props}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path d="M12 7 V11" />
          <path d="M12 11 L6 17" />
          <path d="M12 11 L18 17" />
        </svg>
      );
    case "magnifier":
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="6" />
          <path d="M15.5 15.5 L20 20" />
        </svg>
      );
    case "lock-open":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11 V7 a4 4 0 0 1 8 0" />
        </svg>
      );
    case "lock-closed":
      return (
        <svg {...props}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11 V7 a4 4 0 0 1 8 0 V11" />
        </svg>
      );
    case "server":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="7" rx="1.5" />
          <rect x="4" y="13" width="16" height="7" rx="1.5" />
          <circle cx="8" cy="7.5" r="0.6" fill={color} />
          <circle cx="8" cy="16.5" r="0.6" fill={color} />
        </svg>
      );
    case "document":
      return (
        <svg {...props}>
          <path d="M7 3 H14 L18 7 V20 a1 1 0 0 1 -1 1 H7 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 Z" />
          <path d="M14 3 V7 H18" />
          <path d="M9 12 H15" />
          <path d="M9 16 H15" />
        </svg>
      );
    case "alert-triangle":
      return (
        <svg {...props}>
          <path d="M12 4 L21 19 H3 Z" />
          <path d="M12 10 V14" />
          <circle cx="12" cy="17" r="0.6" fill={color} />
        </svg>
      );
    case "gear":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3 V5 M12 19 V21 M3 12 H5 M19 12 H21 M5.6 5.6 L7 7 M17 17 L18.4 18.4 M5.6 18.4 L7 17 M17 7 L18.4 5.6" />
        </svg>
      );
    case "chart-line":
      return (
        <svg {...props}>
          <path d="M4 4 V20 H20" />
          <path d="M7 16 L11 11 L14 13 L19 7" />
        </svg>
      );
    case "person-headset":
      return (
        <svg {...props}>
          <circle cx="12" cy="9" r="3.5" />
          <path d="M5 20 a7 7 0 0 1 14 0" />
          <path d="M5 11 a7 7 0 0 1 14 0" />
          <path d="M5 11 V14 a1 1 0 0 0 1 1 H7" />
          <path d="M19 11 V14 a1 1 0 0 1 -1 1 H17" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...props}>
          <path d="M5 12 H19" />
          <path d="M13 6 L19 12 L13 18" />
        </svg>
      );
    case "menu":
      return (
        <svg {...props}>
          <path d="M4 7 H20" />
          <path d="M4 12 H20" />
          <path d="M4 17 H20" />
        </svg>
      );
    case "x":
      return (
        <svg {...props}>
          <path d="M6 6 L18 18" />
          <path d="M18 6 L6 18" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M12 5 V19" />
          <path d="M5 12 H19" />
        </svg>
      );
    case "minus":
      return (
        <svg {...props}>
          <path d="M5 12 H19" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 12 L10 17 L19 7" />
        </svg>
      );
  }
}
