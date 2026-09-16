import { useState } from 'react';
import PortfolioPreloader from './components/PortfolioPreloader';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#0B1120] min-h-screen text-white relative selection:bg-teal-500 selection:text-white">
      {/* Cinematic Preloader */}
      {loading && <PortfolioPreloader onComplete={() => setLoading(false)} />}

      {/* Portfolio Sections */}
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;