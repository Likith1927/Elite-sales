import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold tracking-wider uppercase mb-6">
              Next-Generation Sales Excellence
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Elevate Your Business with <br />
              <span className="text-brand">Strategic Sales Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              We partner with high-growth companies to build, scale, and optimize 
              their sales engines. Professional, minimalist, and results-driven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#apply" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand text-white font-medium transition-all hover:bg-brand-light hover:shadow-lg group"
              >
                Apply for Partnership
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-200 bg-white text-slate-900 font-medium transition-all hover:bg-slate-50"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
