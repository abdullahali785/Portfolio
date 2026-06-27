import React, { useState } from "react";
import SkillDetails from "./SkillDetails";
import skillsJSON from "../Assets/skills.json";

function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(null);
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../Assets/Skills', false, /\.png$/));

    return (
    <div id="skills" className="container px-4 py-5">
        <h2 className="pt-4 pb-2 fs-1 fw-bold text-center">My Skills</h2>
        <div id="custom-cards" className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 mt-3">
            {images.map((skillSource, index) => {
                const skill = { ...skillsJSON[index], image: skillSource };
                return (
                <div className="col d-flex justify-content-center" key={index}>
                    {/* Click opens the full modal (fallback for touch); hover reveals the popover below. */}
                    <div className="skill-card card border-0 shadow-sm p-3 rounded-4 text-center" style={{ cursor: "pointer" }} onClick={() => setSelectedSkill(skill)}>
                        <img src={skillSource} alt={skill.name} className="skill-icon img-fluid" style={{ width: "64px", height: "64px", objectFit: "contain" }}/>

                        {/* Hover popover — same info as the modal. It's a child of the card so the
                            card stays :hover-ed while the cursor is inside it, keeping links clickable. */}
                        <div className="skill-popover" onClick={(e) => e.stopPropagation()}>
                            <h5 className="skill-popover-title fw-bold mb-2">{skill.name}</h5>
                            <p className="skill-popover-desc small mb-0">{skill.description}</p>
                            <div className="skill-popover-divider" />
                            <p className="skill-popover-label small fw-bold mb-2">PROJECTS</p>
                            <div className="skill-popover-chips">
                                {Object.entries(skill.projects).map(([projectName, link], i) => (
                                    link
                                        ? <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="skill-chip" onClick={(e) => e.stopPropagation()}>{projectName}</a>
                                        : <span key={i} className="skill-chip skill-chip-muted">{projectName}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
        {selectedSkill && (<SkillDetails skill={selectedSkill} onClose={() => setSelectedSkill(null)}/>)}
    </div>
    );
}

export default Skills;
