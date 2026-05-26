import React from "react";
import {
  Map,
  ShieldAlert,
  Layers,
  LineChart,
  ArrowRight
} from "lucide-react";

export default function FieldIntelligenceSection() {
  const services = [
    {
      icon: Map,
      title: "High-Resolution Surveying",
      desc: "Satellite and drone-based field mapping with precise spatial accuracy—enabling comprehensive land coverage and crop health visualization at scale.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: ShieldAlert,
      title: "Predictive Risk Alerts",
      desc: "AI-powered early detection of crop stress, pest infestation, and weather vulnerability—empowering proactive risk mitigation for insurers and farmers alike.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: Layers,
      title: "GIS-Ready Data Layers",
      desc: "Seamless integration with GIS platforms and spatial workflows—delivering georeferenced data ready for advanced analytics and decision-making.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: LineChart,
      title: "Operational Forecasting",
      desc: "Yield projection, resource planning, and execution forecasting for large-scale agricultural programs—enabling data-driven program management and resource optimization.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT: CONTENT & IMAGE FRAME */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Technology Platform
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Precision Field Intelligence <br className="hidden md:block" />
                <span className="text-emerald-600">for Agriculture Programs</span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We combine geospatial intelligence, structured field workflows, and analytics to deliver reliable insights for large-scale agricultural execution.
              </p>

              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30">
                Explore the Platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* NEW IMAGE FRAME */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 aspect-[4/3] group">
              {/* Replace src with your actual platform/agriculture image */}
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop"
                alt="Agricultural Drone Mapping"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl text-white">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Live Satellite Feed</p>
                  </div>
                  <p className="font-medium text-sm">Monitoring 12,500+ hectares with 99.8% precision accuracy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: SERVICE CARDS GRID */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENT ================= */

const ServiceCard = ({ service, index }) => {
  // Staggering the cards slightly for a dynamic grid look
  const translateY = index % 2 === 1 ? "sm:translate-y-8" : "";

  return (
    <div
      className={`group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col h-full ${translateY}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.bg}`}>
        <service.icon className={`w-7 h-7 ${service.color}`} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
        {service.title}
      </h3>

      <p className="text-slate-600 leading-relaxed text-sm">
        {service.desc}
      </p>
    </div>
  );
};