import React, { useState } from "react";
import image from "../Assets/Me.jpeg";

function About() {
    return (
    <div id="about" className="mt-5 mb-2 mx-5 pt-5 px-5 text-center"> 
        <div className="pb-5 d-flex justify-content-center">
            <img src={image} alt="Photo of Abdullah Ali" className="custom-circle shadow border border-dark border-5 zoom"/>
        </div>
        <div className="px-3 py-4 text-center">
            <p className="display-4 fs-1 fw-bolder" style={{ color: "#000000ff" }}>
                Hi, I'm <span style={{ color: "#00158eff" }}>Abdullah Ali</span>
            </p>
            <p className="display-4 fs-1 fw-bolder text-truncate" style={{ color: "#000000ff" }}>
                Software Developer | AI/ML Engineer | Problem Solver
            </p>
        </div>
    </div>
    );
}

export default About;