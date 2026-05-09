import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Leaf,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/colors";
import logo from "../assets/logo (1).svg";

export default function Footer() {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault(); // SEO & standard form practice
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
    <footer className="bg-stone-50 pt-8 pb-4 border-t border-stone-200 mt-20 relative">
      
      {/* ================= FLOATING NEWSLETTER CARD ================= */}
      {/* This completely breaks the old layout and gives a premium, modern feel */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative -top-24">
        <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="text-green-600" size={24} />
              <h3 className="text-2xl font-bold text-stone-800">Field Insights</h3>
            </div>
            <p className="text-stone-500 text-sm md:text-base leading-relaxed">
              Join our network. Get the latest updates on crop surveys, land mapping, and PMFBY execution straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="md:w-1/2 w-full">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                aria-label="Email address for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                className="flex-1 px-5 py-3.5 rounded-xl border border-stone-200 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 text-stone-700 bg-stone-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg disabled:opacity-70 whitespace-nowrap"
                style={{ backgroundColor: COLORS.brandGreen || '#166534' }}
              >
                {loading ? "Joining..." : "Subscribe"}
              </button>
            </div>
            {/* Semantic Feedback Messages */}
            <div className="h-5 mt-2 ml-1">
              {status === "success" && (
                <span className="flex items-center gap-1 text-sm text-green-700 font-medium">
                  <CheckCircle2 size={16} /> Subscribed successfully!
                </span>
              )}
              {status === "error" && (
                <span className="flex items-center gap-1 text-sm text-red-600 font-medium">
                  <AlertCircle size={16} /> Please enter a valid email.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:pr-6">
            <Link to="/" aria-label="Aapurti Homepage">
              <img src={logo} alt="Aapurti Agribusiness System Logo" className="h-14 mb-6" />
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Empowering institutions through disciplined agricultural field operations, precise land mapping, and reliable data delivery.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} label="Facebook" />
            </div>
          </div>

          {/* Column 2: Navigation (SEO Optimized with <nav> and <ul>) */}
          <nav aria-label="Company Navigation">
            <h4 className="text-stone-900 font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <FooterNavLink to="/about">About Us</FooterNavLink>
              <FooterNavLink to="/services">Our Services</FooterNavLink>
              <FooterNavLink to="/careers">Careers</FooterNavLink>
              <FooterNavLink to="/contact">Contact</FooterNavLink>
            </ul>
          </nav>

          {/* Column 3: Expertise */}
          <nav aria-label="Expertise Navigation">
            <h4 className="text-stone-900 font-bold mb-6 uppercase tracking-wider text-sm">Expertise</h4>
            <ul className="space-y-4">
              <FooterListItem>Crop Surveys</FooterListItem>
              <FooterListItem>PMFBY Operations</FooterListItem>
              <FooterListItem>Land & Parcel Mapping</FooterListItem>
              <FooterListItem>Field Data Management</FooterListItem>
            </ul>
          </nav>

          {/* Column 4: Contact (SEO Optimized with <address>) */}
          <div>
            <h4 className="text-stone-900 font-bold mb-6 uppercase tracking-wider text-sm">Reach Out</h4>
            <address className="not-italic space-y-4 text-stone-600 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-700 shrink-0 mt-0.5" />
                <span>Gwalior, Madhya Pradesh<br/>India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-700 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-green-700 transition">+91 00000 00000</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-700 shrink-0" />
                <a href="mailto:services@aapurti.in" className="hover:text-green-700 transition">services@aapurti.in</a>
              </div>
            </address>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-500 text-sm text-center md:text-left">
            © {year} Aapurti Agribusiness System Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <Link to="/privacy" className="hover:text-stone-900 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-900 transition">Terms of Service</Link>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 rounded-full text-stone-700 font-semibold text-xs border border-stone-200">
              <CheckCircle2 size={14} className="text-green-600"/> ISO 9001:2015
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB COMPONENTS ================= */

const FooterNavLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-stone-600 hover:text-green-700 hover:translate-x-1 transition-all duration-300 inline-block text-sm">
      {children}
    </Link>
  </li>
);

const FooterListItem = ({ children }) => (
  <li className="text-stone-600 flex items-center gap-2 text-sm">
    <div className="w-1.5 h-1.5 rounded-full bg-green-200"></div>
    {children}
  </li>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-stone-500 border border-stone-200 shadow-sm hover:border-green-600 hover:text-green-700 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);