import React from "react";

function Experience() {
    return (
    // <div id="experience" className="mt-1 mb-3"> 
    //     <div className="py-5 px-5 text-center bg-dark text-white"> 
    //         <div className="container py-5 bg-dark text-white"> 
    //             <h1 className="pb-3 fs-1 fw-bold bg-dark text-white">My Experience</h1> 
                
    //             <p className="col-lg-8 mx-auto fs-3 fw-semibold lead bg-dark text-white">Software Engineering Intern - String Swing USA</p>
    //             <p className="col-lg-8 mx-auto lead bg-dark text-white">
    //                 Built an automated <span className="fw-bold bg-dark">EBITDA</span> reporting pipeline integrating <span className="fw-bold bg-dark">BigCommerce API, Amazon SP-API, and SalesTrac</span> to centralize revenue and cost data for 2 companies, String Swing and Holdup Displays.
    //                 Developed a daily <span className="fw-bold bg-dark">ETL process</span> to clean and aggregate financial data, generating dynamic daily, weekly, and monthly reports in Google Sheets.
    //                 Implemented combined and company-specific <span className="fw-bold bg-dark">financial metrics</span> to provide clear profitability insights and support <span className="fw-bold bg-dark">executive decision making</span>.
    //             </p>

    //             <p className="col-lg-8 mx-auto fs-3 fw-semibold lead bg-dark text-white">Technology Help Desk Technician - Luther College</p> 
    //             <p className="col-lg-8 mx-auto lead bg-dark text-white">
    //                 I diagnosed and resolved <span className="fw-bold bg-dark">hardware, software, and network</span> issues for students, faculty, and staff.
    //                 Documented <span className="fw-bold bg-dark">350+</span> tickets demonstrating strong problem-solving and clear communication skills.
    //                 Made <span className="fw-bold bg-dark">1000+</span> edits to the Technology Help Desk Wiki, a documentation of more than <span className="fw-bold bg-dark">850</span> pages.
    //                 Collaborated with other Luther departments and ITS sub-teams to ensure smooth operations.
    //             </p>
    //         </div> 
    //     </div> 
    // </div>
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
                    Built an automated <strong>EBITDA reporting pipeline</strong> integrating 
                    <strong> BigCommerce API, Amazon SP-API, and SalesTrac</strong> 
                    to centralize revenue and cost data for two companies.
                </li>

                <li className="mb-3">
                    Developed a daily <strong>ETL process</strong> to clean, aggregate, 
                    and generate dynamic daily, weekly, and monthly financial reports in Google Sheets.
                </li>

                <li>
                    Implemented combined and company-specific 
                    <strong> financial metrics</strong> to support 
                    <strong> executive decision-making</strong>.
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
                    Diagnosed and resolved <strong>hardware, software, and network issues</strong>
                    for students, faculty, and staff.
                </li>

                <li className="mb-3">
                    Documented <strong>350+ support tickets</strong>, demonstrating strong
                    problem-solving and communication skills.
                </li>

                <li className="mb-3">
                    Made <strong>1000+ edits</strong> to a technical wiki containing over
                    <strong> 850 pages</strong>.
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