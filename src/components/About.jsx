import React, { useState } from "react";
import image from "../Assets/Me.jpeg";

function About() {
    return (
        <div class="m-5 px-5 text-center border-bottom"> 
            <div class="pb-5 d-flex justify-content-center">
                <img src={image} alt="Photo of Abdullah Ali" class="custom-circle shadow border border-dark" />
            </div>
            <p class="mx-5 px-5 display-4 fs-1 fw-bold " style={{ color: "#00006aff" }}>
                Hi, I'm Abdullah Ali. 
                Here you can check out my experiences, projects, and skills!
            </p> 
        </div>
    )
}

export default About;