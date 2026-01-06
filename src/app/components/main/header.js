"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import GoogleTranslate from "./GoogleTranslate";
import SearchCNIC from "./SearchCNIC";

const Master_page = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // Configuration options
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
    });
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap.bundle.min")
      : null;
  }, []);
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
      <InfoDesk />
      <Footer />
      {/* <SearchCNIC /> */}
    </>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleViewMore = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const provinces = [
    "Islamabad",
    "Punjab",
    "KPK",
    "AJK",
    "Sindh",
    "Gilgit Baltistan",
    "Balochistan",
  ];

  return (
    <div className="side-bar mobiledivhide">
      <div className="d-flex flex-column justify-content-end mobiledivhide">
        {provinces
          .slice(0, isExpanded ? provinces.length : 4)
          .map((province, index) => (
            <button
              key={index}
              className="btn btn-dark text-uppercase btn-sidebar"
              type="button"
              data-aos="fade-left"
              data-aos-offset={300 - index * 100}
              data-aos-easing="ease-in-sine"
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                width: "140px",
                fontSize: "14px",
              }}
            >
              {province}
            </button>
          ))}

        <button
          className="btn btn-dark text-uppercase btn-sidebar"
          type="button"
          onClick={toggleViewMore}
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            width: "140px",
            fontSize: "14px",
          }}
        >
          {isExpanded ? "View Less" : "View More.."}
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <div style={{ background: "#104122" }} data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-md-flex align-items-md-center">
              <i
                className="fa fa-envelope-o"
                style={{ color: "rgb(255,255,255)", fontSize: "20px" }}
              ></i>
              <span
                style={{
                  marginLeft: "10px",
                  marginRight: "20px",
                  color: "rgb(255,255,255)",
                }}
              >
                info@nfa.gov.pk
                <br />
              </span>
              <i
                className="fa fa-phone"
                style={{ color: "rgb(255,255,255)", fontSize: "20px" }}
              ></i>
              <span style={{ marginLeft: "10px", color: "rgb(255,255,255)" }}>
                051-9257807
                <br />
              </span>
            </div>
            <div className="col-md-6 d-xl-flex justify-content-xl-end align-items-xl-center mobiledivhide centeronmobile">
              {/* <span
                style={{
                  marginLeft: "10px",
                  color: "rgb(255,255,255)",
                  marginRight: "10px",
                }}
              >
                Training Programs
                <br />
              </span> */}
              {/* <select
                className="bg-white text-dark border-0"
                style={{ padding: "10px", marginRight: "10px" }}
              >
                <option>Select Language</option>
              </select> */}
              <GoogleTranslate></GoogleTranslate>
              <i
                className="fa fa-facebook-square"
                style={{
                  fontSize: "20px",
                  color: "rgb(255,255,255)",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="fa fa-linkedin-square"
                style={{
                  fontSize: "20px",
                  color: "rgb(255,255,255)",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="fa fa-youtube-play"
                style={{
                  fontSize: "20px",
                  color: "rgb(255,255,255)",
                  marginRight: "10px",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" data-aos="fade-down">
        <div className="container header-cont">
          <div className="row p-0 m-0">
            <div className="col p-0 m-0">
              <nav
                className="navbar navbar-light navbar-expand-lg p-0 m-0"
                style={{ background: "#ffffff" }}
              >
                <div className="container-fluid">
                  <Link className="navbar-brand" href="/">
                    <Image
                      src="/assets/img/NFA-logo.svg"
                      alt="NFA Logo"
                      width={240}
                      height={60}
                    />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navcol-1"
                    aria-controls="navcol-1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="nav-link active" href="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/vision">
                          Vision
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/services">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/departments">
                          Forensic Departments
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="/pioneers-of-forensics"
                        >
                          Pioneers of Forensics
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" href="/contact">
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link position-relative active"
                          href="/careers"
                        >
                          Careers
                        </Link>
                      </li>
                       <li className="nav-item">
                        <Link className="nav-link active" href="/searchcnic">
                          Application Status
                        </Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link
                          href="/service-request-form"
                          className="btn btn-outline-dark btn-sm"
                          style={{ borderRadius: "0px", borderWidth: "2px" }}
                        >
                          <strong>Service Request Form</strong>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <marquee
        className="marq p-2 m-0"
        direction="left"
        data-aos="fade-down"
        loop
      >
        <span className="text-danger">
          <strong>Announcement: </strong>
        </span>
        Transformation of NFSA to NFA – Strengthening Forensic Science in
        Pakistan.
      </marquee>
    </>
  );
};

const InfoDesk = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-left"
              style={{
                marginTop: "15px",
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <strong>INFO&nbsp;DESK</strong>
              <br />
            </h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-md-3 text-center">
            <Link href="/downloads">
            <Image
              style={{ height: "100%", width: "54%" }}
              width={100}
              height={100}
              className="img-fluid w-50"
              data-aos="flip-left"
              src="assets/img/download.svg"
              alt="Downloads"
            />
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <Image
              style={{ height: "100%", width: "50%" }}
              width={100}
              height={100}
              className="img-fluid"
              data-aos="flip-left"
              src="assets/img/Guidlines.svg"
              alt="Guidelines"
            />
          </div>
          <div className="col-md-3 text-center">
            <Image
              style={{ height: "100%", width: "54%" }}
              width={100}
              height={100}
              className="img-fluid"
              data-aos="flip-left"
              src="assets/img/newsletter.svg"
              alt="Newsletter"
            />
          </div>
          <div className="col-md-3 text-center">
            <Image
              style={{ height: "100%", width: "54%" }}
              width={100}
              height={100}
              className="img-fluid"
              data-aos="flip-left"
              src="assets/img/caselog.svg"
              alt="Case Log"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      {/* Top Banner */}
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div className="row">
          <div className="col-md-12">
            <Image
              width={500}
              height={500}
              className="img-fluid w-100"
              src="assets/img/pakistan.svg"
              style={{ width: "100%" }}
              alt="Pakistan Banner"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              {/* Footer Text */}
              <div className="col-md-6 item text">
                <Image
                  width={400}
                  height={500}
                  className="img-fluid"
                  src="assets/img/footer-nfa.svg"
                  alt="NFA Logo"
                />
                <p style={{ marginTop: "20px" }}>
                  To establish NFA as the leading authority in forensic
                  sciences, ensuring
                  <br />
                  scientific precision, maintaining credibility, and upholding
                  authenticity in
                  <br />
                  the pursuit of justice across Pakistan and beyond.
                  <br />
                </p>
              </div>

              {/* Company Section */}
              <div className="col-sm-6 col-md-3 item">
                <h3 className="text-uppercase">Company</h3>
                <ul>
 <li>
                    <a href="/tenders">Tender & Publications</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              {/* About Us Section */}
              <div className="col-sm-6 col-md-3 item">
                <h3 className="text-uppercase">About Us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <strong>Address:</strong> H-11/4 Opposite Police Lines:
                      Plot 1:2-27:28 Islamabad, 44000 Pakistan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>Phone:</strong> 051-9257807
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>Email:</strong> info@nfa.gov.pk
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="col item social">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook pb-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter pb-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram pb-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M16.5 7.5v.01" />
                  </svg>
                </a>
                <a href="http://Webmail.nfa.gov.pk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-inbox"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M4 13h3l3 3h4l3 -3h3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="copyright" style={{ fontSize: "14px" }}>
              <br />
              Copyright © 2025 National Forensics Agency, Pakistan. All rights
              reserved.
              <br />
            </p>
            <p className="copyright" style={{ fontSize: "14px" }}>
              Crafted with care by{" "}
              <a
                className="text-white-50"
                href="https://axitechnologies.ai/"
                target="_blank"
              >
                <strong>AxI Technologies </strong>
              </a>
              .
              <br />
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Master_page;
