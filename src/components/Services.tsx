import { motion } from 'motion/react';
import { MonitorSmartphone, Megaphone, MousePointerClick, Bot, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-indigo-600" />,
      title: "Website Design & Development",
      desc: "High-converting, lightning-fast websites built to turn visitors into paying customers.",
      outcome: "More leads from the exact same traffic."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-indigo-600" />,
      title: "Social Media Marketing",
      desc: "Engaging, strategic content that builds your brand authority and community.",
      outcome: "A loyal audience that trusts and buys from you."
    },
    {
      icon: <MousePointerClick className="h-8 w-8 text-indigo-600" />,
      title: "Paid Ads (Facebook/Google)",
      desc: "Laser-targeted campaigns engineered for maximum return on ad spend.",
      outcome: "Predictable, scalable revenue on demand."
    },
    {
      icon: <Bot className="h-8 w-8 text-indigo-600" />,
      title: "AI Automation",
      desc: "Smart chatbots and workflows that handle inquiries and nurture leads 24/7.",
      outcome: "Save 20+ hours a week and never miss a lead."
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: "Branding & Creative Design",
      desc: "Premium visual identities that make your business look like the industry leader.",
      outcome: "Command higher prices and instant trust."
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need to scale, <br className="hidden md:block" />under one roof.
          </motion.h2>
          <motion.p 
            className="text-lg text-zinc-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We don't just offer services; we deliver measurable outcomes that impact your bottom line.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">{service.desc}</p>
              
              <div className="pt-6 border-t border-zinc-100">
                <p className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-2">The Outcome:</p>
                <p className="text-indigo-600 font-medium">{service.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
