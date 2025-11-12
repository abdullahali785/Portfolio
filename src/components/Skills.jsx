import React, { useState } from "react";
import pythonIcon from "../Assets/python-icon.gif";
import javaIcon from "../Assets/java-icon.png";

function Skills() {
    return (
    <div className="container px-4 py-5" id="custom-cards"> 
        <h2 className="pb-2 fs-1 fw-bold border-bottom text-center">My Skills</h2>
        <img src={pythonIcon} alt="Python icon"/>
        <img src={javaIcon} alt="Java icon"/>
    </div>
    );
}

export default Skills;