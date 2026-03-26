import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Growth Packages Designed for ROI.
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don't view marketing as an expense. It's an investment. Choose the path that fits your current stage.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Starter Package */}
          <motion.div 
            className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 lg:p-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">Starter Package</h3>
            <p className="text-zinc-600 mb-8">For businesses ready to establish a premium presence and start generating leads.</p>
            
            <ul className="space-y-4 mb-10">
              {['High-Converting Website Design', 'Basic SEO Setup', 'Social Media Foundation', 'Lead Capture Integration'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-zinc-700">
                  <Check className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="block w-full py-4 px-6 text-center font-semibold text-zinc-900 bg-white border-2 border-zinc-200 rounded-full hover:border-zinc-900 transition-colors">
              Inquire Now
            </a>
          </motion.div>

          {/* Growth Package */}
          <motion.div 
            className="bg-zinc-900 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Growth Package</h3>
            <p className="text-zinc-400 mb-8">For companies looking to scale aggressively with paid ads and automation.</p>
            
            <ul className="space-y-4 mb-10">
              {['Everything in Starter', 'Advanced Paid Ads Management', 'AI Chatbot & Automation', 'Conversion Rate Optimization', 'Dedicated Growth Strategist'].map((feature, idx) => (
                <li key={idx} className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="block w-full py-4 px-6 text-center font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
              Scale With Us
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center max-w-2xl mx-auto bg-indigo-50 border border-indigo-100 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-indigo-900 font-medium">
            <span className="font-bold">Our Guarantee:</span> We don't win unless you win. Ask about our performance-based guarantees during your strategy call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
