import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/colors";
import logo from "../assets/logo (1).svg";

export default function Footer() {
  const year = new Date().getFullYear();

  // Newsletter state (JS-safe, no generics)
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch(
        "https://3e0e5d7f.sibforms.com/serve/MUIFAFLYvzE4sqKfzfe1mxXtMmNFRbbaMVYdXjq1nEoUYyNbH9_fhfeGmli89MkoFqH6HSWl-8SuDoOATVdNVioIgdL9-xKk2lzOpHiXT6FqTgy7j_HPCUwZTHbqAO9b7OkhVE3TpI-Yjshbbr4RAQ30qoJjaBFLC_LDM9kWJHpiuPVJY8EK1s-Lwmv-8LxOQSVtOzy1176QXSlE5Q==",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) throw new Error("Subscription failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      {/* ================= NEWSLETTER ================= */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(135deg, ${COLORS.brandGreen}, ${COLORS.techBlueGray})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-white">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
              Field Intelligence. Delivered.
            </h3>
            <p className="text-sm md:text-base opacity-90 max-w-xl">
              Get curated updates on crop surveys, PMFBY execution, land mapping,
              and large-scale agricultural field operations.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                className="w-full px-5 py-4 rounded-xl text-sm focus:outline-none"
                style={{
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.borderLight}`,
                }}
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="px-7 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition"
                style={{
                  backgroundColor: COLORS.accentPrimary,
                  color: COLORS.textPrimary,
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Subscribing..." : "Subscribe"}
                {!loading && <ArrowRight size={16} />}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-200">
                ✔ You’re subscribed successfully.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-200">
                ✖ Please enter a valid email or try again.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <section
        className="py-16"
        style={{ backgroundColor: COLORS.earthBrownSoft }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <img src={logo} alt="Aapurti Agribusiness System" className="h-12 mb-4" />
            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              Aapurti Agribusiness System Pvt. Ltd. supports institutions in
              executing agricultural programs through disciplined field
              operations and reliable, audit-ready data delivery.
            </p>
          </div>

          {/* COMPANY */}
          <FooterColumn title="Company">
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>

          {/* EXPERTISE */}
          <FooterColumn title="Expertise">
            <span>Crop Surveys</span>
            <span>PMFBY Operations</span>
            <span>Land & Parcel Mapping</span>
            <span>Field Data Management</span>
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="Contact">
            <address className="not-italic space-y-3">
              <ContactRow
                icon={<MapPin size={16} />}
                text="Gwalior, Madhya Pradesh, India"
              />
              <ContactRow icon={<Phone size={16} />} text="+91 00000 00000" />
              <ContactRow
                icon={<Mail size={16} />}
                text="services@aapurti.in"
              />
            </address>

            <div className="flex gap-4 mt-4">
              <Social
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/company/aapurti-agribusiness-system-pvt-ltd/"
                label="Aapurti Agribusiness on LinkedIn"
              />
              <Social
                icon={<Facebook size={18} />}
                href="https://www.facebook.com/p/Aapurti-Agribusiness-System-pvt-ltd-100063943726259/"
                label="Aapurti Agribusiness on Facebook"
              />
            </div>
          </FooterColumn>
        </div>
      </section>

      {/* ================= BOTTOM BAR ================= */}
      <section
        className="py-4"
        style={{ backgroundColor: COLORS.surface }}
      >
        <div
          className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs"
          style={{ color: COLORS.textMuted }}
        >
          <span>© {year} Aapurti Agribusiness System Pvt. Ltd.</span>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span style={{ color: COLORS.earthBrown }}>
              ISO 9001:2015 Certified
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

const FooterColumn = ({ title, children }) => (
  <div>
    <h4
      className="text-sm font-bold mb-4 uppercase tracking-wide"
      style={{ color: COLORS.brandGreen }}
    >
      {title}
    </h4>
    <div
      className="space-y-3 text-sm"
      style={{ color: COLORS.textSecondary }}
    >
      {children}
    </div>
  </div>
);

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:underline transition"
    style={{ color: COLORS.textSecondary }}
  >
    {children}
  </Link>
);

const ContactRow = ({ icon, text }) => (
  <div className="flex gap-3 items-start">
    <span style={{ color: COLORS.brandGreen }}>{icon}</span>
    <span>{text}</span>
  </div>
);

const Social = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-lg transition hover:opacity-80"
    style={{
      backgroundColor: COLORS.white,
      color: COLORS.brandGreen,
      border: `1px solid ${COLORS.borderLight}`,
    }}
  >
    {icon}
  </a>
);
