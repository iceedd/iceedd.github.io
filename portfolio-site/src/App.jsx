import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="relative">
            <Routes>
              <Route path="/" element={
                <>
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;