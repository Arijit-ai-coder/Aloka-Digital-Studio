import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Brand Scaling",
      category: "Shopify Redesign & FB Ads",
      description: "Redesigned their entire Shopify store for conversion and scaled their Facebook Ads campaigns.",
      result: "+150% ROAS, $50k extra monthly revenue.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "B2B SaaS Growth",
      category: "SEO & CRO",
      description: "Implemented a comprehensive SEO strategy and optimized their landing pages for demo bookings.",
      result: "3x organic traffic, 40% increase in demo bookings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      title: "Local Service Dominance",
      category: "Google Ads & AI Follow-up",
      description: "Launched hyper-local Google Ads and integrated an AI chatbot to qualify leads instantly.",
      result: "50+ qualified leads per month on autopilot.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Real Results for Real Businesses.
            </motion.h2>
            <motion.p 
              className="text-lg text-zinc-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We let our work speak for itself. Here's how we've helped brands scale predictably.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <a href="#contact" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              View All Case Studies <ArrowUpRight className="ml-1 w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="mb-2">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{project.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">{project.title}</h3>
              <p className="text-zinc-600 mb-4">{project.description}</p>
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                <p className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-1">Measurable Result:</p>
                <p className="text-indigo-700 font-bold">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
