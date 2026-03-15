import React from "react";

function Experience() {
    return (
    <div id="experience" className="py-5 bg-dark text-white">
        <div className="container bg-dark py-5">
            <h1 className="text-center text-white fw-bold mb-5 bg-dark">My Experience</h1>
            {/* Experience Card 1 */}
            <div className="card bg-secondary bg-opacity-10 border-0 shadow-lg mb-5">
            <div className="card-body p-5">

                <h3 className="fw-bold">Software Engineering Intern</h3>
                <h5 className="mb-4"><span style={{ color: "#00158eff" }}>String Swing USA</span></h5>

                <ul className="fs-5">
                <li className="mb-3">
                    Built an automated <strong>financial reporting software</strong> integrating <strong>BigCommerce API, Amazon SP-API, and SalesTrac</strong> to centralize revenue and cost data for <strong>2</strong> companies.
                </li>

                <li className="mb-3">
                    Developed a daily <strong>ETL workflow</strong> to clean, aggregate, and generate dynamic daily, weekly, and monthly financial reports in Google Sheets.
                </li>

                <li>
                    Implemented combined and company-specific <strong>financial metrics</strong> to support <strong>executive decision making</strong>.
                </li>
                </ul>

            </div>
            </div>

            {/* Experience Card 2 */}
            <div className="card bg-secondary bg-opacity-10 border-0 shadow-lg">
            <div className="card-body p-5">

                <h3 className="fw-bold">Technology Help Desk Technician</h3>
                <h5 className="mb-4"><span style={{ color: "#00158eff" }}>Luther College</span></h5>

                <ul className="fs-5">
                    <li className="mb-3">
                        Diagnosed and resolved <strong>hardware, software, and network issues</strong> for students, faculty, and staff.
                    </li>

                    <li className="mb-3">
                        Documented <strong>400+ support tickets</strong>, demonstrating strong problem-solving and communication skills.
                    </li>

                    <li className="mb-3">
                        Made <strong>1000+ edits</strong> to a technical wiki containing over <strong>850 pages</strong>.
                    </li>

                    <li>
                        Collaborated with multiple departments and ITS sub-teams to ensure smooth operations.
                    </li>
                </ul>

            </div>
            </div>

        </div>
    </div>
    );
}

export default Experience;