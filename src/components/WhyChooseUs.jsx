// src/components/WhyChooseUs.tsx
import React from "react";
import { COLORS,THEME } from "../styles/colors";

const FEATURES = [
    {
        title: "Insurance-First DNA",
        description:
            "We come from the insurance industry and deeply understand underwriting logic, claim sensitivity, compliance, and insurer workflows — beyond surface-level field execution.",
    },
    {
        title: "Deep Crop Insurance Expertise",
        description:
            "Involved since the evolution of crop insurance in India, with hands-on experience across schemes, crops, seasons, and large-scale risk assessment programs.",
    },
    {
        title: "End-to-End Outsourced Services",
        description:
            "Complete outsourced services for Agriculture Insurance — including surveys, validations, field operations, monitoring, and structured MIS reporting.",
    },
    {
        title: "Qualified & Scalable Manpower",
        description:
            "Professionally trained and regionally deployed manpower capable of rapid scale across geographies while maintaining governance and consistency.",
    },
    {
        title: "Quality at Scale",
        description:
            "Multi-layered quality checks, audits, and verification frameworks ensure precision, reliability, and timeliness even at high volumes.",
    },
    {
        title: "Trusted Execution Partner",
        description:
            "We work as a long-term execution partner aligned with insurer risk frameworks, transparency standards, and performance outcomes.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            style={{ backgroundColor: COLORS.background }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid gap-16 lg:grid-cols-12 items-start">
                    {/* LEFT: POSITIONING */}
                    <div className="lg:col-span-4">
                        <span
                            className="inline-block mb-6 rounded-full px-4 py-1 text-sm font-semibold"
                            style={{
                                backgroundColor: COLORS.brandGreenSoft,
                                color: COLORS.brandGreen,
                            }}
                        >
                            Why Choose Us
                        </span>

                        <h2
                            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                            style={{ color: THEME.heading }}
                        >
                            Execution Excellence Built for
                            <br className="hidden md:block" />
                            Agriculture Insurance
                        </h2>

                        <p
                            className="leading-relaxed mb-10"
                            style={{ color: THEME.body }}
                        >
                            We combine deep insurance-domain intelligence with disciplined
                            agricultural field execution — helping insurers manage risk,
                            scale operations, and deliver outcomes with confidence.
                        </p>

                        <button
                            className="rounded-xl px-8 py-4 text-sm font-semibold transition"
                            style={{
                                backgroundColor: THEME.cta,
                                color: COLORS.white,
                            }}
                            onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor =
                                THEME.ctaHover)
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.backgroundColor = THEME.cta)
                            }
                        >
                            Partner With Us
                        </button>
                    </div>

                    {/* RIGHT: FEATURE GRID */}
                    <div className="lg:col-span-8 grid gap-8 sm:grid-cols-2">
                        {FEATURES.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl p-7 transition-all hover:-translate-y-1"
                                style={{
                                    backgroundColor: THEME.card,
                                    border: `1px solid ${THEME.border}`,
                                }}
                            >
                                {/* Top Accent */}
                                <div
                                    className="absolute top-0 left-0 h-1 w-full rounded-t-2xl"
                                    style={{ backgroundColor: COLORS.earthBrown }}
                                />

                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{ color: THEME.heading }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: THEME.body }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
