import React from "react";
import {
  Users,
  Target,
  BarChart3,
  FileCheck,
  ShieldCheck,
  Sprout,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

// Mocking the color theme based on the previous file's structure
const COLORS = {
  brandGreen: "#166534", // text-green-800
  brandGreenSoft: "#dcfce7", // bg-green-100
  surfaceMuted: "#f8fafc", // bg-slate-50
  borderLight: "#e2e8f0",
  earthBrown: "#78350f",
  earthBrownSoft: "#fef3c7",
  accentPrimary: "#f59e0b", // amber-500
};

const THEME = {
  background: "#ffffff",
  heading: "#0f172a", // text-slate-900
  body: "#475569", // text-slate-600
  mutedText: "#64748b", // text-slate-500
  card: "#ffffff",
  border: "#e2e8f0",
};

const HeroStat = ({ value, label }) => (
  <div className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
    <div
      className="text-3xl font-bold mb-1"
      style={{ color: COLORS.brandGreen }}
    >
      {value}
    </div>
    <p className="text-sm font-medium text-center" style={{ color: THEME.mutedText }}>
      {label}
    </p>
  </div>
);

const CapabilityCard = ({ index, title, desc }) => (
  <div
    className="group relative rounded-2xl p-8 border bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    style={{ borderColor: THEME.border }}
  >
    <div className="absolute top-0 right-0 p-6 text-6xl font-black opacity-5 pointer-events-none transition-opacity group-hover:opacity-10" style={{ color: COLORS.brandGreen }}>
      0{index}
    </div>
    <h3
      className="font-bold text-xl mb-3 relative z-10"
      style={{ color: THEME.heading }}
    >
      {title}
    </h3>
    <p className="text-base leading-relaxed relative z-10" style={{ color: THEME.body }}>
      {desc}
    </p>
  </div>
);

export default function About() {
  return (
    <main style={{ backgroundColor: THEME.background }} className="overflow-hidden font-sans">

      {/* =====================
          HERO (EXECUTIVE)
      ===================== */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-green-50 to-transparent -z-10 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-6 z-10">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-8 shadow-sm border"
              style={{
                backgroundColor: COLORS.brandGreenSoft,
                color: COLORS.brandGreen,
                borderColor: 'rgba(22, 101, 52, 0.1)'
              }}
            >
              <Sprout size={16} />
              About Aapurti Agribusiness
            </span>

            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight"
              style={{ color: THEME.heading }}
            >
              Trusted Agricultural <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">
                Field Execution
              </span> Partner
            </h1>

            <p
              className="text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: THEME.body }}
            >
              Aapurti Agribusiness System Pvt. Ltd. delivers large-scale
              agricultural programs through disciplined field operations,
              trained manpower, and audit-ready data systems.
            </p>
          </div>

          { }
          <div className="lg:col-span-6 relative z-10">
            <div
              className="rounded-[2.5rem] p-8 lg:p-12 border shadow-xl relative backdrop-blur-sm"
              style={{
                backgroundColor: 'rgba(248, 250, 252, 0.8)', // surfaceMuted with opacity
                borderColor: THEME.border,
              }}
            >
              {/* Decorative accent */}
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-amber-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6 relative">
                <HeroStat value="8+" label="Years of Execution" />
                <HeroStat value="1M+" label="Fields Surveyed" />
                <HeroStat value="12+" label="States Covered" />
                <HeroStat value="500+" label="Active Workforce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          CORE STRENGTHS & CAPABILITIES (Updated Content)
      ===================== */}
      { }
      <section className="py-24 relative" style={{ backgroundColor: COLORS.surfaceMuted }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl mb-6 shadow-sm" style={{ backgroundColor: 'white' }}>
              <ShieldCheck size={32} style={{ color: COLORS.brandGreen }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
              style={{ color: THEME.heading }}
            >
              Core Strengths & Capabilities
            </h2>
            <p className="text-lg" style={{ color: THEME.body }}>
              Delivering integrated support across the agricultural insurance value chain with precision and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CapabilityCard
              index={1}
              title="Insurance-Led Operating Mindset"
              desc="We understand the operational, compliance, and risk-management requirements of insurers, enabling field execution that aligns with underwriting discipline, claims sensitivity, and audit expectations."
            />
            <CapabilityCard
              index={2}
              title="Specialized Crop Insurance Experience"
              desc="With deep involvement in PMFBY-linked operations across seasons, crops, and geographies, Aapurti brings practical expertise in CCE monitoring, loss assessment surveys, enrolment scrutiny, and field intelligence programs."
            />
            <CapabilityCard
              index={3}
              title="Comprehensive Outsourced Service Delivery"
              desc="From field deployment and survey execution to data validation, quality control, dashboards, and structured reporting, we deliver integrated support across the agricultural insurance value chain."
            />
            <CapabilityCard
              index={4}
              title="Trained and Scalable Workforce"
              desc="Our operational model is powered by qualified, project-ready manpower with regional presence, rapid mobilization capability, and experience in field execution, verification workflows, and insurer-driven SOPs."
            />
            <CapabilityCard
              index={5}
              title="Quality Assurance at Volume"
              desc="Aapurti is built to handle scale without compromising precision, using multi-layer review processes, validation workflows, exception handling, and audit-ready reporting frameworks."
            />
            <CapabilityCard
              index={6}
              title="Reliable Long-Term Execution Partner"
              desc="We work as an accountable delivery partner for insurers and agricultural programs, combining field reliability, governance discipline, transparent communication, and measurable execution outcomes."
            />
          </div>
        </div>
      </section>

      {/* =====================
          CTA SECTION
      ===================== */}
      { }
      <section className="py-24 relative overflow-hidden">
        {/* Background Image / Overlay approach */}
        <div
          className="absolute inset-0 z-0 bg-slate-900"
          style={{ backgroundColor: THEME.heading }}
        >
          {/* Subtle pattern or gradient overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Looking for a dependable execution partner for crop insurance operations?
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
            Connect with our team to discuss survey deployment, CCE monitoring, QC requirements, or end-to-end field support.
          </p>

          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-900/20"
            style={{
              backgroundColor: COLORS.brandGreen,
              color: 'white'
            }}
            onClick={() => console.log("Navigate to Contact")}
          >
            Contact Us
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </main>
  );
}