import React from "react";
import {
  Radar,
  Globe,
  Target,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

import { COLORS } from "../styles/colors";

export default function FieldIntelligenceSection() {
  const features = [
    {
      icon: Radar,
      title: "High-Resolution Surveying",
      desc: "Satellite and drone-based field mapping with precise spatial accuracy.",
    },
    {
      icon: Target,
      title: "Predictive Risk Alerts",
      desc: "Early detection of crop stress and risk indicators using AI models.",
    },
    {
      icon: Globe,
      title: "GIS-Ready Data Layers",
      desc: "Seamless integration with GIS platforms and spatial workflows.",
    },
    {
      icon: TrendingUp,
      title: "Operational Forecasting",
      desc: "Yield, resource, and execution forecasting for large programs.",
    },
  ];

  return (
    <section
      style={{ backgroundColor: COLORS.surface }}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <span
            className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase"
            style={{ color: COLORS.brandGreen }}
          >
            Technology Platform
          </span>

          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: COLORS.textPrimary }}
          >
            Precision Field Intelligence
            <br className="hidden sm:block" />
            for Agriculture Programs
          </h2>

          <p
            className="text-lg max-w-xl mb-10"
            style={{ color: COLORS.textSecondary }}
          >
            We combine geospatial intelligence, structured field workflows,
            and analytics to deliver reliable insights for large-scale
            agricultural execution.
          </p>

          {/* FEATURE LIST */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: COLORS.brandGreenSoft }}
                >
                  <f.icon size={18} style={{ color: COLORS.brandGreen }} />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold mb-1"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: COLORS.textMuted }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              className="px-8 py-4 rounded-lg text-sm font-semibold"
              style={{
                backgroundColor: COLORS.accentPrimary,
                color: COLORS.textPrimary,
              }}
            >
              Request Platform Demo
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL (DATA PANEL) */}
        <div className="lg:col-span-6">
          <div
            className="rounded-2xl border p-6 h-full"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.borderLight,
            }}
          >
            <h4
              className="text-sm font-semibold mb-6 uppercase tracking-wide"
              style={{ color: COLORS.techBlueGray }}
            >
              Sample Operational Snapshot
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <DataCard
                label="Risk Status"
                value="Low"
                meta="Next scan in 12 hours"
                color={COLORS.success}
                soft={COLORS.successSoft}
              />

              <DataCard
                label="Coverage"
                value="98.6%"
                meta="Verified parcels"
                color={COLORS.info}
                soft={COLORS.infoSoft}
              />

              <DataCard
                label="Alerts"
                value="3 Active"
                meta="Monitoring required"
                color={COLORS.warning}
                soft={COLORS.warningSoft}
              />

              <DataCard
                label="Data Quality"
                value="Audit-Ready"
                meta="Validated datasets"
                color={COLORS.brandGreen}
                soft={COLORS.brandGreenSoft}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

const DataCard = ({ label, value, meta, color, soft }) => (
  <div
    className="p-5 rounded-xl border"
    style={{
      backgroundColor: soft,
      borderColor: color,
    }}
  >
    <p className="text-xs uppercase font-semibold mb-2" style={{ color }}>
      {label}
    </p>
    <h3 className="text-2xl font-bold mb-1" style={{ color: COLORS.textPrimary }}>
      {value}
    </h3>
    <p className="text-xs" style={{ color: COLORS.textSecondary }}>
      {meta}
    </p>
  </div>
);
