"use client";

import Header from "../components/main/header";
import { useEffect, useState } from "react";

export default function Vision() {
  const [vision, setVision] = useState("");

  useEffect(() => {
    fetch("/api/vision")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setVision(data.data.content);
        }
      })
      .catch((err) => console.error(err));
  }, []);

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
                className="col-sm-12 d-flex flex-column align-items-center justify-content-center align-items-start"
              >
                <h1>
                  <strong>Our Vision</strong>
                </h1>
                <p className="lead">Precision, Credibility, Authenticity</p>
              </div>
            </div>
          </div>
        </section>

        <br />

        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="lead text-center"
                data-aos="zoom-in"
                dangerouslySetInnerHTML={{ __html: vision }}
              />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
}
