"use client";
import Header from "../components/main/header";

const Careers = () => {
  return (
    <>
      <Header>
        <section
          data-aos="fade"
          style={{
            background:
              'url("/assets/img/header-nfa.svg") center / cover no-repeat',
            height: "250px",
            marginTop: "-5px",
          }}
        >
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div
                data-aos="fade-right"
                className="col-sm-12 d-flex flex-column align-items-center justify-content-sm-center align-items-start justify-content-center align-items-start"
              >
                <h1>
                  <strong>Downloads</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="container">
          <div className="row">
            {/* Card for Job Advertisement */}
            <div className="col-md-6 mb-4">
              <a
                href="/downloads/NFA-ACT-2024.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>NFA ACT 2024</strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/downloads/PUBLIC SOP National Forensics Agency.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>PUBLIC SOP National Forensics Agency</strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/downloads/NFA-Form-(DFRF-01)_015212.pdf"
                className="text-decoration-none"
                download
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Digital Forensics Request/Analysis</strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 mb-4">
              <a
                href="/downloads/Annexure-B.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Chain of Custody Form</strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </Header>
    </>
  );
};

export default Careers;
