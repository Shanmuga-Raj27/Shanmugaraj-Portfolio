import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050505] text-soft-white font-sans selection:bg-neon/30 selection:text-white relative">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col space-y-24 sm:space-y-32 md:space-y-48 pb-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
