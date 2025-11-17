import React, { useState } from "react";

function Skills() {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../Assets/Skills', false, /\.png$/));

    return (
    <div className="container px-4 py-5" id="custom-cards"> 
        <h2 className="pb-2 fs-1 fw-bold text-center">My Skills</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 mt-3">
            {images.map((img, skill) => (
            <div className="col d-flex justify-content-center" key={skill}>
                <div className="card border-0 shadow-sm p-3 rounded-4 text-center hover-shadow">
                    <img src={img} className="img-fluid" style={{ width: "64px", height: "64px", objectFit: "contain" }}/>
                </div>
            </div>
            ))}
        </div>
    </div>
    );
}

export default Skills;