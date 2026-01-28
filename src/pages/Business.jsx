import React from "react";
import { COLORS } from "../styles/colors";

export default function BusinessPerformanceRedesign() {
  return (
    <section
      className="px-12 py-20"
      style={{ backgroundColor: "#FAFBFA" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ================== HEADER ================== */}
        <div className="mb-20">
          <span
            className="inline-block mb-4 text-sm tracking-widest uppercase"
            style={{ color: COLORS.brandGreen }}
          >
            Operational Track Record
          </span>

          <h1
            className="text-5xl font-semibold leading-tight max-w-4xl"
            style={{ color: COLORS.textPrimary }}
          >
            Delivering Consistent Crop Insurance Performance
            Across Diverse Risk Profiles
          </h1>

          <p
            className="mt-6 text-lg max-w-3xl leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            Our execution history reflects disciplined risk management,
            multi-seasonal coverage, and long-standing partnerships with
            India’s leading general insurers.
          </p>
        </div>

        {/* ================== METRICS ================== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {[
            { label: "Years of Operations", value: "5+" },
            { label: "States Served", value: "2+" },
            { label: "Insurance Partners", value: "3" },
            { label: "District Coverage", value: "10+" },
          ].map((item, i) => (
            <div key={i}>
              <p
                className="text-sm mb-3"
                style={{ color: COLORS.textMuted }}
              >
                {item.label}
              </p>
              <p
                className="text-6xl font-semibold"
                style={{ color: COLORS.brandGreen }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* ================== INSIGHT STRIP ================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-28">
          {[
            {
              title: "Seasonal Depth",
              desc: "Operational experience across both Kharif and Rabi cycles, ensuring year-round readiness.",
            },
            {
              title: "Risk-Controlled Outcomes",
              desc: "Loss ratios managed across low, medium, and high exposure districts.",
            },
            {
              title: "Enterprise Alignment",
              desc: "Trusted by national insurers for multi-year, multi-district programs.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3
                className="text-xl font-medium mb-4"
                style={{ color: COLORS.textPrimary }}
              >
                {item.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: COLORS.textSecondary }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================== TABLE ================== */}
        <div>
          <h2
            className="text-2xl font-medium mb-8"
            style={{ color: COLORS.textPrimary }}
          >
            Business Performance Summary
          </h2>

          <div className="overflow-hidden border"
            style={{ borderColor: COLORS.borderLight }}
          >
            <table className="min-w-full text-sm">
              <thead>
                <tr
                  style={{ borderBottom: `1px solid ${COLORS.borderLight}` }}
                >
                  {[
                    "Period",
                    "Season",
                    "Insurance Partner",
                    "State",
                    "Districts",
                    "Loss Ratio",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left font-medium"
                      style={{ color: COLORS.textMuted }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "2019–20",
                    "Kharif & Rabi",
                    "Future Generali",
                    "Maharashtra",
                    "Osmanabad, Amravati, Nashik",
                    "<10%",
                  ],
                  [
                    "2020–23",
                    "Kharif & Rabi",
                    "Future Generali",
                    "Rajasthan",
                    "Dungarpur",
                    "25–30%",
                  ],
                  [
                    "2021–23",
                    "Kharif & Rabi",
                    "SBI General",
                    "Rajasthan",
                    "Dausa, Rajsamand",
                    "30–35%",
                  ],
                  [
                    "2021",
                    "Kharif",
                    "Bajaj Allianz",
                    "Rajasthan",
                    "Ajmer",
                    "0.5",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 transition"
                    style={{ borderColor: COLORS.borderLight }}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-6 py-4"
                        style={{
                          color:
                            j === row.length - 1
                              ? COLORS.brandGreen
                              : COLORS.textSecondary,
                          fontWeight: j === row.length - 1 ? 500 : 400,
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
