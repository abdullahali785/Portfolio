import React, { useState } from "react";

function About() {
    return (
        <div class="px-5 pt-5 my-5 mx-5 text-center border-bottom"> 
            <div class="overflow-hidden" style={{"max-height": "30vh"}}> 
                <div class="container px-5"> 
                    <img src="Assets/Me.jpeg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Abdullah's Image" width="700" height="500" loading="lazy"/> 
                </div> 
            </div> 
            <h1 class="display-4 fw-bold text-body-emphasis" style={{ color: "#000080" }}>
                Hi, I'm Abdullah Ali. 
                Here you can check out my experiences, projects, and skills!
            </h1> 
        </div>
    )
}

export default About;