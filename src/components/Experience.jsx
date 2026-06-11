import React from "react";

function Experience() {
    return (
    <div id="experience" className="py-5 bg-dark text-white">
        <div className="container bg-dark py-5">
            <h1 className="text-center text-white fw-bold mb-5 bg-dark">My Experience</h1>

            {/* Experience Card 1 */}
            <div className="card bg-secondary bg-opacity-10 border-0 shadow-lg mb-5">
            <div className="card-body p-5">

                <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                    <div>
                        <h3 className="fw-bold mb-1">Software Engineering Intern</h3>
                        <h5 className="mb-0">
                            <span style={{ color: "#00158eff" }}>Web Ecommerce Pros</span>
                            <span className="text-secondary fs-6"> &middot; Cheyenne, WY</span>
                        </h5>
                    </div>
                    <span className="badge bg-secondary bg-opacity-25 text-light fs-6 mt-1">June 2026 &ndash; Present</span>
                </div>

                <ul className="fs-5">
                <li className="mb-3">
                    Engineered a <strong>grid bin packing engine</strong> with <strong>4 density tiers</strong>, multi-phase placement, and deterministic seeding to generate gap-aware slatwall layouts from user weapon inventory and wall dimensions.
                </li>

                <li className="mb-3">
                    Built a <strong>gun wall configurator</strong> rendering <strong>4 optimized layouts</strong> on a <strong>Konva.js</strong> canvas with drag-and-drop repositioning, color customization, and PNG export.
                </li>

                <li>
                    Delivered a <strong>zero-dependency BigCommerce module</strong> with dynamic SKU-based pricing, slatwall panel calculation, localStorage cart persistence, and Cache API image preloading.
                </li>
                </ul>

            </div>
            </div>

            {/* Experience Card 2 */}
            <div className="card bg-secondary bg-opacity-10 border-0 shadow-lg mb-5">
            <div className="card-body p-5">

                <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                    <div>
                        <h3 className="fw-bold mb-1">Software Engineering Intern</h3>
                        <h5 className="mb-0">
                            <span style={{ color: "#00158eff" }}>String Swing USA</span>
                            <span className="text-secondary fs-6"> &middot; Ontario, WI</span>
                        </h5>
                    </div>
                    <span className="badge bg-secondary bg-opacity-25 text-light fs-6 mt-1">February 2026 &ndash; May 2026</span>
                </div>

                <ul className="fs-5">
                <li className="mb-3">
                    Built an automated <strong>financial reporting software</strong> integrating <strong>BigCommerce API, Amazon SP-API, and SalesTrac</strong> to centralize revenue and cost data for <strong>2</strong> companies, String Swing and Holdup Displays.
                </li>

                <li className="mb-3">
                    Developed a daily <strong>ETL workflow</strong> to clean and aggregate financial data, generating dynamic daily, weekly, and monthly reports in Google Sheets.
                </li>

                <li>
                    Implemented combined and company-specific <strong>financial metrics</strong> to provide clear profitability insights and support <strong>executive decision making</strong>.
                </li>
                </ul>

            </div>
            </div>

            {/* Experience Card 3 */}
            <div className="card bg-secondary bg-opacity-10 border-0 shadow-lg">
            <div className="card-body p-5">

                <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
                    <div>
                        <h3 className="fw-bold mb-1">Technology Help Desk Technician</h3>
                        <h5 className="mb-0">
                            <span style={{ color: "#00158eff" }}>Luther College</span>
                            <span className="text-secondary fs-6"> &middot; Decorah, IA</span>
                        </h5>
                    </div>
                    <span className="badge bg-secondary bg-opacity-25 text-light fs-6 mt-1">March 2025 &ndash; Present</span>
                </div>

                <ul className="fs-5">
                    <li className="mb-3">
                        Diagnosed and resolved <strong>hardware, software, and network issues</strong> for students, faculty, and staff.
                    </li>

                    <li className="mb-3">
                        Documented <strong>350+ support tickets</strong>, demonstrating strong problem-solving and communication skills.
                    </li>

                    <li className="mb-3">
                        Made <strong>1000+ edits</strong> to the Technology Help Desk Wiki, a documentation of more than <strong>850 articles</strong>.
                    </li>

                    <li>
                        Collaborated with other Luther departments and ITS sub-teams to ensure smooth operations.
                    </li>
                </ul>

            </div>
            </div>

        </div>
    </div>
    );
}

export default Experience;
