import React from "react";
import skillsJSON from "../Assets/skills.json";

function SkillDetails({ skill, onClose }) {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)", zIndex: 9999 }} onClick={onClose}>
            <div className="card p-4 rounded-4 shadow-lg" style={{ width: "450px", backgroundColor: "white" }} onClick={(e) => e.stopPropagation()}>
                <img src={skill.image} style={{ width: "70px", height: "70px", margin: "0 auto", display: "block", backgroundColor: "white" }}/>

                <h2 className="text-center fw-bold mt-3" style={{backgroundColor: "white"}}>{skill.name}</h2>
                <p className="text-center text-muted" style={{backgroundColor: "white"}}>{skill.description}</p>

                <h5 className="mt-4 text-center" style={{backgroundColor: "white"}}>Some of my projects using {skill.name}</h5>
                <ul>
                    {Object.entries(skill.projects).map(([projectName, link], i) => (
                        <li key={i} className="text-center" style={{backgroundColor: "white"}}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{projectName}</a>
                        </li>
                    ))}
                </ul>

                <button className="btn btn-dark w-100 mt-3" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default SkillDetails;