import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import WireframeButton from './ui/WireframeButton';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" subtitle="06 — CONTACT">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Left: Form */}
        <div className="order-2 md:order-1">
          <div className="p-1 mb-6 border-b border-dashed border-wireframe-border dark:border-wireframe-borderDark">
             <h3 className="text-lg font-bold">[SEND_MESSAGE]</h3>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group relative">
              <label className="flex items-center text-xs font-bold uppercase mb-2 group-focus-within:text-wireframe-accent transition-colors duration-300 group-focus-within:animate-pulse">
                <span className="w-4 inline-block opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 font-mono text-wireframe-accent">&gt;</span>
                Name *
              </label>
              <input 
                type="text" 
                className="w-full bg-transparent border-2 border-wireframe-border dark:border-wireframe-borderDark p-3 focus:outline-none focus:border-wireframe-accent focus:bg-wireframe-bg/5 dark:focus:bg-wireframe-bgDark/20 transition-all duration-300 placeholder-gray-400 font-mono text-sm"
                placeholder="ENTER_NAME"
              />
            </div>
            
            <div className="group relative">
              <label className="flex items-center text-xs font-bold uppercase mb-2 group-focus-within:text-wireframe-accent transition-colors duration-300 group-focus-within:animate-pulse">
                <span className="w-4 inline-block opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 font-mono text-wireframe-accent">&gt;</span>
                Email *
              </label>
              <input 
                type="email" 
                className="w-full bg-transparent border-2 border-wireframe-border dark:border-wireframe-borderDark p-3 focus:outline-none focus:border-wireframe-accent focus:bg-wireframe-bg/5 dark:focus:bg-wireframe-bgDark/20 transition-all duration-300 placeholder-gray-400 font-mono text-sm"
                placeholder="ENTER_EMAIL"
              />
            </div>

            <div className="group relative">
              <label className="flex items-center text-xs font-bold uppercase mb-2 group-focus-within:text-wireframe-accent transition-colors duration-300 group-focus-within:animate-pulse">
                <span className="w-4 inline-block opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 font-mono text-wireframe-accent">&gt;</span>
                Message *
              </label>
              <textarea 
                rows={5}
                className="w-full bg-transparent border-2 border-wireframe-border dark:border-wireframe-borderDark p-3 focus:outline-none focus:border-wireframe-accent focus:bg-wireframe-bg/5 dark:focus:bg-wireframe-bgDark/20 transition-all duration-300 placeholder-gray-400 font-mono text-sm resize-none"
                placeholder="TYPE_MESSAGE..."
              ></textarea>
            </div>

            <WireframeButton fullWidth type="submit">
              [TRANSMIT_DATA]
            </WireframeButton>
          </form>
        </div>

        {/* Right: Info */}
        <div className="order-1 md:order-2 flex flex-col gap-6">
           <div className="p-1 mb-2 border-b border-dashed border-wireframe-border dark:border-wireframe-borderDark">
             <h3 className="text-lg font-bold">[CONTACT_INFO]</h3>
          </div>

          <div className="space-y-4">
             {[
               { icon: Mail, label: 'Email', value: 'hello@alexdev.com' },
               { icon: Phone, label: 'Phone', value: '+1 (555) 012-3456' },
               { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
             ].map((item, idx) => (
               <div key={idx} className="border border-wireframe-border dark:border-wireframe-borderDark p-4 flex items-center gap-4 hover:bg-wireframe-bg dark:hover:bg-wireframe-bgDark hover:border-wireframe-accent hover:shadow-[4px_4px_0px_0px_#2563EB] transition-all duration-300 group cursor-pointer bg-white dark:bg-black">
                 <div className="w-10 h-10 border border-dashed border-gray-400 flex items-center justify-center group-hover:border-solid group-hover:bg-wireframe-accent group-hover:text-white transition-all duration-300">
                   <item.icon size={18} />
                 </div>
                 <div>
                   <span className="block text-[10px] uppercase text-gray-500 group-hover:text-wireframe-accent transition-colors">{item.label}</span>
                   <span className="font-bold text-sm">{item.value}</span>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase mb-4">[SOCIAL_NETWORKS]</h4>
            <div className="flex gap-4">
               {[Linkedin, Github, Twitter].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 border-2 border-wireframe-border dark:border-wireframe-borderDark flex items-center justify-center hover:bg-wireframe-accent hover:text-white hover:border-wireframe-accent hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#2563EB] transition-all duration-300">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;