import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Gradient */}
      <div className="fixed inset-0 h-full w-full bg-[radial-gradient(#99a0ff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10">
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
