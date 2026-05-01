import type { Metadata } from "next";

import {
  ComplianceStatus,
  SecuritySection,
  SubprocessorList,
} from "@/components/sections/SecurityBlocks";
import { PageHead } from "@/components/ui/PageHead";
import { SECURITY_HEAD } from "@/lib/copy";
import { MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security and Trust",
  description:
    "How Guidance Cyber Solutions protects your data, constrains the AI, and where we are on the certification roadmap.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security and Trust / Guidance Cyber Solutions",
    description:
      "How Guidance Cyber Solutions protects your data, constrains the AI, and where we are on the certification roadmap.",
    url: "/security",
  },
};

export default function SecurityPage() {
  return (
    <main id="main">
      <PageHead
        eyebrow={SECURITY_HEAD.eyebrow}
        title={SECURITY_HEAD.title}
        subtitle={SECURITY_HEAD.subtitle}
      />

      <SecuritySection id="posture" n="01" title="Our security posture." icon="shield-check">
        <p>
          We treat customer data as if it were our own PHI. All data is encrypted in transit
          using TLS 1.2 or higher and at rest using AES-256. Access to production systems is
          least-privilege, MFA-enforced, and reviewed quarterly. Customer environments are
          isolated by tenant. We are hosted on HIPAA-eligible AWS services in the United States
          and we sign a Business Associate Agreement with every customer before any data flows.
        </p>
        <p className="mt-4">
          Production access is audit-logged and reviewed weekly. Changes to production reach
          customers through a code-review-and-deploy pipeline only. There is no shared admin
          password.
        </p>
      </SecuritySection>

      <SecuritySection id="ai" n="02" title="AI safety guardrails." icon="person-headset">
        <p>
          The AI Security Analyst is grounded. It does not freely generate. Every recommendation
          is retrieved from a source we control: NIST 800-66 Rev. 2, CISA&rsquo;s Known Exploited
          Vulnerabilities catalog, vendor advisories, and our internal validated playbook
          library. Every output carries a confidence score and a citation back to the source.
        </p>
        <p className="mt-4">
          No destructive action runs without human confirmation. When a finding touches a
          medical device, an EHR, or a production system, the analyst flags it for review rather
          than recommending an automatic fix. Every AI-assisted action is written to an audit
          log your IT team can export.
        </p>
      </SecuritySection>

      <SecuritySection id="roadmap" n="03" title="Compliance roadmap." icon="clipboard-list">
        <p>We tell you what we have and what we don&rsquo;t. We will update this page the day a status changes.</p>
        <div className="mt-6">
          <ComplianceStatus />
        </div>
      </SecuritySection>

      <SecuritySection id="phi" n="04" title="PHI handling." icon="lock-closed">
        <p>
          We collect the minimum data required to assess your security posture: device
          inventory, configuration metadata, vulnerability scan results, and the user accounts
          authorized on those systems. We do not collect patient records, imaging, or claims
          data. We do not need it and we do not want it.
        </p>
        <p className="mt-4">
          Scan data is retained for 24 months by default to support audit lookback. Customers
          can extend or shorten retention through the admin console. On contract termination, we
          return or destroy customer data within 30 days and provide a written certificate of
          destruction.
        </p>
        <div className="mt-6">
          <div
            className="text-navy font-semibold"
            style={{ fontSize: 14, letterSpacing: "0.02em" }}
          >
            Subprocessors
          </div>
          <div className="mt-3">
            <SubprocessorList />
          </div>
        </div>
      </SecuritySection>

      <SecuritySection
        id="disclosure"
        n="05"
        title="Responsible disclosure."
        icon="alert-triangle"
      >
        <p>
          If you believe you have found a security vulnerability in our product, email{" "}
          <a
            href={MAILTO.security}
            className="text-accent font-semibold hover:underline"
          >
            security@guidancecybersolutions.com
          </a>
          . We acknowledge every report within 48 hours, work with the reporter on a remediation
          timeline, and credit researchers who follow coordinated disclosure.
        </p>
        <p className="mt-4">
          PGP key on request. We do not currently run a paid bug bounty.
        </p>
      </SecuritySection>
    </main>
  );
}
