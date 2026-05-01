export const SITE = {
  name: "Guidance Cyber Solutions",
  shortName: "Guidance Cyber",
  tagline: "AI security analyst for healthcare",
  description:
    "Continuous, AI-powered HIPAA compliance for multi-location dental and specialty practices. Replace the annual risk assessment consultant.",
  city: "Dallas, Texas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://guidancecybersolutions.com",
  email: {
    hello: "hello@guidancecybersolutions.com",
    partners: "partners@guidancecybersolutions.com",
    investors: "investors@guidancecybersolutions.com",
    security: "security@guidancecybersolutions.com",
  },
} as const;

// TODO(launch): replace mailto with a real form handler endpoint.
export const MAILTO = {
  snapshot: `mailto:${SITE.email.hello}?subject=Free%20HIPAA%20risk%20snapshot`,
  requestSnapshot: `mailto:${SITE.email.hello}?subject=Request%20snapshot`,
  partner: `mailto:${SITE.email.partners}?subject=Design%20partner%20application`,
  msp: `mailto:${SITE.email.partners}?subject=MSP%20partnership`,
  investors: `mailto:${SITE.email.investors}?subject=Investors%20inquiry`,
  starter: `mailto:${SITE.email.hello}?subject=Starter%20free%20trial`,
  group: `mailto:${SITE.email.hello}?subject=Group%20walkthrough`,
  security: `mailto:${SITE.email.security}`,
} as const;
