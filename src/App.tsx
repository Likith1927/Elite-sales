import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { BarChart3, Users, Target, Zap } from "lucide-react";

const services = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Sales Strategy",
    description: "Data-driven roadmaps to penetrate new markets and dominate existing ones."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Scaling",
    description: "We help you recruit, train, and retain top-tier sales talent globally."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Lead Generation",
    description: "High-intent lead acquisition systems that convert at industry-leading rates."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Sales Automation",
    description: "Streamline your CRM and outreach with cutting-edge AI integrations."
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We provide the tools, talent, and tactics needed to transform your 
                sales department into a high-performance revenue engine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-brand/5 text-brand rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                    Professionalism Meets <br />
                    High-Performance
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    EliteSales Solutions was founded on the principle that sales is both 
                    an art and a science. We combine creative outreach strategies with 
                    rigorous data analysis to deliver unparalleled results for our clients.
                  </p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Our team consists of veteran sales leaders who have built revenue 
                    engines for some of the world's most successful startups.
                  </p>
                  <div className="flex gap-12">
                    <div>
                      <p className="text-3xl font-bold text-brand mb-1">500+</p>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">Clients Served</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brand mb-1">$2B+</p>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">Revenue Generated</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src="https://picsum.photos/seed/sales-office/800/600" 
                    alt="Modern Office" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/5 rounded-full -z-10 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 rounded-full -z-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        <ApplicationForm />
      </main>
      
      <Footer />
    </div>
  );
}
