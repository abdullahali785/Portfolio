import React, { useState } from "react";

function Footer() {
    return (
    <footer>
        <div className="container"> 
            <div className="pt-3 my-4"> 
                <p className="text-center fs-3 fw-bold" style={{ color: "#000000ff" }}>Made by Abdullah in React.js with 💙</p> 
            </div> 
        </div>
        <div style={{ backgroundColor: "#00006aff"}}>
            Navy Block
        </div>
    </footer>
    );
}

export default Footer;