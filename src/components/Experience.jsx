import React from "react";

function Experience() {
    return (
    <div id="experience" className="mt-1 mb-3"> 
        <div className="py-5 px-5 text-center bg-dark text-white"> 
            <div className="container py-5 bg-dark text-white"> 
                <h1 className="pb-3 fs-1 fw-bold bg-dark text-white">My Experience</h1> 
                
                <p className="col-lg-8 mx-auto fs-3 fw-semibold lead bg-dark text-white">Software Engineering Intern - String Swing USA</p>
                <p className="col-lg-8 mx-auto lead bg-dark text-white">
                    Built an automated <span className="fw-bold bg-dark">EBITDA</span> reporting pipeline integrating <span className="fw-bold bg-dark">BigCommerce API, Amazon SP-API, and SalesTrac</span> to centralize revenue and cost data for 2 companies, String Swing and Holdup Displays.
                    Developed a daily <span className="fw-bold bg-dark">ETL process</span> to clean and aggregate financial data, generating dynamic daily, weekly, and monthly reports in Google Sheets.
                    Implemented combined and company-specific <span className="fw-bold bg-dark">financial metrics</span> to provide clear profitability insights and support <span className="fw-bold bg-dark">executive decision making</span>.
                </p>

                <p className="col-lg-8 mx-auto fs-3 fw-semibold lead bg-dark text-white">Technology Help Desk Technician - Luther College</p> 
                <p className="col-lg-8 mx-auto lead bg-dark text-white">
                    I diagnosed and resolved <span className="fw-bold bg-dark">hardware, software, and network</span> issues for students, faculty, and staff.
                    Documented <span className="fw-bold bg-dark">350+</span> tickets demonstrating strong problem-solving and clear communication skills.
                    Made <span className="fw-bold bg-dark">1000+</span> edits to the Technology Help Desk Wiki, a documentation of more than <span className="fw-bold bg-dark">850</span> pages.
                    Collaborated with other Luther departments and ITS sub-teams to ensure smooth operations.
                </p>
            </div> 
        </div> 
    </div>
    );
}

export default Experience;