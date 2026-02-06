"use client";
import { useState, useEffect } from "react";
import Header from "../components/main/header";
import Loader from "../loading";

const ForensicDepartments = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/forensicpost")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setTabs(data.data);
          setActiveTab(data.data[0].id);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  const activeData = tabs.find((t) => t.id === activeTab);

  return (
    <Header>
      {/* Header Section */}
      <section
        data-aos="fade"
        style={{
          background: 'url("/assets/img/header-nfa.svg") center / cover no-repeat',
          height: "250px",
          marginTop: "-5px",
        }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-sm-12 d-flex align-items-center">
              <h1>
                <strong>Forensic Departments</strong>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/* Tabs / Accordion */}
      <div className="forensic-departments mt-5 mb-5" data-aos="fade-up">
        <div className="container">
          <div className="row mt-4">
            {/* Sidebar (Desktop) */}
            <div className="col-md-4 d-none d-md-block">
              <ul className="nav flex-column nav-pills">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item mb-2">
                    <a
                      className={`nav-link ${
                        activeTab === tab.id
                          ? "bg-success text-white"
                          : "text-black"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {tab.tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion (Mobile) */}
            <div className="col-12 d-md-none">
              <div className="accordion" id="forensicAccordion">
                {tabs.map((tab) => (
                  <div className="accordion-item" key={tab.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeTab === tab.id ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${tab.id}`}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          backgroundColor:
                            activeTab === tab.id ? "green" : "",
                          color: activeTab === tab.id ? "white" : "black",
                        }}
                      >
                        {tab.tab}
                      </button>
                    </h2>

                    <div
                      id={`collapse-${tab.id}`}
                      className={`accordion-collapse collapse ${
                        activeTab === tab.id ? "show" : ""
                      }`}
                      data-bs-parent="#forensicAccordion"
                    >
                      <div className="accordion-body text-black">
                        <h3 className="fw-bold text-success mb-3">
                          {tab.title || tab.tab}
                        </h3>
                        <div
                          className="lead"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content (Desktop) */}
            <div className="col-md-8 d-none d-md-block text-black">
              {activeData && (
                <div className="department-content">
                  <h3 className="fw-bold text-success mb-4">
                    {activeData.title || activeData.tab}
                  </h3>

                  <div
                    className="lead"
                    dangerouslySetInnerHTML={{
                      __html: activeData.content,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ForensicDepartments;
