// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Home from './components/Home';

// import Skills from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import About from './components/About';
// import Resume from './components/Resume';
// import Faq from './components/Faq';
// import Services from './components/Services';


// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-950">
//       <Home />
//       <About/>
//       <Resume/>
//       <Services/>
//       <Faq/>
//       <Contact />
//       <Footer />
//     </main>
//   );
// }

// export default App;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950">
      <Home />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;