import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      {/* Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-60"
        style={{ scaleX }}
      />

      {/* Background Gradient */}
      <div className="fixed inset-0 h-full w-full bg-[#f8faff] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#99a0ff_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        {/* Animated background blobs */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-24 w-96 h-96 bg-rose-200/20 rounded-full blur-[100px]"
        />
      </div>
      
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 sm:pt-8 lg:pt-12">
        <Hero />
        <TechStack />
        <About />
        <Portfolio />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
