import React, { useState } from "react";
import image from "../Assets/Me.jpeg";

function About() {
    return (
    <div id="about" className="mt-5 mb-2 mx-5 px-5 text-center"> 
        <div className="pb-5 d-flex justify-content-center">
            <img src={image} alt="Photo of Abdullah Ali" className="custom-circle shadow border border-dark border-5 zoom"/>
        </div>
        <div className="mx-5 pt-4 px-5 pb-5">
            <p className="py-1 mx-5 px-5 display-4 fs-1 fw-bolder" style={{ color: "#000000ff" }}>
                Hi, I'm <span style={{ color: "#00158eff" }}>Abdullah Ali</span> 
            </p>
            <p className="pt-1 pb-5 mx-5 px-5 display-4 fs-2 fw-bold" style={{ color: "#000000ff" }}>
                Software Developer | AI/ML Engineer | Problem Solver
            </p>
        </div>
    </div>
    );
}

export default About;