
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from "./Components/Skills"
import Project from './Components/Project';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className='flex flex-col overflow-x-hidden' >
      
      <Navbar></Navbar>
      <section id="home" className="h-max bg-blue-400">
        <Home/>
      </section>
      

      <section id="about" className="h-max bg-blue-200">
        <About/>
      </section>
      <section id="skills" className="h-max  bg-blue-400">
      <Skills></Skills>
      </section>
      <section id="projects" className="h-max  bg-blue-400">
      <Project/>
      </section>
      <section id="contact" className="h-max bg-blue-400">
        <Contact/>
      </section>
      
    </div>
  );
}

export default App;