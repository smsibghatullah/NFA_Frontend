"use client"
import Image from "next/image";
import Header from "../components/main/header";
import { useState } from "react";

export default function Pioneersofforensics() {
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
                  <strong>Pioneers of Forensics:</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>
        <br />
        <Pof></Pof>
      </Header>
    </>
  );
}


const Pof = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }} data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
                    Star Forensic Experts in Pakistan
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
                    Star Forensic Expert in the World
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "tab-1" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="alert alert-warning" role="alert">
                      No data Found!
                    </div>
                  </div>
                )}
                {activeTab === "tab-2" && (
                  <div className="tab-pane fade show active" role="tabpanel">
                    <div className="alert alert-warning" role="alert">
                    No data Found!
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