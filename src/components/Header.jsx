import React, { useState } from "react";

function Header() {
    const options = [["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"]];
    return (
    <div id="top" className="sticky-top">
        <div style={{ backgroundColor: "#00006aff", height: "20px" }}></div>

        <header className="container"> 
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-2"> 
                <div className="col-md-3 mb-2 mb-md-0 text-center"> 
                    <a href="#" className="d-inline-flex link-body-emphasis text-decoration-none nav-zoom"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-house-up-fill" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z"/>
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                            <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                        </svg>
                    </a>
                </div> 
                <ul className="nav col-12 col-md-auto mb-1 justify-content-center mb-md-0 gap-3"> 
                    {options.map(([option, link]) => (
                        <li key={option}><a href={link} className="nav-link px-2 font-weight-bold fs-5 fw-bolder nav-zoom" style={{ color: "#000000ff" }}>{option}</a></li>
                    ))}
                </ul> 
                <div className="col-md-3 text-center"> 
                    <a type="button" className="btn btn-outline-navy fs-5 fw-bolder nav-zoom" href="#contact">Contact Me</a> 
                </div> 
            </div>
        </header>
    </div>
    );
}

export default Header;