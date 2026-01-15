import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import WireframeButton from './ui/WireframeButton';
import { Palette, Globe, Fingerprint, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    icon: Palette,
    price: '$2k+',
    description: 'User-centric interfaces with focus on usability and structural integrity.',
    features: ['Wireframing', 'Prototyping', 'User Research']
  },
  {
    title: 'Web Development',
    icon: Globe,
    price: '$4k+',
    description: 'Performant, responsive websites built with modern frameworks.',
    features: ['React/Next.js', 'Tailwind CSS', 'Performance Optimization']
  },
  {
    title: 'Brand Identity',
    icon: Fingerprint,
    price: '$3k+',
    description: 'Distinctive visual systems that stand out in a crowded digital landscape.',
    features: ['Logo Design', 'Typography Systems', 'Brand Guidelines']
  },
  {
    title: 'Prototyping',
    icon: Layers,
    price: '$1.5k+',
    description: 'High-fidelity interactive prototypes to validate concepts before code.',
    features: ['Figma', 'Interaction Design', 'User Testing']
  }
];

const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" subtitle="07 — SERVICES">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group border-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark p-6 hover:border-solid hover:shadow-[8px_8px_0px_0px_#2563EB] hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-black flex flex-col h-full relative">
            
            {/* Top Tag */}
            <div className="absolute -top-3 left-4 bg-wireframe-bg dark:bg-wireframe-bgDark px-2 border border-wireframe-border dark:border-wireframe-borderDark text-[10px] font-bold">
              SVC_0{index + 1}
            </div>

            <div className="mb-6 flex justify-between items-start">
              <div className="w-12 h-12 border border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center group-hover:bg-wireframe-accent group-hover:text-white transition-colors">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500 mb-1">STARTING AT</span>
                <span className="block font-bold text-wireframe-accent bg-wireframe-bg/10 px-1 border border-dashed border-wireframe-accent/50">{service.price}</span>
              </div>
            </div>

            <h3 className="text-lg font-bold uppercase mb-3 group-hover:text-wireframe-accent transition-colors">{service.title}</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
              {service.description}
            </p>

            <ul className="mb-6 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="text-[10px] uppercase flex items-center text-gray-500">
                  <span className="w-1 h-1 bg-wireframe-accent mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-2 border border-wireframe-border dark:border-wireframe-borderDark text-xs font-bold uppercase hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent transition-colors flex items-center justify-center gap-2 group/btn">
              Inquire
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;