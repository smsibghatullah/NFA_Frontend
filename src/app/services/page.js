"use client"
import { useState } from "react";
import Header from "../components/main/header";
import Service from "../components/main/services";

export default function Services() {
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
                    <strong>Our Service</strong>
                  </h1>
                  <p className="lead">
                    Comprehensive Forensic Solutions for Every Investigation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <br />
          <div
            style={{
              marginTop: "-20px",
              background:
                "url('assets/img/molecules.svg') top / cover no-repeat,rgba(241, 241, 241, 0.44)",
              paddingTop: "80px",
              paddingBottom: "80px",
            }}
          >
            <Service isserviceshow={false}></Service>
          </div>
          <hr></hr>
        </Header>
      </>
    );
}
