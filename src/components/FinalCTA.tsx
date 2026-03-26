import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="white" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Scale Your Business?
        </motion.h2>
        <motion.p 
          className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Stop leaving money on the table. Let's build a predictable growth engine for your brand. Spots for new clients are limited this month.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a 
            href="mailto:hello@alokadigital.com" 
            className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-indigo-600 bg-white rounded-full hover:bg-zinc-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Book Your Free Strategy Call Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
          <p className="text-indigo-200 text-sm mt-6 font-medium">No commitment. Just a 30-minute deep dive into your growth potential.</p>
        </motion.div>
      </div>
    </section>
  );
}
