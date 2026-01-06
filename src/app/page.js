"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import "aos/dist/aos.css";
import Header from "./components/main/header";
import About from "./components/main/about-company";
import Services from "./components/main/services";
import Link from "next/link";
import Loader from "./loading";

export default function Home() {
  return (
    <>
      <div>
        <Suspense fallback={<Loader />}>
          <Header>
            <HeroHeader />
            <About />
            <div
              style={{
                marginTop: "80px",
                background:
                  "url('assets/img/molecules.svg') top / cover no-repeat, #F5F8FD",
                paddingTop: "80px",
                paddingBottom: "80px",
              }}
            >
              <Services isserviceshow={true} />
            </div>
            <ForensicDepartments />
            <TrainingAndEducation />
          </Header>
        </Suspense>
      </div>
    </>
  );
}

const HeroHeader = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section
          data-aos="fade"
          style={{
            height: "80vh",
            padding: "20px 0px",
            marginTop: "-5px",
          }}
        >
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              {/* Left Column */}
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="col-md-6 d-flex flex-column align-items-center justify-content-sm-center align-items-sm-start justify-content-center align-items-start"
                style={{ height: "100%" }}
              >
                <h1
                  style={{
                    fontSize: "3em",
                    fontFamily: "Livvic, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  <strong>Providing Best</strong>
                  <br />
                  <span style={{ color: "#137035" }}>
                    <strong>Forensics</strong>
                  </span>
                  <strong>&nbsp;Service</strong>
                  <br />
                </h1>
                <p style={{ fontSize: "18px" }}>
                  Management team of National Forensics Agency with all its
                  <br />
                  employees are committed to maintain quality of laboratory
                  services.
                  <br />
                </p>
                <div className="d-flex" style={{ marginTop: "20px" }}>
                  <Link
                    href="/about"
                    className="btn btn-success"
                    style={{
                      borderRadius: "0px",
                      borderWidth: "2px",
                      marginRight: "10px",
                      width: "200px",
                    }}
                  >
                    <strong>About Us</strong>
                    <br />
                  </Link>
                  <Link
                    href="contact"
                    className="btn btn-dark"
                    style={{
                      borderRadius: "0px",
                      borderWidth: "2px",
                      marginRight: "10px",
                      width: "200px",
                    }}
                  >
                    <strong>Contact Us</strong>
                    <br />
                  </Link>
                </div>
              </div>
              {/* Right Column with Images */}
              <div className="col-md-6 d-flex flex-column col-header">
                <Image
                  className="globe-header mb-3" // Adds margin between the two images
                  src="/assets/img/Globe-header.svg"
                  alt="Globe Header"
                  width={500}
                  height={500}
                />
                <Image
                  data-aos="zoom-in"
                  className="order-1 global-labels"
                  src="/assets/img/globe-label.svg"
                  alt="Globe Labels"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <video
        autoPlay
        loop
        muted
        className="background-video background-video1 position-absolute top-0 start-0 w-100"
        style={{ objectFit: "cover", zIndex: -1 }}
      >
        <source
          src="/assets/video/nfa-slider-heroheader.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

const ForensicDepartments = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div
      style={{ marginTop: "60px", marginBottom: "60px" }}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="justify-content-between align-items-center d-flex">
              <h2
                className="text-left"
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  marginBottom: "40px",
                }}
              >
                <strong>Forensic Departments</strong>
                <br />
              </h2>
              <Link href="/departments" style={{ color: "rgb(0,0,0)" }}>
                View All
              </Link>
            </div>
            <div className="department-tab">
              <ul className="nav nav-tabs nav-fill" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-1" ? "active" : ""
                    }`}
                    role="tab"
                    onClick={() => setActiveTab("tab-1")}
                  >
                    Fingerprint Analysis
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-2" ? "active" : ""
                    }`}
                    role="tab"
                    onClick={() => setActiveTab("tab-2")}
                  >
                    Digital Forensics
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-3" ? "active" : ""
                    }`}
                    role="tab"
                    onClick={() => setActiveTab("tab-3")}
                  >
                    Narcotics Analysis
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-4" ? "active" : ""
                    }`}
                    role="tab"
                    onClick={() => setActiveTab("tab-4")}
                  >
                    Crime Scene Investigation
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${
                      activeTab === "tab-5" ? "active" : ""
                    }`}
                    role="tab"
                    onClick={() => setActiveTab("tab-5")}
                  >
                    Firearms &amp; Tool Marks
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "tab-1" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="row">
                      <div className="col-md-5" style={{ padding: "10px" }}>
                        <Image
                          width={500}
                          height={500}
                          className="img-fluid w-100"
                          src="/assets/img/fingerprint.png"
                          alt="Fingerprint Analysis"
                        />
                      </div>
                      <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                        <h3
                          style={{
                            fontSize: "1.4em",
                            color: "rgb(0,128,0)",
                            marginBottom: "26px",
                          }}
                        >
                          <strong>Fingerprint Analysis</strong>
                        </h3>
                        <p style={{ fontSize: "18px" }}>
                          1. Collection and comparison of latent and patent
                          fingerprints.
                          <br />
                          2. Automated matching using biometric systems.
                          <br />
                          3. Database management for quick and accurate
                          identification.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-2" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="row">
                      <div className="col-md-5">
                        <Image
                          width={500}
                          height={500}
                          className="img-fluid w-100"
                          src="/assets/img/Digital%20Forensics.webp"
                          alt="Digital Forensics"
                        />
                      </div>
                      <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                        <h3
                          style={{
                            fontSize: "1.4em",
                            color: "rgb(0,128,0)",
                            marginBottom: "26px",
                          }}
                        >
                          <strong>Digital Forensics</strong>
                        </h3>
                        <p className="text-left" style={{ fontSize: "18px" }}>
                          Houses experts in mobile, network, and AI-generated
                          deep fakes.
                          <br />
                          Equipped with cutting-edge tools for data extraction
                          and cybercrime investigations.
                          <br />
                          <br />
                          <strong>Mobile Forensics</strong>:
                          <br />
                          1. Extraction and analysis of data from mobile
                          devices, including deleted or hidden data.
                          <br />
                          2. Specialization in breaking security features like
                          PINs and encrypted storage.
                          <br />
                          <br />
                          <strong>Network Forensics</strong>:
                          <br />
                          1. Tracking and investigating cyber intrusions,
                          malware attacks, and data breaches.
                          <br />
                          2. Providing detailed reports for cybercrime
                          cases......
                          <br />
                        </p>
                        <Link
                          href="/departments"
                          className="btn btn-dark"
                          style={{
                            borderRadius: "0px",
                            borderWidth: "2px",
                            marginRight: "10px",
                            width: "200px",
                          }}
                        >
                          <strong>Read More</strong>
                          <br />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-3" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="row">
                      <div className="col-md-5">
                        <Image
                          width={500}
                          height={500}
                          className="img-fluid w-100"
                          src="/assets/img/Narcotics%20Analysis.webp"
                          alt="Narcotics Analysis"
                        />
                      </div>
                      <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                        <h3
                          style={{
                            fontSize: "1.4em",
                            color: "rgb(0,128,0)",
                            marginBottom: "26px",
                          }}
                        >
                          <strong>Narcotics Analysis</strong>
                        </h3>
                        <p style={{ fontSize: "18px" }}>
                          1. Identification of illegal substances in seized
                          materials.
                          <br />
                          2. Quantitative analysis to determine purity and
                          weight.
                          <br />
                          3. Support for law enforcement in combating
                          drug-related crimes.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-4" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="row">
                      <div className="col-md-5">
                        <Image
                          width={500}
                          height={500}
                          className="img-fluid w-100"
                          src="/assets/img/Crime%20Scene%20Investigation.jpg"
                          alt="Crime Scene Investigation"
                        />
                      </div>
                      <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                        <h3
                          style={{
                            fontSize: "1.4em",
                            color: "rgb(0,128,0)",
                            marginBottom: "26px",
                          }}
                        >
                          <strong>Crime Scene Investigation</strong>
                        </h3>
                        <p style={{ fontSize: "18px" }}>
                          1. On-field evidence collection and documentation.
                          <br />
                          2. Reconstruction of events based on evidence
                          placement.
                          <br />
                          3. Specialized mock crime scenes for training
                          purposes.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab-5" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="row">
                      <div className="col-md-5">
                        <Image
                          width={500}
                          height={500}
                          className="img-fluid w-100"
                          src="/assets/img/Firearms%20&%20Tool%20Marks.webp"
                          alt="Firearms & Tool Marks"
                        />
                      </div>
                      <div className="col d-xl-flex flex-column justify-content-xl-center align-items-xl-start">
                        <h3
                          style={{
                            fontSize: "1.4em",
                            color: "rgb(0,128,0)",
                            marginBottom: "26px",
                          }}
                        >
                          <strong>Firearms &amp; Tool Marks</strong>
                        </h3>
                        <p style={{ fontSize: "18px" }}>
                          1. Ballistics analysis to match firearms with crime
                          scenes.
                          <br />
                          2. Tool mark examination for evidence like tampered
                          locks or cut materials.
                          <br />
                          3. Creation of a national database for firearm
                          characteristics.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainingAndEducation = () => {
  return (
    <div
      style={{ background: "#f2f7ff", padding: "50px 0" }}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image
              width={500}
              height={500}
              className="img-fluid w-100"
              src="assets/img/training-education-nfa.svg"
              style={{ width: "100%" }}
              alt="Training and Education"
            />
          </div>
          <div className="col-md-6">
            <h2
              className="text-left"
              style={{
                marginTop: "15px",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <strong>Training and Education</strong>
              <br />
            </h2>
            {/* <ul
              className="list-unstyled list-training"
              style={{ fontSize: "20px" }}
            >
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Forensic scientists of the agency are provided continuing
                education in-house and abroad on a regular basis. Forensic
                scientists from other laboratories in the country get training
                in the practicing disciplines of the agency.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Throughout the year, a number of study tours from various
                institutions arrive at the NFA to get an orientation about the
                activities of the agency.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Construction of a dedicated training lab is underway
                beside the NFA premises.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Training courses for personnel of law enforcement
                agencies are conducted throughout the year.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Seminars, trainings, and workshops on identification,
                collection, and preservation of evidence are conducted on a need
                basis by the Divisional Crime Scene Units of the NFA in the
                respective divisions.
                <br />
              </li>
            </ul> */}
            <ul
              className="list-unstyled list-training"
              style={{ fontSize: "20px" }}
            >
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp;In-house and international training programs are regularly provided to forensic scientists of the agency.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Forensic scientists from other national laboratories receive training in the agency's practicing disciplines.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Institutions frequently visit the NFA for orientation programs.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; A dedicated training lab is under construction near the NFA premises.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Year-round training courses are conducted for law enforcement personnel.
                <br />
              </li>
              <li>
                <i
                  className="fa fa-check"
                  style={{ color: "rgb(0,124,0)" }}
                ></i>
                &nbsp; Divisional Crime Scene Units organize need-based seminars, training sessions, and workshops on evidence identification, collection, and preservation.
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
