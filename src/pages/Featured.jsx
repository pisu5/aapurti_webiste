import { motion } from "framer-motion";
import {
  ShieldCheck, Satellite, Cpu, CheckCircle2,
  ArrowUpRight, ExternalLink, Quote, Award, Calendar, History, ShieldAlert
} from "lucide-react";

// ASSETS - Using your provided imports
import featureField from "../assets/field_survey.jpg";
import featureAI from "../assets/ai.jpg";
import featureInsurance from "../assets/insurace.jpg";
// Note: Ensure you have a magazine image at this path or update it
import magazineCover from "../assets/outlook.jpg";

export default function FeaturedSection() {
  const cardHover = "hover:shadow-2xl hover:-translate-y-2 transition-all duration-500";

  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== SECTION 1: GLOBAL RECOGNITION (Industry Outlook) ===== */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-slate-100"
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Magazine Visual */}
              <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-10 bg-green-100 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src={magazineCover}
                  alt="Industry Outlook Magazine Sept 2025"
                  className="relative rounded-2xl shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 border-4 border-white"
                />
                <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <Award className="text-green-400 mb-2" size={32} />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Special Issue</p>
                  <p className="text-lg font-bold">Top 10 Agriculture Consulting</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md uppercase">Media Spotlight</span>
                  <span className="text-slate-400 flex items-center gap-1 text-sm"><Calendar size={14} /> September 2025</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Aapurti Agribusiness: Facilitating Sustainable Insurance Solutions for Farmers
                </h2>

                <div className="relative mb-8 bg-slate-50 p-8 rounded-3xl border-l-4 border-green-500">
                  <Quote className="absolute top-4 right-4 text-slate-200 w-12 h-12" />
                  <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed relative z-10">
                    "Our mission is to empower farmers by bridging rural realities with cutting-edge technology, ensuring fair and swift insurance solutions."
                  </p>
                  <div className="mt-6">
                    <p className="font-black text-slate-900 text-lg">Rahul Kaurav</p>
                    <p className="text-sm text-green-600 font-bold uppercase tracking-tighter">Founder, Aapurti Agribusiness System</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {['ISO/IEC 27001:2013 Certified', 'PMFBY & IRDAI Norms', 'AI-Driven Assessment'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white text-slate-700 text-xs font-bold rounded-full border border-slate-200 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://www.theindustryoutlook.com/services-and-consulting/vendor/aapurti-agribusiness-system-facilitating-sustainable-insurance-solutions-delivery-for-farmers-cid-13117.html#google_vignette"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all group"
                >
                  Read Industry Outlook Article <ExternalLink size={18} className="group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== SECTION 2: THE JOURNEY (From the Article) ===== */}
        <div className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-green-600 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
              <History size={20} /> Our Evolution
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">A Journey of Innovation & Impact</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 2016 by a determined 21-year-old entrepreneur, the journey began as <b>R Agri Research</b>. By March 2019, the vision evolved into <b>Aapurti Agribusiness System</b>, marking our transition into direct collaborations with leading crop insurance providers and government initiatives.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-3xl font-black text-green-600">2016</p>
                <p className="text-sm font-bold text-slate-500">Foundation Laid</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-3xl font-black text-green-600">2019</p>
                <p className="text-sm font-bold text-slate-500">Official Incorporation</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={featureField} alt="Field Operations" className="rounded-[3rem] shadow-2xl h-[400px] w-full object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-8 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm font-medium opacity-80">Operational Excellence</p>
              <p className="text-xl font-bold">Bridging Rural Realities with Tech</p>
            </div>
          </div>
        </div>

        {/* ===== SECTION 3: CORE CAPABILITIES ===== */}
        <div className="space-y-32">

          {/* AI & Satellite */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7">
              <img src={featureAI} alt="AI Dashboard" className="rounded-[3rem] shadow-2xl border-8 border-white" />
            </motion.div>
            <div className="lg:col-span-5 space-y-6">
              <Satellite className="w-16 h-16 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">AI & Satellite Driven Yield Forecasting</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                By harnessing the power of satellite imagery and drone technology, we deliver precise insights into crop health and potential losses. These insights are cross-verified with credible government data to reinforce transparency.
              </p>
              <ul className="space-y-3">
                {['Real-time Mapping', 'Standardized Protocols', 'Damage Assessment'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle2 size={20} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Insurance Enablement */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <ShieldAlert className="w-16 h-16 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">Facilitating Sustainable Insurance</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our user-friendly mobile app enables field staff to collect geotagged crop data in real time, which is seamlessly transmitted via APIs to insurers, accelerating the entire claim lifecycle.
              </p>
              <div className="p-6 bg-slate-900 rounded-2xl text-white">
                <p className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2">Certification</p>
                <p className="text-lg font-medium">ISO/IEC 27001:2013 Information Security Management System Certified</p>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 order-1 lg:order-2">
              <img src={featureInsurance} alt="Insurance Platform" className="rounded-[3rem] shadow-2xl border-8 border-white" />
            </motion.div>
          </div>

        </div>

        {/* ===== SECTION 4: THE FUTURE (Bento Grid) ===== */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Future of Agri-Insurance</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Innovating with Blockchain and IoT to build a sustainable rural ecosystem.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
              <Cpu className="text-green-600 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Blockchain Smart Contracts</h4>
              <p className="text-slate-600">Leading the way for parametric insurance to ensure instant claim payments.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
              <Satellite className="text-green-600 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Carbon Credit Insurance</h4>
              <p className="text-slate-600">Participating in worldwide climate finance through sustainable ESG solutions.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-200 transition-colors">
              <ShieldCheck className="text-green-600 mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4 text-slate-900">Dynamic Pricing</h4>
              <p className="text-slate-600">AI-driven dynamic insurance pricing based on weather and soil data.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}