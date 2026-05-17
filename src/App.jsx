import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darkBg selection:bg-primary/30 selection:text-primaryLight">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-24">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
