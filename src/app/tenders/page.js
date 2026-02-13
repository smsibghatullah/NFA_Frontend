"use client";

import { useEffect, useState } from "react";
import Header from "../components/main/header";

export default function Tenders() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    fetch("/api/tenders") // only calling Next.js API route
      .then((res) => res.json())
      .then((data) => setTenders(data.tenders || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Header>
      <section
        data-aos="fade"
        style={{
          background: 'url("/assets/img/header-nfa.svg") center / cover no-repeat',
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
              <h1><strong>Tender & Publications</strong></h1>
            </div>
          </div>
        </div>
      </section>

      <br />

      <div className="container">
        <div className="row">
          {tenders.map((tender) => (
            <div key={tender.id} className="col-md-6 mb-4">
              <a
                href={tender.file_url}
                className="text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>{tender.title}</strong>

                      {/* Badge */}
                      {tender.status === "new" && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          New
                          <span className="visually-hidden">New</span>
                        </span>
                      )}
                      {tender.status === "closed" && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                          Closed
                          <span className="visually-hidden">Closed</span>
                        </span>
                      )}
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Header>
  );
}
