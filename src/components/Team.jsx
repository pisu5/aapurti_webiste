import React from "react";
import {
    ClipboardCheck,
    Users,
    Tractor,
    Handshake,
    Sprout,
    ShieldCheck,
    MapPin,
    Languages,
    Quote
} from "lucide-react";
import team from "../assets/team.jpg";
import rahul from "../assets/rahul.jpg";
import placeholder from "../assets/placeholder.png";

export default function FeaturesPageComponents() {
    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <SustainableInsuranceBanner />
            <SkilledManpowerSection />
            <LeadershipSection />
        </div>
    );
}

/* ==========================================================================
   1. SUSTAINABLE INSURANCE BANNER 
   ========================================================================== */
export function SustainableInsuranceBanner() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1586771107445-d3af28ba525e?q=80&w=2000&auto=format&fit=crop"
                    alt="Digital Agriculture Tablet"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-8 ring-1 ring-emerald-400/50">
                    <Quote className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-6">
                    Facilitating Sustainable Insurance
                </h2>
                <p className="text-2xl md:text-4xl font-medium text-white leading-relaxed md:leading-tight">
                    “Aapurti’s field mobility platform empowers survey teams to record geo-tagged crop information in real time and securely integrate it with insurer ecosystems through API-based workflows, enabling faster assessments and a more efficient claims journey.”
                </p>
            </div>
        </section>
    );
}

/* ==========================================================================
   2. SKILLED MANPOWER SECTION
   ========================================================================== */
export function SkilledManpowerSection() {
    const points = [
        {
            icon: ClipboardCheck,
            title: "CCE-Trained Field Teams",
            desc: "Manpower trained in Crop Cutting Experiment workflows, co-witness protocols, plot-level documentation, and field evidence capture.",
        },
        {
            icon: Users,
            title: "Field Dynamics Intelligence",
            desc: "Operational teams with strong understanding of on-ground realities, administrative structures, village-level coordination, and agriculture program execution dynamics.",
        },
        {
            icon: Tractor,
            title: "Specialized Crop Survey",
            desc: "Resources experienced in localized calamity surveys, post-harvest assessments, crop condition reporting, and insurer-oriented field documentation.",
        },
        {
            icon: Handshake,
            title: "Liaison & Coordination",
            desc: "Field leadership with established capability in stakeholder coordination, local engagement, and smooth operational follow-through across districts and blocks.",
        },
        {
            icon: Sprout,
            title: "Crop Health Monitoring",
            desc: "Teams capable of structured crop observation, evidence capture, reporting discipline, and field-based monitoring support for seasonal agriculture programs.",
        },
        {
            icon: ShieldCheck,
            title: "QC and Verification",
            desc: "Dedicated manpower for application scrutiny, record validation, document checks, and quality-controlled verification workflows.",
        },
        {
            icon: MapPin,
            title: "Pan-India Mobilization",
            desc: "Operational readiness with scalable deployment capacity and regional presence to support insurer assignments across multiple states.",
        },
        {
            icon: Languages,
            title: "Vernacular Proficiency",
            desc: "Field and QC teams with regional language capability to improve local coordination, document interpretation, and interaction quality in diverse markets.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Area */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Skilled <span className="text-emerald-600">Manpower</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Aapurti’s field and operations strength is built on trained, insurer-aligned manpower capable of delivering at scale across agricultural programs. Our teams are equipped with domain understanding, field discipline, and practical knowledge of crop insurance workflows to ensure dependable execution in diverse geographies.
                        </p>
                    </div>
                    <div className="h-72 rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={team}
                            alt="Agricultural Field Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* 8-Point Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {points.map((point, idx) => (
                        <div
                            key={idx}
                            className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 text-emerald-600">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{point.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ==========================================================================
   3. VISIONARY LEADERSHIP SECTION
   ========================================================================== */
export function LeadershipSection() {
    const leaders = [
        {
            name: "Mr. Chandrashekhar Kaurav",
            role: "CEO & Managing Director",
            bio: "Mr. Chandrashekhar Kaurav provides the strategic leadership that shapes Aapurti’s pursuit of operational excellence, process discipline, and consistently high-quality delivery. With a strong emphasis on innovation and technology-led execution, he drives initiatives that enhance service quality, strengthen governance, and optimize cost efficiency for clients.",
            image: placeholder // Placeholder portrait
        },
        {
            name: "Mr. Rahul Kaurav",
            role: "Senior Vice President",
            bio: "Mr. Rahul Kaurav leads with a sharp focus on execution quality, field realities, and program responsiveness. He plays a critical role in overseeing field operations, mentoring teams on-ground, and ensuring agility, coordination, and service excellence across deployments. His strong command over field-level liaison and operational dynamics contributes significantly to Aapurti’s reliability and performance in complex agricultural programs.",
            image: rahul // Placeholder portrait
        }
    ];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Leadership Vision Statement */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        Visionary <span className="text-emerald-600">Leadership</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Aapurti’s leadership combines strategic clarity, field-grounded execution, and a strong commitment to quality-led innovation. The organization is guided by leaders who understand both the operational realities of agriculture programs and the importance of disciplined, technology-enabled delivery for insurers and institutional clients.
                    </p>
                </div>

                {/* Leadership Profiles */}
                <div className="grid lg:grid-cols-2 gap-10">
                    {leaders.map((leader, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-8 items-start">

                            {/* Leader Image */}
                            <div className="w-full sm:w-40 h-48 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Leader Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                                <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mt-1 mb-4">
                                    {leader.role}
                                </p>
                                <div className="w-12 h-1 bg-emerald-100 rounded-full mb-4"></div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {leader.bio}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}