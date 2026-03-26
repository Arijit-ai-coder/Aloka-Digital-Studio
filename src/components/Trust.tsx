import { motion } from 'motion/react';
import { TrendingUp, Target, ShieldCheck } from 'lucide-react';

export default function Trust() {
  const painPoints = [
    {
      icon: <Target className="h-6 w-6 text-rose-500" />,
      title: "Low Conversion Rates",
      desc: "Traffic that bounces without buying or booking."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-rose-500" />,
      title: "Wasted Ad Spend",
      desc: "Burning cash on campaigns that don't generate ROI."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-rose-500" />,
      title: "Inconsistent Leads",
      desc: "Relying on referrals instead of a predictable system."
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Tired of agencies that promise the world and deliver nothing?
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              We are your growth partners. Data-driven, transparent, and obsessed with your ROI. We don't just build websites or run ads; we engineer predictable client acquisition systems.
            </p>
            
            <div className="space-y-6">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-rose-50 p-2 rounded-lg">
                    {point.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-zinc-900">{point.title}</h4>
                    <p className="text-zinc-600 mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-50 rounded-3xl p-8 lg:p-12 border border-zinc-200"
          >
            <h3 className="text-xl font-bold text-zinc-900 mb-8 text-center uppercase tracking-wider text-sm">Trusted by ambitious brands globally</h3>
            
            <div className="grid grid-cols-2 gap-8 opacity-60 grayscale">
              {/* Placeholder Logos */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-center h-12">
                  <div className="text-xl font-black tracking-tighter text-zinc-400">BRAND {i}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-center text-zinc-600 font-medium">"Aloka completely transformed our lead generation. We saw a 300% increase in qualified calls within 60 days."</p>
              <p className="text-center text-sm text-zinc-500 mt-4">— Sarah J., Tech Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
