import { Link } from "react-router-dom";
import {
  MapPinned,
  BarChart3,
  FileCheck,
  Activity,
  ClipboardList
} from "lucide-react";
import { COLORS } from "../styles/colors";

export default function ServicesHome() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Intro ===== */}
        <div className="max-w-3xl mb-20">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: COLORS.neutralDarkGray }}
          >
            Our Service Capabilities
          </h2>

          <p
            className="text-lg opacity-80 leading-relaxed"
            style={{ color: COLORS.neutralDarkGray }}
          >
            We provide end-to-end crop and field execution services focused on
            accuracy, consistency, and disciplined on-ground operations.
            Each service is delivered through defined workflows and trained
            field teams.
          </p>
        </div>

        {/* ===== Services Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <ServiceCard
            icon={<ClipboardList />}
            title="Crop Surveys"
            desc="Structured crop assessment and on-ground survey execution."
            route="/services/crop-surveys"
          />

          <ServiceCard
            icon={<Activity />}
            title="Crop Health Assessment"
            desc="Field-level crop condition monitoring and observations."
            route="/services/crop-health"
          />

          <ServiceCard
            icon={<FileCheck />}
            title="Quality Control (QC)"
            desc="Process-driven verification and review of field data."
            route="/services/pmfby-qc"
          />

          <ServiceCard
            icon={<BarChart3 />}
            title="CCE Operations"
            desc="Execution support for crop cutting and yield estimation."
            route="/services/cce"
          />

          <ServiceCard
            icon={<MapPinned />}
            title="Land & Field Mapping"
            desc="Accurate parcel identification and field-level mapping."
            route="/services/land-mapping"
          />

        </div>

      </div>
    </section>
  );
}

/* ================= Components ================= */

const ServiceCard = ({ icon, title, desc, route }) => (
  <Link
    to={route}
    className="group block p-10 bg-white rounded-3xl border border-gray-100
               hover:shadow-xl transition-all duration-300"
  >
    <div
      className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-green-50"
      style={{ color: COLORS.secondaryGreen }}
    >
      {icon}
    </div>

    <h3
      className="text-xl font-bold mb-3"
      style={{ color: COLORS.neutralDarkGray }}
    >
      {title}
    </h3>

    <p
      className="text-sm leading-relaxed opacity-75"
      style={{ color: COLORS.neutralDarkGray }}
    >
      {desc}
    </p>

    <span
      className="inline-block mt-8 text-xs font-bold uppercase tracking-widest"
      style={{ color: COLORS.secondaryGreen }}
    >
      View Service
    </span>
  </Link>
);
