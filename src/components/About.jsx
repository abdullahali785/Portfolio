import React, { useState } from "react";
import image from "../Assets/Me.jpeg";

function About() {
    return (
    <div className="m-5 px-5 text-center"> 
        <div className="pb-5 d-flex justify-content-center">
            <img src={image} alt="Photo of Abdullah Ali" className="custom-circle shadow border border-dark border-5" />
        </div>
        <div className="mx-5 pt-4 px-5">
            <p className="py-1 mx-5 px-5 display-4 fs-1 fw-bolder" style={{ color: "#00006aff" }}>
                Hi, I'm <span style={{ color: "#005d17ff" }}>Abdullah Ali</span> 
            </p>
            <p className="py-1 mx-5 px-5 display-4 fs-2 fw-bold" style={{ color: "#00006aff" }}>
                I turn concepts into code, code into experiences
            </p>
        </div>
    </div>
    );
}

export default About;