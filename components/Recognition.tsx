import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { Award, Trophy, Star, CheckCircle } from 'lucide-react';

const awards = [
  { title: 'Site of the Day', org: 'Awwwards', year: '2023', icon: Trophy },
  { title: 'Best UX Design', org: 'CSS Design Awards', year: '2022', icon: Star },
  { title: 'Featured Portfolio', org: 'Behance', year: '2022', icon: Award },
  { title: 'Top Rated Talent', org: 'Upwork Enterprise', year: '2021', icon: CheckCircle },
];

const Recognition: React.FC = () => {
  return (
    <SectionWrapper id="recognition" subtitle="10 — RECOGNITION">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="border-2 border-wireframe-border dark:border-wireframe-borderDark p-6 flex items-center gap-4 bg-wireframe-bg dark:bg-wireframe-bgDark relative overflow-hidden group hover:border-wireframe-accent transition-colors">
            {/* Background Decor */}
            <div className="absolute -right-4 -bottom-4 opacity-5 text-wireframe-border dark:text-wireframe-borderDark transform rotate-12 group-hover:scale-110 transition-transform">
              <award.icon size={100} />
            </div>

            <div className="w-12 h-12 flex-shrink-0 border border-dashed border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center group-hover:border-solid group-hover:bg-wireframe-accent group-hover:text-white transition-all">
              <award.icon size={24} />
            </div>

            <div>
              <span className="block text-[10px] text-gray-500 mb-0.5">{award.year} — {award.org}</span>
              <h3 className="font-bold text-sm leading-tight">{award.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-dashed border-wireframe-border dark:border-wireframe-borderDark pt-6">
        <h4 className="text-xs font-bold uppercase mb-4">[CERTIFICATIONS]</h4>
        <div className="flex flex-wrap gap-3">
          {['Google UX Design Professional', 'Meta Frontend Developer', 'AWS Certified Practitioner'].map((cert, i) => (
            <span key={i} className="px-3 py-1.5 border border-wireframe-border dark:border-wireframe-borderDark text-xs hover:bg-wireframe-border hover:text-white dark:hover:bg-wireframe-borderDark dark:hover:text-black transition-colors cursor-default">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Recognition;