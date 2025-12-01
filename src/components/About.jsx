import React from "react";
import image from "../Assets/Me.jpeg";

function About() {
    return (
    <div id="about" className="mt-5 mb-2 mx-3 mx-md-5 pt-5 px-3 px-md-5 text-center">
        <div className="pb-5 d-flex justify-content-center">
            <img src={image} alt="Photo of Abdullah Ali" className="img-fluid rounded-circle shadow border border-dark border-5 zoom"/>
        </div>
        <div className="px-3 py-4 text-center">
            <p className="display-4 fs-1 fw-bolder" style={{ color: "#000000ff" }}>
                Hi, I'm <span style={{ color: "#00158eff" }}>Abdullah Ali</span>
            </p>
            <p className="fs-2 fw-bold text-center" style={{ color: "#000000ff" }}>
                <span className="d-block d-md-inline">Software Developer | </span>
                <span className="d-block d-md-inline">AI/ML Engineer | </span>
                <span className="d-block d-md-inline">Logic Architect</span>
            </p>
        </div>
    </div>
    );
}

export default About;