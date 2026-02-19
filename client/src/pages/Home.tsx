import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Assets
import HeroBg from "@/assets/hero-bg.png";
import CommunityImg from "@/assets/community.png";
import InnovationImg from "@/assets/innovation.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HeroBg} 
            alt="Silicon Valley Abstract Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide uppercase text-gray-600">The Premier Tech Network</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]"
            >
              Building the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">leadership.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Connect with Silicon Valley's most innovative minds. SVLC is where technology meets executive excellence.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-black hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join the Community
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Minimalist */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Members", value: "2,500+" },
              { label: "Annual Events", value: "50+" },
              { label: "Companies Represented", value: "300+" },
              { label: "Years of Excellence", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-4xl font-bold tracking-tighter text-gray-900">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-balance">
                More than just a network. <br/>
                <span className="text-gray-400">A movement.</span>
              </h2>
              <div className="mb-4 inline-block px-3 py-1 rounded-full bg-black/5 border border-black/10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Who We Are</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Silicon Valley Leadership Community (SVLC) was founded on a simple principle: innovation thrives when leaders connect. We bridge the gap between emerging talent and established executives.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our members come from the world's leading technology companies, startups, and venture firms. Together, we are shaping the future of the digital economy through collaboration, mentorship, and shared vision.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <Globe className="w-8 h-8 mb-4 text-gray-900" />
                  <h4 className="font-bold mb-2">Global Reach</h4>
                  <p className="text-sm text-gray-500">Connecting leaders across 15+ countries.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <Award className="w-8 h-8 mb-4 text-gray-900" />
                  <h4 className="font-bold mb-2">Exclusive Access</h4>
                  <p className="text-sm text-gray-500">Private events with industry titans.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={CommunityImg} 
                alt="SVLC Community Event" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation / Pillars Section */}
      <section id="community" className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Three Pillars of Excellence</h2>
            <p className="text-xl text-gray-500">Everything we do is guided by our commitment to these core values.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and exploring new frontiers in technology and leadership.",
                icon: <Zap className="w-6 h-6" />,
                image: InnovationImg
              },
              {
                title: "Community",
                description: "Building deep, meaningful connections that transcend transactional networking.",
                icon: <Users className="w-6 h-6" />,
                image: CommunityImg
              },
              {
                title: "Leadership",
                description: "Empowering the next generation to lead with integrity, vision, and purpose.",
                icon: <Award className="w-6 h-6" />,
                image: HeroBg // Reusing hero for now as abstract texture
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 clip-path-slant z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-12 md:p-20 border border-white/20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">Ready to shape the future?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join a community of forward-thinking leaders and gain access to exclusive events, mentorship, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-white text-black hover:bg-gray-100">
                Apply for Membership
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg border-white/30 text-white hover:bg-white/10 hover:text-white">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}