import React from "react";
import { COLORS, THEME } from "../styles/colors";

const FEATURES = [
    {
        title: "Insurance-First DNA",
        description:
            "We are purpose-built for crop insurance operations. Every process, technology, and team member is aligned with insurer requirements and PMFBY compliance standards—ensuring seamless integration with your underwriting workflow.",
    },
    {
        title: "Deep Crop Insurance Expertise",
        description:
            "With 7+ years of dedicated PMFBY experience and operations across 9 states, our team brings unparalleled domain knowledge—from land record verification to CCE methodology and claim assessment protocols.",
    },
    {
        title: "End-to-End Outsourced Services",
        description:
            "From office setup and manpower deployment to field execution, QC operations, and grievance management—we handle the complete operational lifecycle so you can focus on strategic decisions.",
    },
    {
        title: "Qualified & Scalable Manpower",
        description:
            "Our trained workforce of 480+ resources operates through a hybrid delivery model with regional language proficiency. Rapid mobilization capability ensures operational readiness within notice periods—scales up or down based on program requirements.",
    },
    {
        title: "Quality at Scale",
        description:
            "Proven execution capability with 1.44 lakh+ CCEs co-witnessed, 3.86 lakh+ surveys completed, and 1.37 crore+ applications audited—delivering consistent accuracy across high-volume operations.",
    },
    {
        title: "Trusted Execution Partner",
        description:
            "ISO/IEC 27001:2013 certified with robust information security infrastructure, dedicated project VLANs, multi-factor authentication, and strict compliance with DPDP Act 2023—your data is secure and operations are audit-ready.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            style={{ backgroundColor: COLORS.background }}
            className="py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP: HEADER & POSITIONING */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className="inline-block mb-4 rounded-full px-5 py-1.5 text-sm font-semibold tracking-wide uppercase"
                        style={{
                            backgroundColor: COLORS.brandGreenSoft,
                            color: COLORS.brandGreen,
                        }}
                    >
                        Why Choose Us
                    </span>

                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                        style={{ color: THEME.heading }}
                    >
                        The Aapurti Advantage
                    </h2>

                    <p
                        className="text-lg md:text-xl leading-relaxed"
                        style={{ color: THEME.body }}
                    >
                        Your trusted execution partner for agricultural insurance programs
                    </p>
                </div>

                {/* BOTTOM: FEATURE GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
                            style={{
                                backgroundColor: THEME.card,
                                border: `1px solid ${THEME.border}`,
                            }}
                        >
                            {/* Top Accent Line */}
                            <div
                                className="absolute top-0 left-0 h-1.5 w-full rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: COLORS.earthBrown }}
                            />

                            <h3
                                className="text-xl font-bold mb-4 mt-2"
                                style={{ color: THEME.heading }}
                            >
                                {item.title}
                            </h3>

                            <p
                                className="text-base leading-relaxed"
                                style={{ color: THEME.body }}
                            >
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}