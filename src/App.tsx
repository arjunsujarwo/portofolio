import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import RoleCards from "./sections/RoleCards";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main>
        <Hero />

        <RoleCards />

        <Stats />

        <About />

        <Experience />

        <Skills />

        <Projects />
<Certificates />
<Education />
<Contact />
<Footer />

      </main>
    </div>
  );
}

export default App;