import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';

import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950">
      <Home />
      <About/>
      <Resume/>
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
