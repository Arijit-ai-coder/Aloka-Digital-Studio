import { motion } from 'motion/react';
import { ArrowRight, Frown, Smile } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Aloka Effect
          </motion.h2>
          <motion.p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We transform struggling marketing efforts into predictable growth engines.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-indigo-500 to-zinc-800 -translate-y-1/2 z-0"></div>

          {/* Before */}
          <motion.div 
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-rose-500/10 p-2 rounded-full">
                <Frown className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100">Before Aloka</h3>
            </div>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">✕</span>
                Struggling to get consistent leads.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">✕</span>
                Website looks outdated and untrustworthy.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-500">✕</span>
                Wasting money on ads that don't convert.
              </li>
            </ul>
          </motion.div>

          {/* Arrow (Mobile only) */}
          <div className="md:hidden flex justify-center py-4">
            <ArrowRight className="w-8 h-8 text-indigo-500 rotate-90" />
          </div>

          {/* After */}
          <motion.div 
            className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-500/10 p-2 rounded-full">
                <Smile className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white">After Aloka</h3>
            </div>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400">✓</span>
                A predictable client acquisition system.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400">✓</span>
                A premium brand image that commands authority.
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-400">✓</span>
                Profitable, data-driven ad campaigns.
              </li>
            </ul>
          </motion.div>

          {/* Arrow (Mobile only) */}
          <div className="md:hidden flex justify-center py-4">
            <ArrowRight className="w-8 h-8 text-emerald-500 rotate-90" />
          </div>

          {/* Result */}
          <motion.div 
            className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-8 relative z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">The Result</h3>
            <div className="text-4xl font-black text-white mb-2">2x Revenue</div>
            <p className="text-emerald-200/80 font-medium">in 90 Days.</p>
            <p className="text-zinc-400 mt-6 text-sm">
              Stop guessing. Start growing with a proven system.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
