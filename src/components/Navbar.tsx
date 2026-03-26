import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-zinc-900">
              Aloka<span className="text-indigo-600">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Services</a>
            <a href="#work" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Our Work</a>
            <a href="#process" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Process</a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Testimonials</a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Book a Call
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 hover:text-zinc-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-zinc-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md">Services</a>
            <a href="#work" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md">Our Work</a>
            <a href="#process" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md">Process</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-zinc-50 rounded-md">Book a Call</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
