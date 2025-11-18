import React, { useState } from "react";
import image from "../Assets/NavyBackground.jpeg";

function Projects() {
    return (
    <div id="projects" className="container px-4 pt-5"> 
        <h2 className="pb-2 fs-1 fw-bold border-bottom text-center">My Projects</h2>
        <div id="custom-cards" className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 text-center"> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">AquaVitals</h3>
                        <p className="text-dark mt-auto">A 3 step ML model to estimate water transparency and fish survival rates using real-time rainfall and temperature data.</p>
                    </div> 
                </div>
            </div> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">Abdullah's Books</h3> 
                        <p className="text-dark mt-auto">A full-stack book tracker using Node.js (Express) and PostgreSQL with CRUD functionality and a responsive UI.</p>
                    </div>
                </div> 
            </div> 
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">HTTP Server</h3>
                        <p className="text-dark mt-auto">A multithreaded HTTP server built with raw sockets, thread pools, and stream-based response.</p> 
                    </div> 
                </div> 
            </div> 
            <br></br>
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">Jokes API</h3>
                        <p className="text-dark mt-auto">A website that allows user to select type of jokes they want to hear, calls a custom flask 'Jokes API' based on user's selection, and displays the results.</p> 
                    </div> 
                </div> 
            </div> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">Image Text Analyzer</h3>
                        <p className="text-dark mt-auto">A Python tool that extracts text from an image using EasyOCR and PyTesseract, and generates an AI-powered explanation of the text using OpenAI's GPT model.</p>
                    </div> 
                </div>
            </div> 
            <div className="col"> 
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1"> 
                        <h3 className="my-3 pt-2 display-6 lh-1 fw-bold text-dark">Travel Tracker</h3> 
                        <p className="text-dark mt-auto">A web app that lets you track the travels of your entire family. Users can add family members, log visited countries, and view dynamic maps showing travel history.</p>
                    </div>
                </div> 
            </div> 
        </div> 
    </div>
    );
}

export default Projects;