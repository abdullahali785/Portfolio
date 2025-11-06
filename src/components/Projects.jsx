import React, { useState } from "react";
import image from "../Assets/NavyBackground.jpeg";

function Projects() {
    return (
    <div className="container px-4 py-5" id="custom-cards"> 
        <h2 className="pb-2 fs-1 fw-bold border-bottom text-center">My Projects</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">AquaVitals</h3>
                        <p className="text-dark mt-auto">A 3 step ML model to estimate water transparency and fish survival rates using real-time rainfall and temperature data.</p>
                    </div> 
                </div>
            </div> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">Abdullah's Books</h3> 
                        <p className="text-dark mt-auto">A full-stack book tracker using Node.js (Express) and PostgreSQL with CRUD functionality and a responsive UI.</p>
                    </div>
                </div> 
            </div> 
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">HTTP Server</h3>
                        <p className="text-dark mt-auto">A multithreaded HTTP server built with raw sockets, thread pools, and stream-based response.</p> 
                    </div> 
                </div> 
            </div> 
            <br></br>
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">AquaVitals</h3>
                        <p className="text-dark mt-auto">A 3 step ML model to estimate water transparency and fish survival rates using real-time rainfall and temperature data.</p>
                    </div> 
                </div>
            </div> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">Abdullah's Books</h3> 
                        <p className="text-dark mt-auto">A full-stack book tracker using Node.js (Express) and PostgreSQL with CRUD functionality and a responsive UI.</p>
                    </div>
                </div> 
            </div> 
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom" style={{backgroundImage: `url(${image})`}}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-dark">HTTP Server</h3>
                        <p className="text-dark mt-auto">A multithreaded HTTP server built with raw sockets, thread pools, and stream-based response.</p> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div>
    );
}

export default Projects;