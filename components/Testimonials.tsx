import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "The wireframe design system Alex created completely transformed our development workflow. Clean, precise, and incredibly functional.",
    name: "Sarah Jenkins",
    role: "CTO, FinTech Sol"
  },
  {
    id: 2,
    text: "Exceptional attention to detail. The brutalist aesthetic perfectly matched our brand identity while maintaining usability.",
    name: "Marcus Chen",
    role: "Director, Studio A"
  },
  {
    id: 3,
    text: "Fast, responsive, and easy to work with. The code quality is top-notch and the documentation is pristine.",
    name: "Elena Rodriguez",
    role: "Product Lead"
  }
];

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" subtitle="05 — TESTIMONIALS">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="flex flex-col h-full">
            {/* Quote Box */}
            <div className="flex-grow border-2 border-dashed border-wireframe-border dark:border-wireframe-borderDark p-6 relative bg-wireframe-bg dark:bg-wireframe-bgDark mb-4 group hover:border-solid transition-all">
              <Quote className="absolute top-4 left-4 text-wireframe-accent opacity-20 w-8 h-8" />
              <p className="relative z-10 text-sm italic mt-4 leading-relaxed">
                "{t.text}"
              </p>
              {/* Speech bubble pointer */}
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-wireframe-bg dark:bg-wireframe-bgDark border-r border-b border-wireframe-border dark:border-wireframe-borderDark transform rotate-45 group-hover:border-solid border-dashed"></div>
            </div>

            {/* Author Info */}
            <div className="flex items-center pl-4">
              {/* The ONLY circle allowed */}
              <div className="w-12 h-12 rounded-full border border-wireframe-border dark:border-wireframe-borderDark bg-gray-200 dark:bg-gray-800 relative overflow-hidden mr-4 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[140%] h-px bg-black/20 dark:bg-white/20 rotate-45 absolute"></div>
                  <div className="w-[140%] h-px bg-black/20 dark:bg-white/20 -rotate-45 absolute"></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-bold text-sm uppercase">{t.name}</span>
                <span className="text-xs text-gray-500">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;