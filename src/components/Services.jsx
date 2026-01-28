import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Leaf, Microscope, Drone,
  TrendingUp, CheckCircle, ArrowRight
} from 'lucide-react';
import { COLORS } from '../styles/colors';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Loss Assessments Survey',
      description: 'Comprehensive damage evaluation of localized and PH losses for accurate claim processing.',
      features: ['Precision mapping', 'Legal documentation', 'Real-time tracking']
    },
    {
      icon: Leaf,
      title: 'Crop Cutting Experiments',
      description: 'Precise yield assessment through scientific sampling methods',
      features: ['Yield assessment', 'Sample analysis', 'Data validation']
    },
    {
      icon: Microscope,
      title: 'Crop Health Monitoring',
      description: 'Real-time tracking of crop conditions throughout growing season',
      features: ['Nutrient testing', 'pH analysis', 'Recommendations']
    },
    {
      icon: Drone,
      title: 'Publicity & Awareness',
      description: 'Outreach programs educating farming communities',
      features: ['High-resolution imagery', 'Thermal analysis', 'Growth monitoring']
    },
    {
      icon: TrendingUp,
      title: 'PMFBY Facilitation Centre',
      description: 'Dedicated support centers for farmer assistance.',
      features: ['Trend analysis', 'Reporting', 'Custom dashboards']
    },
    {
      icon: CheckCircle,
      title: 'Document Verification',
      description: 'Thorough validation ensuring data accuracy and compliances',
      features: ['Verification', 'Audit trails', 'Certification']
    }
  ];

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden bg-slate-50">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px]" style={{ backgroundColor: COLORS.secondaryGreen }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase rounded-full bg-white shadow-sm border border-slate-100"
            style={{ color: COLORS.secondaryBrown }}
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
            style={{ color: COLORS.secondaryGreen }}
          >
            Precision Agriculture <br className="hidden md:block" /> Survey Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            Leveraging cutting-edge technology to provide end-to-end insights
            for the modern agricultural landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        >

        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, description, features } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col h-full"
    >
      {/* Icon Wrapper */}
      <div className="relative mb-8">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-[10deg]"
          style={{ backgroundColor: `${COLORS.secondaryGreen}10` }} // 10% opacity
        >
          <Icon className="w-8 h-8" style={{ color: COLORS.secondaryGreen }} />
        </div>
        <div
          className="absolute inset-0 w-16 h-16 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: COLORS.secondaryGreen }}
        />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Features List */}
      <div className="space-y-4 pt-6 border-t border-slate-50">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${COLORS.accentCTA}15` }}
            >
              <CheckCircle className="w-3 h-3" style={{ color: COLORS.accentCTA }} />
            </div>
            <span className="text-sm font-medium text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;