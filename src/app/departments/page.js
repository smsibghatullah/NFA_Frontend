"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "../components/main/header";

const ForensicDepartments = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const tabs = [
    {
      id: "tab-1",
      label: "Fingerprint Analysis",
      content: (
        <>
          <h3 className="fw-bold text-success">Fingerprint Analysis</h3>
          <p className="lead">
            1. Collection and comparison of latent and patent fingerprints.
            <br />
            2. Automated matching using biometric systems.
            <br />
            3. Database management for quick and accurate identification.
          </p>
        </>
      ),
    },
    {
      id: "tab-2",
      label: "Digital Forensics",
      content: (
        <>
          <h2 className="fw-bold text-success">Digital Forensics</h2>
          <p className="lead">
            Houses experts in mobile, network, and AI-generated deep fakes.
            <br />
            Equipped with cutting-edge tools for data extraction and cybercrime
            investigations.
          </p>
          <div className="service">
            <h3 className="fs-5 fw-bold">1. Mobile Forensics:</h3>
            <ul>
              <li className="lead">
                Extraction and analysis of data from mobile devices, including
                deleted or hidden data.
              </li>
              <li className="lead">
                Specialization in breaking security features like PINs and
                encrypted storage.
              </li>
            </ul>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">2. Network Forensics:</h3>
            <ul>
              <li className="lead">
                Tracking and investigating cyber intrusions, malware attacks,
                and data breaches.
              </li>
              <li className="lead">Providing detailed reports for cybercrime cases.</li>
            </ul>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">3. Deep Fake Analysis:</h3>
            <ul>
              <li className="lead">
                Identifying AI-generated manipulations in audio, video, and
                images.
              </li>
              <li className="lead">Authentication of media content for legal purposes.</li>
            </ul>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">4. Chip-Off Techniques:</h3>
            <ul>
              <li className="lead">
                Advanced methods to retrieve data directly from a device’s
                memory chip.
              </li>
              <li className="lead">Ideal for highly secure or damaged devices.</li>
            </ul>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">5. Drone</h3>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">6. DVR/NVR</h3>
          </div>
          <div className="service">
            <h3 className="fs-5 fw-bold">7. A/V Forensics</h3>
          </div>
        </>
      ),
    },
    {
      id: "tab-3",
      label: "Narcotics Analysis",
      content: (
        <>
          <h3
            style={{
              fontSize: "1.4em",
              color: "rgb(0,128,0)",
              marginBottom: "26px",
            }}
          >
            <strong>Narcotics Analysis</strong>
          </h3>
          <p className="lead">
            1. Identification of illegal substances in seized materials.
            <br />
            2. Quantitative analysis to determine purity and weight.
            <br />
            3. Support for law enforcement in combating drug-related crimes.
          </p>
        </>
      ),
    },
    {
      id: "tab-4",
      label: "Crime Scene Investigation",
      content: (
        <>
          <h3
            style={{
              fontSize: "1.4em",
              color: "rgb(0,128,0)",
              marginBottom: "26px",
            }}
          >
            <strong>Crime Scene Investigation</strong>
          </h3>
          <p className="lead">
            1. On-field evidence collection and documentation.
            <br />
            2. Reconstruction of events based on evidence placement.
            <br />
            3. Specialized mock crime scenes for training purposes.
          </p>
        </>
      ),
    },
    {
      id: "tab-5",
      label: "Firearms & Tool Marks",
      content: (
        <>
          <h3
            style={{
              fontSize: "1.4em",
              color: "rgb(0,128,0)",
              marginBottom: "26px",
            }}
          >
            <strong>Firearms &amp; Tool Marks</strong>
          </h3>
          <p className="lead">
            1. Ballistics analysis to match firearms with crime scenes.
            <br />
            2. Tool mark examination for evidence like tampered locks or cut
            materials.
            <br />
            3. Creation of a national database for firearm characteristics.
          </p>
        </>
      ),
    },
    {
      id: "tab-6",
      label: "DNA Forensics",
      content: (
        <>
          <h3 className="fw-bold text-success">DNA Forensics</h3>
          <p className="lead">
            1. DNA extraction and profiling for crime scene evidence.
            <br />
            2. Paternity testing and identification of unknown remains.
            <br />
            3. Specialized in contamination-free processing and analysis.
          </p>
        </>
      ),
    },
    {
      id: "tab-7",
      label: "Questioned Documents",
      content: (
        <>
          {" "}
          <h3 className="fw-bold text-success">Questioned Documents</h3>
          <p className="lead">
            1. Authentication of handwritten notes, printed materials, and
            official documents.
            <br />
            2. Detection of forgery, alterations, or counterfeit documents.
            <br />
            3. Ink and paper analysis using advanced spectroscopic techniques.
          </p>
        </>
      ),
    },
    {
      id: "tab-8",
      label: "Toxicology",
      content: (
        <>
          {" "}
          <h3 className="fw-bold text-success">Toxicology</h3>
          <p className="lead">
            1. Analysis of poisons, drugs, and alcohol in biological samples.
            <br />
            2. Detection of trace toxic substances in crime scene evidence.
            <br />
            3. Specialized testing for workplace safety compliance.
          </p>
        </>
      ),
    },
    {
      id: "tab-9",
      label: "Serology",
      content: (
        <>
          {" "}
          <h3 className="fw-bold text-success">Serology</h3>
          <p className="lead">
            1. Blood, saliva, and other bodily fluid analysis to determine origin and type.
            <br />
            2. Stain pattern analysis for crime scene reconstructions.
          </p>
        </>
      ),
    },
    {
      id: "tab-10",
      label: "Pathology",
      content: (
        <>
          {" "}
          <h3 className="fw-bold text-success">Pathology</h3>
          <p className="lead">
            1. Autopsies and detailed medical examinations to determine cause and manner of death.
            <br />
            2. Specialized in handling violent crime, trauma, or poisoning cases.
          </p>
        </>
      ),
    },
    {
      id: "tab-11",
      label: "Explosives Analysis",
      content: (
        <>
          {" "}
          <h3 className="fw-bold text-success">Explosives Analysis</h3>
          <p className="lead">
            1. Identification of explosive residues, components, and manufacturing techniques.
            <br />
            2. Analysis of bombing scenes for evidence reconstruction.
          </p>
        </>
      ),
    },
  ];

  return (
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
                <strong>Forensic Departments</strong>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="forensic-departments mt-5 mb-5" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div className="container">
          <div className="row mt-4">
            {/* Sidebar for Desktop */}
            <div className="col-md-4 d-none d-md-block">
              <ul className="nav flex-column nav-pills" role="tablist">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item mb-2">
                    <a
                      className={`nav-link text-black ${
                        activeTab === tab.id
                          ? "active bg-success text-white"
                          : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      role="tab"
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion for Mobile */}
            <div className="col-12 d-md-none">
              <div className="accordion" id="forensicAccordion">
                {tabs.map((tab) => (
                  <div className="accordion-item" key={tab.id}>
                    <h2 className="accordion-header" id={`heading-${tab.id}`}>
                      <button
                        className={`accordion-button ${
                          activeTab === tab.id ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${tab.id}`}
                        aria-expanded={activeTab === tab.id}
                        aria-controls={`collapse-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        {tab.label}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${tab.id}`}
                      className={`accordion-collapse collapse ${
                        activeTab === tab.id ? "show" : ""
                      }`}
                      aria-labelledby={`heading-${tab.id}`}
                      data-bs-parent="#forensicAccordion"
                    >
                      <div className="accordion-body">{tab.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tab Content for Desktop */}
            <div className="col-md-8 d-none d-md-block">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ForensicDepartments;
