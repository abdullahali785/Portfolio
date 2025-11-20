import React from "react";
import linkedIn from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import gmail from "../Assets/gmail.png";

function Contact() {
    return(
    <div id="contact" className="pt-5 px-5">
        <p className="fw-bold text-center mb-4" style={{ fontSize: "1.4rem" }}>
            Thank you for reading! Feel free to reach out, I'd love to connect with you!
        </p>

        <div className="d-flex justify-content-center gap-4">
            <a href="https://www.linkedin.com/in/abd785" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                <img src={linkedIn}  alt="LinkedIn" className="col img-fluid" style={{ width: "64px", height: "64px", objectFit: "contain" }}/>
            </a>

            <a href="https://github.com/abdullahali785" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                <img src={github} alt="GitHub" className="col img-fluid" style={{ width: "64px", height: "64px", objectFit: "contain" }}/>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahali.3.3.2006@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                <img src={gmail} alt="Email" className="col img-fluid" style={{ width: "64px", height: "64px", objectFit: "contain" }}/>
            </a>
        </div>
    </div>
    )
}

export default Contact;