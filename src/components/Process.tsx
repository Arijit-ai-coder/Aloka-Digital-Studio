import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We dive deep into your business, understand your bottlenecks, and identify the lowest-hanging fruit for immediate growth."
    },
    {
      num: "02",
      title: "Custom Blueprint",
      desc: "We map out the exact steps, campaigns, and funnels needed to hit your revenue goals. No guesswork, just data."
    },
    {
      num: "03",
      title: "Flawless Execution",
      desc: "Our team builds your high-converting assets, launches your campaigns, and sets up your automation systems."
    },
    {
      num: "04",
      title: "Scale & Optimize",
      desc: "We monitor the data daily, making calculated tweaks to maximize your ROI and scale your winning campaigns."
    }
  ];

  return (
    <section id="process" className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Simple, Proven Process.
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We make scaling feel easy and smooth. Here is exactly how we work together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-zinc-200 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto bg-white border-4 border-zinc-50 rounded-full shadow-sm flex items-center justify-center mb-8 relative">
                <span className="text-3xl font-black text-indigo-600">{step.num}</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
