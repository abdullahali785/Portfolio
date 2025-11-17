import React, { useState } from "react";
import CreamBg from "../Assets/CreamBackground.png";
import TeamNorseImage from "../Assets/TeamNorse.jpeg";
import DayOfInnovation from "../Assets/DayOfInnov.jpeg";
import AquaVitals from "../Assets/AquaVitals.jpeg";

function Extras() {
    const cards = [
        { type: "text", header:"AquaVitals", content: "ML model for fish survival"},
        { type: "image", src: AquaVitals },
        { type: "image", src: TeamNorseImage },
        { type: "image", src: DayOfInnovation }
    ];
    const [index, setIndex] = useState(0);

    const rotateRight = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };
    const rotateLeft = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const getPositionStyles = (normalized) => {
        switch (normalized) {
            case 0:
                return {transform: "translateX(0) scale(1)", zIndex: 3, opacity: 1};
            case 1:
                return {transform: "translateX(450px) scale(0.8)", zIndex: 2, opacity: 0.8};
            case -1:
                return {transform: "translateX(-450px) scale(0.8)", zIndex: 2, opacity: 0.8};
            default:
                return {transform: "translateX(0) scale(0.5)", opacity: 0};
        }
    };

    return (
    <div>
        <div className="container px-4 pt-5" id="custom-cards"> 
            <h2 className="pb-2 fs-1 fw-bold text-center">Extra Curricular Activities</h2>
        </div>

        <div className="container px-4" id="custom-cards"> 
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-4"> 
                <div className="col"> 
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                        <div className="d-flex flex-column h-100 px-5 pb-3 text-white text-shadow-1"> 
                            <p className="mt-4 pt-4 display-6 lh-1 fw-bold text-dark">Treasurer</p>
                            <h3 className="mb-4 pb-4 lh-1 fw-bold text-dark">Computer Science Society</h3>
                            <p className="text-dark mt-auto">A 3 step ML model to estimate water transparency and fish survival rates using real-time rainfall and temperature data.</p>
                        </div> 
                    </div>
                </div> 
                <div className="col"> 
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg zoom">
                        <div className="d-flex flex-column h-100 px-5 pb-3 text-shadow-1"> 
                            <p className="mt-4 pt-4 display-6 lh-1 fw-bold text-dark">First Year Representative</p>
                            <h3 className="mb-4 pb-4 lh-1 fw-bold text-dark">Student Senate</h3>
                            <p className="text-dark mt-auto">A full-stack book tracker using Node.js (Express) and PostgreSQL with CRUD functionality and a responsive UI.</p>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 

        <div className="my-1"> 
            <div className="py-2 px-5 text-center bg-dark text-white"> 
                <div className="container py-5 bg-dark text-white">
                    {/* Buttons */}
                    <div className="d-flex bg-dark justify-content-between mb-4">
                        <button className="btn btn-light" onClick={rotateLeft}>←</button>
                        <button className="btn btn-light" onClick={rotateRight}>→</button>
                    </div>

                    {/* Card Area */}
                    <div className="position-relative mx-auto bg-dark" style={{ width: "450px", height: "400px" }}>
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
                                <div key={i} className="bg-dark text-dark rounded-4 shadow position-absolute d-flex justify-content-center align-items-center p-4" style={{width: "450px", height: "400px", transition: "all 0.5s ease", ...getPositionStyles(normalized)}}>
                                    {card.type === "text" && (
                                        <p className="fs-4 text-center bg-dark text-light">{card.header}<br></br>{card.content}</p>
                                    )}
                                    {card.type === "image" && (
                                        <img src={card.src} className="img-fluid rounded-4" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div> 
        </div>
    </div>
    );
}

export default Extras;