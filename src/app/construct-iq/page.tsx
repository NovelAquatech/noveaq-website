import type { Metadata } from "next";
import FooterSection from "../_components/footer/footer";
import Navbar from "../_components/navbar/navbar";
import ConstructIQFAQ from "./faq-section";

const CUSTOMER_PORTAL = "https://constructiq.novelaquatech.com/";
const ADMIN_PORTAL = "https://constructiq-admin.novelaquatech.com/";

export const metadata: Metadata = {
  title: "ConstructIQ | Integrated Management System",
  description:
    "Bring quality, safety and environmental management together with ConstructIQ — an integrated platform supporting ISO 9001, ISO 45001 and ISO 14001 workflows.",
};

const featureGroups = [
  {
    standard: "ISO 45001",
    title: "Safety management",
    description:
      "Give teams one place to record incidents and hazards, prepare SWMS, run toolbox talks and follow safety actions through to completion.",
    accent: "bg-amber-50 text-amber-700 ring-amber-200",
    icon: "shield",
    features: ["Incidents & hazards", "SWMS", "Toolbox talks"],
  },
  {
    standard: "ISO 9001",
    title: "Quality management",
    description:
      "Control quality processes with non-conformances, inspections, ITPs, audits and clear accountability across every project.",
    accent: "bg-blue-50 text-blue-700 ring-blue-200",
    icon: "quality",
    features: ["Non-conformances", "Inspections & ITPs", "ITP builder"],
  },
  {
    standard: "ISO 14001",
    title: "Environmental management",
    description:
      "Capture environmental records, monitor obligations and keep evidence organised for projects, reviews and audits.",
    accent: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    icon: "leaf",
    features: ["Environmental records", "Objectives & targets", "Compliance tracking"],
  },
];

const platformFeatures = [
  {
    icon: "folder",
    title: "Project oversight",
    description:
      "See active projects and the records, risks, actions and documentation connected to each site.",
  },
  {
    icon: "document",
    title: "Controlled documents",
    description:
      "Manage documents, policies, management plans and review status from one structured library.",
  },
  {
    icon: "plant",
    title: "Plant & machinery",
    description:
      "Stay ahead of service dates, registration renewals, licences and certification expiries.",
  },
  {
    icon: "audit",
    title: "Audits & actions",
    description:
      "Schedule audits, assign corrective actions and make overdue work visible before it becomes a risk.",
  },
  {
    icon: "people",
    title: "People & competency",
    description:
      "Maintain workforce and competency information needed to support compliant project delivery.",
  },
  {
    icon: "assistant",
    title: "Compliance assistance",
    description:
      "Use guided compliance and reporting tools to help teams find information and prepare useful outputs faster.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Set up your organisation",
    description:
      "Configure your workspace, people, projects and the management processes that apply to your operations.",
  },
  {
    number: "02",
    title: "Bring work into one system",
    description:
      "Capture safety, quality, environmental, document and asset records through consistent workflows.",
  },
  {
    number: "03",
    title: "Track what needs attention",
    description:
      "Use dashboards and alerts to identify open incidents, NCRs, overdue actions, audits and upcoming expiries.",
  },
  {
    number: "04",
    title: "Improve with confidence",
    description:
      "Review trends, produce reports and maintain a clearer evidence trail for management and certification activities.",
  },
];

function PortalButtons({ compact = false }: { compact?: boolean }) {
  const shared = compact
    ? "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold transition-all"
    : "inline-flex min-h-12 items-center justify-center rounded-xl px-6 py-3 text-base font-bold transition-all";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={CUSTOMER_PORTAL}
        target="_blank"
        rel="noreferrer"
        className={`${shared} bg-blue-700 text-white shadow-lg shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-blue-800`}
      >
        Open Customer Portal
        <ArrowIcon />
      </a>
      <a
        href={ADMIN_PORTAL}
        target="_blank"
        rel="noreferrer"
        className={`${shared} border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700`}
      >
        Open Admin Portal
        <ArrowIcon />
      </a>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="ml-2 h-4 w-4" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    shield: <path d="M12 3 5 6v5c0 4.6 2.9 8.1 7 10 4.1-1.9 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-4" />,
    quality: <path d="m8.5 12 2.2 2.2 4.8-5M12 3l2.2 2 3-.2.8 2.9 2.3 1.8-1.4 2.7.5 3-2.8 1.1-1.6 2.5-3-1-3 1-1.6-2.5-2.8-1.1.5-3-1.4-2.7L6 7.7l.8-2.9 3 .2L12 3Z" />,
    leaf: <path d="M19.5 4.5C12 4.7 6.7 7.2 5 12.2c-1.1 3.3.7 6.3 3.8 6.3 5.2 0 8.3-5.1 10.7-14ZM5 20c1.3-4.3 4.5-7.5 9-9.5" />,
    folder: <path d="M3 7.5h7l2 2h9v9.5H3V7.5Zm0 0V5h6l2 2.5" />,
    document: <path d="M7 3h7l4 4v14H7V3Zm7 0v5h5M10 12h5m-5 4h5" />,
    plant: <path d="M4 20h16M6 20v-7h4v7m4 0V8h4v12M5 9h4m6-5h2m-6 9h2m-2 4h2" />,
    audit: <path d="M7 4h10v17H7V4Zm3-2h4v4h-4V2Zm0 9 1.5 1.5L15 9m-5 8h5" />,
    people: <path d="M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m6.5-10A4 4 0 1 0 9.5 2a4 4 0 0 0 0 8Zm8.5 10v-2.2a4 4 0 0 0-3-3.8m1-11.6a4 4 0 0 1 0 7.2" />,
    assistant: <path d="M5 5h14v11H9l-4 4V5Zm4 5h.01M12 10h.01M15 10h.01" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function DashboardPreview() {
  const stats = [
    ["1", "Active Projects"],
    ["0", "Open Incidents"],
    ["0", "Open NCRs"],
    ["0", "Overdue Actions"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-300/30 to-cyan-200/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-slate-900/20">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <div className="ml-3 h-6 flex-1 rounded-md bg-white ring-1 ring-slate-200" />
        </div>
        <div className="flex min-h-[360px]">
          <div className="hidden w-40 shrink-0 bg-slate-950 p-4 text-white sm:block">
            <p className="mb-7 text-sm font-bold">ConstructIQ</p>
            <div className="space-y-2 text-[10px] text-slate-400">
              <p className="rounded bg-blue-600 px-2 py-2 text-white">Overview</p>
              <p className="px-2 py-1.5">Projects</p>
              <p className="pt-3 text-[8px] font-bold uppercase tracking-widest text-slate-500">Safety</p>
              <p className="px-2 py-1.5">Incidents & Hazards</p>
              <p className="px-2 py-1.5">SWMS</p>
              <p className="pt-3 text-[8px] font-bold uppercase tracking-widest text-slate-500">Quality</p>
              <p className="px-2 py-1.5">Non-Conformances</p>
              <p className="px-2 py-1.5">Inspections & ITPs</p>
            </div>
          </div>
          <div className="flex-1 bg-slate-50 p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-blue-700">IMS Platform</p>
                <p className="text-lg font-bold text-slate-900">Dashboard</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">D</span>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <p className="text-2xl font-bold text-slate-900">{value}</p>
                  <p className="mt-1 text-[9px] leading-tight text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {["Open Incidents", "Open NCRs", "Overdue Actions", "Expiring Licences / Certs"].map((title) => (
                <div key={title} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <p className="text-[10px] font-bold text-slate-800">{title}</p>
                  <div className="mt-3 h-2 w-3/4 rounded-full bg-emerald-100" />
                  <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">
        UI preview placeholder — replace with a final ConstructIQ screenshot
      </p>
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-8 text-center">
      <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm ring-1 ring-blue-100">
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 5h16v14H4V5Zm0 10 4-4 3 3 2-2 7 7M15.5 9h.01" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p className="font-bold text-slate-800">{label}</p>
      <p className="mt-2 max-w-sm text-sm text-slate-500">
        Add a polished product screenshot here when it is ready.
      </p>
    </div>
  );
}

export default function ConstructIQPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar currentHref="/construct-iq" />

      <section className="relative bg-gradient-to-b from-blue-100 via-blue-50 to-white px-6 py-16 md:px-24 md:py-28">
        <div className="absolute -right-32 -top-40 h-[540px] w-[540px] rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl" />
        <div className="container relative mx-auto grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold text-blue-800 shadow-sm backdrop-blur">
              Integrated Management System
            </div>
            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
              Compliance clarity for every project.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold text-blue-800">
              ISO 9001 · ISO 45001 · ISO 14001
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              ConstructIQ brings quality, safety and environmental management
              into one connected platform—so your team can see what matters,
              act sooner and keep better evidence.
            </p>
            <div className="mt-8">
              <PortalButtons />
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              {["One integrated workspace", "Project-ready workflows", "Clear action tracking"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-6 md:px-24">
        <div className="container mx-auto flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm font-semibold text-slate-600 md:text-left">
            Built to support integrated quality, safety and environmental management.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["ISO 9001", "ISO 45001", "ISO 14001"].map((standard) => (
              <span key={standard} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-24 md:py-28">
        <div className="container mx-auto">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">One integrated platform</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Three standards. One source of truth.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Replace scattered records and disconnected processes with consistent workflows your teams can use across the organisation.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featureGroups.map((group) => (
              <article key={group.standard} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${group.accent}`}>
                  <FeatureIcon name={group.icon} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-700">{group.standard}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">{group.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{group.description}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs text-blue-700">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white md:px-24 md:py-28">
        <div className="container mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-300">At-a-glance control</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Know what needs attention before it becomes a problem.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                A focused dashboard surfaces the operational signals that matter—without forcing managers to search across spreadsheets, inboxes and separate systems.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Active projects", "Open incidents", "Open NCRs", "Overdue actions", "Scheduled audits", "Expiring licences", "Active objectives", "Documents under review"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <PortalButtons compact />
              </div>
            </div>
            <ImagePlaceholder label="Insert full dashboard overview screenshot" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-24 md:py-28">
        <div className="container mx-auto">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ImagePlaceholder label="Insert navigation or project workflow screenshot" />
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Platform capabilities</p>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                More than a dashboard.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                ConstructIQ connects operational records with the management controls that keep projects moving and organisations audit-ready.
              </p>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 text-blue-700"><FeatureIcon name={feature.icon} /></div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-6 py-20 md:px-24 md:py-28">
        <div className="container mx-auto">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">How it works</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              From setup to continuous improvement.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <article key={step.number} className="relative rounded-3xl border border-blue-100 bg-white p-7 shadow-sm">
                <span className="text-5xl font-black text-blue-100">{step.number}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 md:px-24 md:py-28">
        <div className="container mx-auto">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Pricing</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Plans that fit the way you work.</h2>
            <p className="mt-5 text-lg text-slate-600">
              Pricing is being finalised. These plan names and inclusions are placeholders and can be updated when packaging is confirmed.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {[
              ["Essential", "Pricing coming soon", ["Core IMS workflows", "Project and action tracking", "Document management", "Standard support"]],
              ["Professional", "Pricing coming soon", ["Everything in Essential", "Expanded audit workflows", "Advanced reporting", "Priority support"]],
              ["Enterprise", "Contact us", ["Everything in Professional", "Organisation-wide rollout", "Tailored onboarding", "Dedicated support"]],
            ].map(([name, price, features], index) => (
              <article key={name as string} className={`relative rounded-3xl border p-8 ${index === 1 ? "border-blue-600 bg-slate-950 text-white shadow-2xl shadow-blue-900/20" : "border-slate-200 bg-white text-slate-900 shadow-sm"}`}>
                {index === 1 && <span className="absolute -top-3 left-8 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Popular placeholder</span>}
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className={`mt-3 text-lg font-semibold ${index === 1 ? "text-blue-300" : "text-blue-700"}`}>{price}</p>
                <ul className={`mt-8 space-y-4 border-t pt-7 ${index === 1 ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-600"}`}>
                  {(features as string[]).map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm"><span className="font-bold text-blue-500">✓</span>{feature}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <PortalButtons compact />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConstructIQFAQ />

      <section className="relative overflow-hidden bg-blue-700 px-6 py-20 text-white md:px-24 md:py-24">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="container relative mx-auto flex flex-col items-center justify-between gap-9 text-center lg:flex-row lg:text-left">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-200">Ready to explore?</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Bring your management systems together.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">
              Access the customer workspace or continue to the separate administration portal.
            </p>
          </div>
          <PortalButtons />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
