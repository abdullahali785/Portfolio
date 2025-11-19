import React, { useState } from "react";

function Experience() {
    return (
    <div id="experience" className="mt-1 mb-3"> 
        <div className="py-5 px-5 text-center bg-dark text-white"> 
            <div className="container py-5 bg-dark text-white"> 
                <h1 className="pb-3 fs-1 fw-bold bg-dark text-white">My Experience</h1> 
                <p className="col-lg-8 mx-auto fs-3 fw-semibold lead bg-dark text-white">Technology Help Desk Technician</p> 
                <p className="col-lg-8 mx-auto lead bg-dark text-white">
                    I diagnosed and resolved <span className="fw-bold bg-dark">hardware, software, and network</span> issues for students, faculty, and staff.
                    Documented <span className="fw-bold bg-dark">200+</span> tickets demonstrating strong problem-solving and clear communication skills.
                    Made <span className="fw-bold bg-dark">300+</span> edits to the Technology Help Desk Wiki, a documentation of more than <span className="fw-bold bg-dark">500</span> articles.
                    Collaborated with other Luther departments and ITS sub-teams to ensure smooth operations.
                </p> 
            </div> 
        </div> 
    </div>
    );
}

export default Experience;