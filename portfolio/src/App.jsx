import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DeviceProvider } from "./contexts/DeviceContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <DeviceProvider>
        <div className="bg-bg text-text font-sans scroll-smooth overflow-x-hidden w-full">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Timeline />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </DeviceProvider>
    </LanguageProvider>
  );
}

export default App;
