
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Aboult from "./components/Aboult/Aboult";
import Projects from "./components/Projects/Projects";
import Depositions from "./components/Depositions/Depositions";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blog from './components/Blog/Blog';
import AboutConsults from './components/AboutConsults';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Aboult />
      <AboutConsults />
      <Depositions />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
