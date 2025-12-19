import React, { useState } from "react";
import TeamNorseImage from "../Assets/TeamNorse.jpeg";
import DayOfInnovation from "../Assets/DayOfInnov.jpeg";
import AquaVitals from "../Assets/AquaVitals.jpeg";
import Description from "../Assets/Description.png";

function Extras() {
    const cards = [
        { type: "image", src: TeamNorseImage },
        { type: "image", src: DayOfInnovation },
        { type: "image", src: AquaVitals },
        { type: "image", src: Description },
        // { type: "text" }
    ];
    const [index, setIndex] = useState(0);

    const rotateRight = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };
    const rotateLeft = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const getPositionStyles = (normalized) => {
        const shift = "clamp(220px, 60vw, 400px)";

        switch (normalized) {
            case 0:
                return {transform: "translateX(0) scale(1)", zIndex: 3, opacity: 1};
            case 1:
                return {transform: `translateX(${shift}) scale(0.85)`, zIndex: 2, opacity: 0.8};
            case -1:
                return {transform: `translateX(calc(-1 * ${shift})) scale(0.85)`, zIndex: 2, opacity: 0.8};
            default:
                return {transform: "scale(0.5)", opacity: 0};
        }
    };

    return (
    <div id="extras">
        <div className="container px-4 pt-5" id="custom-cards"> 
            <h2 className="pb-2 fs-1 fw-bold text-center">Extra Curricular Activities</h2>
        </div>

        <div className="container px-4" id="custom-cards"> 
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-4"> 
                <div className="col"> 
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                        <div className="d-flex flex-column h-100 px-5 pb-3 text-white text-shadow-1 text-center"> 
                            <p className="mt-4 pt-4 display-6 lh-1 fw-bold text-dark">Treasurer</p>
                            <h3 className="mb-4 pb-4 lh-1 fw-bold text-dark">Computer Science Society (CSS)</h3>
                            <p className="text-dark mt-auto">
                                I’m proud to serve as Treasurer of the Luther College Computer Science Society, where I help turn ideas into action and create opportunities for our tech community to grow and thrive. Here's how I contribute:<br></br><br></br>
                                -Oversee budgeting and financial strategy to power CSS events<br></br>
                                -Lead planning for workshops, hackathons, and speaker sessions<br></br>
                                -Build a strong, connected community of future tech leaders
                            </p>
                        </div> 
                    </div>
                </div> 
                <div className="col"> 
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                        <div className="d-flex flex-column h-100 px-5 pb-3 text-white text-shadow-1 text-center"> 
                            <p className="mt-4 pt-4 display-6 lh-1 fw-bold text-dark">First Year Representative</p>
                            <h3 className="mb-4 pb-4 lh-1 fw-bold text-dark">Student Senate</h3>
                            <p className="text-dark mt-auto">
                                I served as the First-Year Representative in the Student Senate at Luther College, representing the voice of over 400 freshmen and helping drive positive change across campus. What did I do during my time?<br></br><br></br>
                                -Advocated for student concerns by collaborating with 35+ senators<br></br>
                                -Worked on initiatives to address key issues faced by the student body<br></br>
                                -Actively participated in weekly Senate meetings and discussions
                            </p>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 

        <div className="mt-1 mb-4"> 
            <div className="py-2 px-5 text-center bg-dark text-white"> 
                <div className="container py-5 bg-dark text-white">
                    <div className="d-flex bg-dark justify-content-between mb-4">
                        <button className="btn btn-light" onClick={rotateLeft}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/></svg></button>
                        <button className="btn btn-light" onClick={rotateRight}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/></svg></button>
                    </div> 

                    <div className="position-relative mx-auto bg-dark rotator-wrapper">
                        {cards.map((card, i) => {
                            const leftIndex = (index - 1 + cards.length) % cards.length;
                            const centerIndex = index;
                            const rightIndex = (index + 1) % cards.length;

                            let normalized;
                            if (i === centerIndex) normalized = 0;
                            else if (i === rightIndex) normalized = 1;
                            else if (i === leftIndex) normalized = -1;
                            else normalized = 99;

                            return (
                                <div key={i} className="bg-dark text-dark rounded-4 position-absolute d-flex justify-content-center align-items-center p-4 rotator-card" style={{transition: "all 0.5s ease", ...getPositionStyles(normalized)}}>
                                    {card.type === "text" && (
                                        <a href="https://www.linkedin.com/posts/abd785_pi515-dayofinnovation-aquavitals-activity-7321650469389414400-6Vcc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIiNg0BYGpw8JXUT6lKghrPfpbLvS46WXw" className="bg-dark" style={{ textDecoration: "none" }}>
                                            <p className="p-4 fs-4 text-center bg-dark text-light">In March, 2025, my team won <span className="fw-bold bg-dark">2nd place across Iowa</span> at the Pi515 AI Challange!<br></br>We built AquaVitals - A machine learning model for predicting fish survival and water transparency levels built on real time data from the Decorah Fish Hatchery.</p>
                                        </a>
                                    )}
                                    {card.type === "image" && (
                                        <img src={card.src} className="img-fluid rounded-4" style={{ maxHeight: "100%", maxWidth: "100%" }}/>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div> 
        </div>

        <div className="container px-4">
            <div className="row justify-content-center py-4">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                        <div className="d-flex flex-column h-100 px-5 pb-3 text-white text-shadow-1 text-center">
                            <h1 className="mt-4 pt-4 display-6 lh-1 fw-bold text-dark">Dean's List</h1>
                            <h3 className="mb-4 pb-4 lh-1 fw-bold text-dark">Fall 2024 | Spring 2025</h3>
                            <p className="text-dark mt-auto">
                                I’m honored to be recognized by the Dean at Luther College for achieving and maintaining a GPA above 3.5.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Extras;