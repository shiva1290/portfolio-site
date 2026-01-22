import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
