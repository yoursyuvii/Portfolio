import React, { useState } from 'react';
import "./app.scss";
import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";
import { Services } from "./components/services/Services";
import { Portfolio } from "./components/projects/Projects";
import { Certificates } from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import { CustomCursor } from './components/cursor/Cursor';
import Sidebar from './components/sidebar/Sidebar';
import ToggleButton from "./components/toggleButton/ToggleButton";


const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
        <CustomCursor />
        <Sidebar open={open} setOpen={setOpen} />
        
        <Navbar />
        <ToggleButton setOpen={setOpen} />

        <section id="Homepage">
          <Hero />
        </section>

        <section id="about">
          
            <Services />
          
        </section>

        <section id="portfolio-parallax" className="parallax">
          <Parallax type="portfolio" />
        </section>

        <section id="portfolio">
            
                <Portfolio />
            
        </section>


        <section id="achievements">
          
            <Certificates />
          
        </section>

        <section id="contact-parallax" className="parallax">
          <Parallax type="contact" />
        </section>

        <section id="contact">
          
            <Contact />
          
        </section>
      </div>
  );
};

export default App;
