import {
  Users,
  Target,
  BarChart3,
  FileCheck,
  Award,
} from "lucide-react";
import { COLORS, THEME } from "../styles/colors";

export default function About() {
  return (
    <main style={{ backgroundColor: THEME.background }}>
      {/* =====================
          HERO (EXECUTIVE)
      ===================== */}
      <section className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
              style={{
                backgroundColor: COLORS.brandGreenSoft,
                color: COLORS.brandGreen,
              }}
            >
              About Aapurti Agribusiness
            </span>

            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: THEME.heading }}
            >
              Trusted Agricultural
              <br />
              Field Execution Partner
            </h1>

            <p
              className="text-lg max-w-xl"
              style={{ color: THEME.body }}
            >
              Aapurti Agribusiness System Pvt. Ltd. delivers large-scale
              agricultural programs through disciplined field operations,
              trained manpower, and audit-ready data systems.
            </p>
          </div>

          {/* Visual credibility block */}
          <div
            className="hidden lg:flex lg:col-span-6 rounded-3xl p-10 border"
            style={{
              backgroundColor: COLORS.surfaceMuted,
              borderColor: THEME.border,
            }}
          >
            <div className="grid grid-cols-2 gap-6 w-full">
              <HeroStat value="8+" label="Years of Execution" />
              <HeroStat value="1M+" label="Fields Surveyed" />
              <HeroStat value="12+" label="States Covered" />
              <HeroStat value="500+" label="Active Workforce" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          METRICS BAR
      ===================== */}
      <section
        className="py-16 border-y"
        style={{
          backgroundColor: COLORS.surfaceMuted,
          borderColor: THEME.border,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Metric value="8+" label="Years Experience" />
          <Metric value="1M+" label="Fields Surveyed" />
          <Metric value="12+" label="States Covered" />
          <Metric value="500+" label="Field Workforce" />
        </div>
      </section>

      {/* =====================
          RECOGNITION
      ===================== */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: COLORS.brandGreenSoft }}
            >
              <Award size={18} color={COLORS.brandGreen} />
            </div>
            <h2
              className="text-xl font-semibold"
              style={{ color: THEME.heading }}
            >
              Industry Recognition
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <MediaTag label="Outlook Magazine" />
            <MediaTag label="Agri Business Review" />
            <MediaTag label="Institutional Case Studies" />
          </div>
        </div>
      </section>

      {/* =====================
          CORE STRENGTHS
      ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl font-bold mb-14 text-center"
            style={{ color: THEME.heading }}
          >
            Core Strengths
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <StrengthCard
              icon={<Target size={22} />}
              title="Execution at Scale"
              desc="Multi-state program delivery with standardized processes and controls."
            />
            <StrengthCard
              icon={<Users size={22} />}
              title="Trained Workforce"
              desc="Field teams trained on SOPs, compliance, and accuracy benchmarks."
            />
            <StrengthCard
              icon={<BarChart3 size={22} />}
              title="Data Integrity"
              desc="Structured, verifiable datasets suitable for audits and institutions."
            />
            <StrengthCard
              icon={<FileCheck size={22} />}
              title="Compliance Ready"
              desc="End-to-end traceability aligned with verification and regulatory norms."
            />
          </div>
        </div>
      </section>

      {/* =====================
          CAPABILITIES
      ===================== */}
      <section
        className="py-24"
        style={{ backgroundColor: COLORS.earthBrownSoft }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: COLORS.earthBrown }}
            >
              Core Capabilities
            </h2>

            <p
              className="max-w-md"
              style={{ color: THEME.body }}
            >
              Built to support government schemes, agri-finance programs,
              and enterprise-scale agricultural initiatives.
            </p>
          </div>

          <ul className="md:col-span-7 space-y-5">
            {[
              "Crop field surveys & verification",
              "Land parcel mapping & identification",
              "Field data consolidation & validation",
              "Secure reporting & institutional handover",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-1 font-bold"
                  style={{ color: COLORS.accentPrimary }}
                >
                  ✓
                </span>
                <span style={{ color: THEME.body }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

/* =====================
   SUB COMPONENTS
===================== */

const Metric = ({ value, label }) => (
  <div>
    <div
      className="text-4xl font-bold mb-2"
      style={{ color: COLORS.brandGreen }}
    >
      {value}
    </div>
    <p style={{ color: THEME.mutedText }}>{label}</p>
  </div>
);

const HeroStat = ({ value, label }) => (
  <div>
    <div
      className="text-3xl font-bold"
      style={{ color: COLORS.brandGreen }}
    >
      {value}
    </div>
    <p className="text-sm" style={{ color: THEME.mutedText }}>
      {label}
    </p>
  </div>
);

const MediaTag = ({ label }) => (
  <span
    className="px-5 py-2 rounded-full text-sm font-medium"
    style={{
      backgroundColor: COLORS.brandGreenSoft,
      color: COLORS.brandGreen,
      border: `1px solid ${COLORS.borderLight}`,
    }}
  >
    {label}
  </span>
);

const StrengthCard = ({ icon, title, desc }) => (
  <div
    className="rounded-2xl p-8 border h-full"
    style={{
      backgroundColor: THEME.card,
      borderColor: THEME.border,
    }}
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
      style={{
        backgroundColor: COLORS.brandGreenSoft,
        color: COLORS.brandGreen,
      }}
    >
      {icon}
    </div>

    <h3
      className="font-semibold mb-3"
      style={{ color: THEME.heading }}
    >
      {title}
    </h3>

    <p style={{ color: THEME.body }}>{desc}</p>
  </div>
);
