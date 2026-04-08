import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white">
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">EliteSales</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">About</a>
          <a href="#apply" className="px-5 py-2 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-light transition-all">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
