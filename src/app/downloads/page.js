"use client";
import { useEffect, useState } from "react";
import Header from "../components/main/header";

const Careers = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const res = await fetch("/api/download");
        const data = await res.json();
        if (data.status) {
          setDownloads(data.downloads);
        }
      } catch (error) {
        console.error("Error fetching downloads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []);

  return (
    <>
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
            {loading ? (
              <p>Loading downloads...</p>
            ) : (
              downloads.map((item) => (
                <div key={item.id} className="col-md-6 mb-4">
                  <a
                    href={item.file_url} // use file_url from API
                    className="text-decoration-none"
                    target="_blank"
                    download={item.file.includes("DFRF") ? true : false}
                  >
                    <div className="card shadow-sm position-relative" data-aos="fade-up">
                      <div className="card-body">
                        <h5 className="card-title text-dark">
                          <strong>{item.name}</strong>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </Header>
    </>
  );
};

export default Careers;
