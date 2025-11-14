import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Extras from "./Extras";
import Footer from "./Footer";

function App() {
    return (
    <div> 
        <Header /> 
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Extras />
        <Footer /> 
    </div>
    );
}

export default App;