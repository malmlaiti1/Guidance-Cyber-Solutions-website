// All marketing copy lives here. Edit this file to update site text without
// hunting through JSX. Voice and tone: direct, knowledgeable, calm.

import type { IconName } from "@/components/ui/Icon";

export const HERO = {
  eyebrow: "AI-powered HIPAA compliance for healthcare",
  title: "Continuous HIPAA compliance. Built for practices, not hospitals.",
  subtitle:
    "Replace the $15,000 annual consultant. Guidance Cyber Solutions runs continuous security scans across your network, maps every finding to NIST 800-66, and generates audit-ready HIPAA documentation year-round — purpose-built for multi-location dental and specialty groups.",
  primaryCta: "Get your free HIPAA risk snapshot",
  secondaryCta: "See how it works",
  fineprint: "No agent install. Setup in under an hour. Design partner pricing available.",
};

export const HERO_PANEL = {
  title: "Q3 2026 posture",
  stats: [
    { n: "142", l: "Controls evaluated" },
    { n: "8", l: "Open findings" },
    { n: "14", l: "Locations watched" },
  ],
  findings: [
    {
      sev: "Critical" as const,
      t: "2 laptops at Location 03 missing full-disk encryption.",
      l: "164.312(a)(2)(iv)",
    },
    {
      sev: "Warning" as const,
      t: "Backup verification has not run in 14 days at Loc. 02.",
      l: "164.308(a)(7)(ii)(D)",
    },
    {
      sev: "Info" as const,
      t: "New device joined the network at Location 04.",
      l: "164.308(a)(1)(ii)(B)",
    },
  ],
  footerNote: "All findings mapped to NIST 800-66 Rev. 2.",
  footerCta: "Export evidence",
};

export const PROBLEM = {
  eyebrow: "The problem",
  title:
    "Healthcare is the most-breached industry in America. Small practices are not too small to be a target.",
  stats: [
    {
      n: "$7.42M",
      l: "Average cost of a healthcare data breach in 2025.",
      src: "IBM Cost of a Data Breach Report",
    },
    {
      n: "279 days",
      l: "Average time to identify and contain a healthcare breach. Longest of any industry.",
      src: "IBM",
    },
    {
      n: "55%",
      l: "Share of OCR HIPAA financial penalties imposed on small medical practices in 2022.",
      src: "HIPAA Journal",
    },
  ],
  body: "Most small healthcare practices think they're flying under the radar. They're not. OCR enforcement is up. Cyber insurance carriers are demanding documented risk assessments and continuous monitoring. And business associates were involved in 34% of healthcare breaches in 2025. Your annual PDF risk assessment is not enough anymore.",
};

export const HOW = {
  eyebrow: "How it works",
  title: "From scan to audit-ready documentation. Continuously.",
  steps: [
    {
      n: "01",
      t: "Discover",
      icon: "magnifier" as IconName,
      d: "We map every device, server, application, and cloud service across your locations. No agent installs.",
    },
    {
      n: "02",
      t: "Analyze",
      icon: "chart-line" as IconName,
      d: "Our AI security analyst reviews every vulnerability, prioritizes by exploitability and HIPAA impact, and writes plain-English remediation steps your IT person can actually follow.",
    },
    {
      n: "03",
      t: "Document",
      icon: "document" as IconName,
      d: "Every finding is mapped to a NIST 800-66 Rev. 2 control. Your HIPAA Security Risk Assessment updates automatically as your environment changes.",
    },
    {
      n: "04",
      t: "Defend",
      icon: "shield-check" as IconName,
      d: "When OCR or your cyber insurer asks for proof, you export an audit-ready report. Not a year-old PDF. Today's posture.",
    },
  ],
};

export const FEATURES = {
  eyebrow: "What you get",
  title: "One tool to replace the annual consultant and the enterprise scanner.",
  items: [
    {
      icon: "clipboard-list" as IconName,
      t: "Continuous HIPAA Risk Assessment",
      d: "Replace the annual consultant. Your Security Risk Assessment regenerates as your network changes, with full evidence trails mapped to NIST 800-66 Rev. 2 and the HHS SRA Tool format.",
    },
    {
      icon: "magnifier" as IconName,
      t: "Healthcare-tuned vulnerability scanning",
      d: "Network scans built for healthcare environments. We fingerprint EHR systems, imaging devices, dental practice management software, and common medical IoT. Findings are scored by HIPAA impact, not just CVSS.",
    },
    {
      icon: "person-headset" as IconName,
      t: "AI Security Analyst",
      d: 'A grounded AI advisor that walks your IT staff through every finding. Validated playbook library, confidence scoring on every recommendation, and a clear "needs review" flag for anything that touches medical devices or production systems. We never recommend a destructive action without human confirmation.',
    },
    {
      icon: "document" as IconName,
      t: "Audit-ready evidence, on demand",
      d: "Export HIPAA documentation, remediation history, and policy templates in the format OCR auditors and cyber insurance carriers actually ask for. Stop scrambling for evidence the night before an audit.",
    },
  ],
};

export const WHO_FOR = {
  eyebrow: "Who we built this for",
  title: "Built for the practices Tenable and Qualys won't return your call about.",
  cols: [
    {
      t: "Multi-location dental groups",
      d: "3 to 20 offices, central IT or office manager handling security, growing through acquisition, with PHI at every location.",
    },
    {
      t: "Specialty practice groups",
      d: "Orthodontics, oral surgery, dermatology, ophthalmology, behavioral health. PHI-heavy, breach-vulnerable, underserved by enterprise security tools.",
    },
    {
      t: "Small healthcare IT teams",
      d: "One to five people covering everything from passwords to PACS. Drowning in alerts. Need an analyst, not another dashboard.",
    },
  ],
};

export const WHY_NOW = {
  eyebrow: "Why now",
  title: "Cyber insurance is the new compliance officer.",
  body: "Healthcare cyber insurance carriers now require documented risk assessments, continuous vulnerability monitoring, and MFA verification before they renew. OCR's Risk Analysis Initiative is producing record settlements. Your next audit, renewal, or breach response is coming. The question is whether you'll have the evidence ready.",
  cta: "Get your free HIPAA risk snapshot",
};

export const COMPANY = {
  eyebrow: "Company",
  title:
    "We're building the AI security analyst small healthcare practices can actually afford.",
  body: "Guidance Cyber Solutions was founded by cybersecurity engineers who spent careers hardening defense and automotive systems and watched the same enterprise security tools fail to reach the small healthcare practices that need them most. Our wedge is the segment Tenable, Qualys, and Wiz are not built for: multi-location healthcare groups with real PHI, real compliance pressure, and no security team. We pair purpose-built scanning with a grounded AI analyst and continuous compliance evidence, replacing the annual consultant and the enterprise scanner with one tool a practice can actually use.",
  // TODO(launch): replace placeholder with real backers / status.
  backers: "Backed by [advisors / pre-seed status. Placeholder.]",
  founders: [
    {
      initials: "ML",
      // TODO(launch): replace with full legal name.
      name: "Musa [Last Name], Co-founder & CEO",
      bio: "Cybersecurity Engineer at Toyota Motor North America. Previously Cyber Systems Security Engineer at Lockheed Martin, where he led RHEL hardening, STIG compliance, and Ansible automation rollouts.",
    },
    {
      initials: "CN",
      // TODO(launch): replace placeholder name + bio.
      name: "[Co-founder Name], Co-founder",
      bio: "[Brief bio placeholder. Replace before launch.]",
    },
    {
      initials: "EN",
      // TODO(launch): replace placeholder name + bio.
      name: "[Engineer Name], Founding Engineer",
      bio: "[Brief bio placeholder. Replace before launch.]",
    },
  ],
};

export const FINAL_CTA = {
  eyebrow: "Get started",
  title: "See your HIPAA posture in 24 hours.",
  body: "Free risk snapshot for qualifying multi-location healthcare practices. Setup takes under an hour. No commitment.",
  primaryCta: "Request your snapshot",
  partnerLink: "Are you an MSP serving healthcare? Talk to us about partnering. →",
};

export const PRICING_HEAD = {
  eyebrow: "Pricing",
  title: "Pricing built for practices, not enterprises.",
  subtitle: "Per-location pricing. No per-asset surprises. No 12-month enterprise contracts.",
};

export const PRICING_TIERS = [
  {
    name: "Starter",
    forWho: "For single-location practices.",
    price: "$499",
    unit: "/ month",
    features: [
      "Up to 50 endpoints",
      "Continuous vulnerability scanning",
      "Quarterly HIPAA risk assessment",
      "Email support",
    ],
    cta: { label: "Start free trial", href: "starter" as const },
    highlight: false,
  },
  {
    name: "Group",
    forWho: "For multi-location groups.",
    price: "$899",
    unit: "/ location / month, billed annually",
    sub: "Volume discount over 5 locations.",
    features: [
      "Unlimited endpoints",
      "Continuous HIPAA risk assessment",
      "AI Security Analyst with playbook library",
      "Audit-ready compliance evidence exports",
      "Cyber insurance documentation packet",
    ],
    cta: { label: "Book a walkthrough", href: "group" as const },
    highlight: true,
  },
  {
    name: "Design Partner",
    forWho: "For early customers willing to give feedback.",
    price: "Custom",
    unit: "significantly reduced",
    features: [
      "Direct access to founders",
      "Roadmap influence",
      "Cyber insurance documentation packet",
      "Quarterly co-design sessions",
    ],
    cta: { label: "Apply to be a design partner", href: "partner" as const },
    highlight: false,
  },
];

export const PRICING_FOOTNOTE =
  "What you're replacing: A typical $15,000 annual HIPAA risk assessment, a $4,000-$8,000 vulnerability scanner license, and the consulting hours to make sense of either. We're priced to be cheaper than what you're already spending.";

export const FAQ = {
  eyebrow: "FAQ",
  title: "Questions practice owners ask before signing.",
  items: [
    {
      q: "Do you require an agent install on every device?",
      a: "No. We connect to your network through a lightweight collector at each location and use credentialed scanning over your existing protocols. No software is pushed to laptops, servers, or medical devices. If you later want endpoint visibility, we can pair with the EDR you already own.",
    },
    {
      q: "Is our patient data ever sent to a third-party LLM?",
      a: "No. The AI Security Analyst runs against scan findings, configuration metadata, and our own validated playbook library. No PHI is sent to any model. Customer-specific context lives in your tenant on HIPAA-eligible AWS services and is never used to train shared models.",
    },
    {
      q: "Do you offer a Business Associate Agreement (BAA)?",
      a: "Yes. We sign a BAA with every customer before any data flows. A redlineable template is available on request. We also sign BAAs with every subprocessor in the chain.",
    },
    {
      q: "What happens if we fail an OCR audit?",
      a: "If OCR opens an investigation, we provide the full historical record of your risk assessments, findings, and remediation actions, mapped to NIST 800-66. We cannot guarantee an outcome, but we can guarantee the evidence is in the format the auditor expects.",
    },
    {
      q: "Can we cancel?",
      a: "The Group tier is billed annually. The Starter tier is month-to-month and you can cancel anytime. Design partners run on a custom contract. There are no termination penalties beyond the remaining term you've prepaid.",
    },
    {
      q: "Are you SOC 2 certified?",
      a: "Not yet. SOC 2 Type 1 is in progress with a target completion date this year. We will update the Security & Trust page the day it lands. We are HIPAA-aligned today, with a BAA available on request.",
    },
  ],
};

export const SECURITY_HEAD = {
  eyebrow: "Security and Trust",
  title: "Security you can verify, not just claim.",
  subtitle:
    "A plain-English description of how we protect your data, how we constrain the AI, and where we are on the certification roadmap.",
};

export const COMPLIANCE_ROWS = [
  {
    name: "HIPAA-aligned",
    status: "In place",
    tone: "success" as const,
    note: "BAA available on request.",
  },
  {
    name: "SOC 2 Type 1",
    status: "In progress",
    tone: "warning" as const,
    note: "Target completion Q4 2026.",
  },
  {
    name: "SOC 2 Type 2",
    status: "Roadmap",
    tone: "muted" as const,
    note: "Begins after Type 1.",
  },
  {
    name: "HITRUST",
    status: "Evaluating",
    tone: "muted" as const,
    note: "Decision in 2027.",
  },
];

export const SUBPROCESSORS = [
  {
    name: "Amazon Web Services",
    role: "Cloud infrastructure (HIPAA-eligible)",
    region: "US-East",
  },
  { name: "Linear", role: "Engineering issue tracking (no PHI)", region: "US" },
  { name: "Stripe", role: "Billing and payment processing", region: "US" },
  // TODO(launch): finalize subprocessor list at GA.
  { name: "[Subprocessor]", role: "Placeholder. List finalized at GA.", region: "—" },
];
