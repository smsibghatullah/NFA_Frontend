"use client";

import React, { useState } from "react";
import Header from "../components/main/header";
import "../page.module.css";

function SearchCNIC() {
  const [cnic, setCnic] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const validateCNIC = (value) => {
    const trimmed = value.replace(/\s+/g, "");
    if (trimmed.includes("-"))
      return { valid: false, message: "❌ CNIC should not contain dashes (-)" };
    if (!/^\d{13}$/.test(trimmed))
      return {
        valid: false,
        message:
          "❌ CNIC must be exactly 13 digits with no spaces or dashes",
      };
    return { valid: true, cleaned: trimmed };
  };

  const handleSearch = async () => {
    const { valid, message, cleaned } = validateCNIC(cnic);

    if (!valid) {
      setError(message);
      setResults([]);
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/appication-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnic: cleaned }),
      });


      // Directly parse JSON
      const data = await response.json();

      // Match CNIC (remove any non-digits from both sides)
      const matches = data.filter((row) => {
        let rowCnic = row.CNIC;
        if (typeof rowCnic === "number") {
          rowCnic = rowCnic.toString();
        }
        rowCnic = rowCnic?.toString().replace(/\D/g, "").trim();
        return rowCnic === cleaned;
      });

      if (matches.length > 0) {
        setResults(matches);
      } else {
        setError(
          "❌ No record found for the provided CNIC. Please ensure you entered the correct number or contact the recruitment cell for assistance."
        );
        setResults([]);
      }
    } catch (err) {
      console.error(`❌ Error fetching data:`, err);
      setError("❌ Something went wrong while fetching data.");
    }
  };

  return (
    <>
      <Header>
        <div className="container mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4">
              <a
                href="/syllabus/syllabus_motorway_police.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Paper Pattern for Motorway Police </strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>



              <div className="col-md-4 mb-4">
              <a
                href="/syllabus/syllabus_NAVTTC.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Paper Pattern for NAVTTC</strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-md-4 mb-4">
              <a
                href="/syllabus/syllabus_NUST.pdf"
                className="text-decoration-none"
                target="_blank"
              >
                <div className="card shadow-sm position-relative">
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      <strong>Paper Pattern for NUST  </strong>
                    </h5>
                  </div>
                </div>
              </a>
            </div>




            </div>
          </div>
          <hr />
          <br />
          <h2
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#014421",
              textAlign: "center",
            }}
          >
            Search by CNIC Record (Data of shortlisted candidates will be shown)
          </h2>

          <div style={{ marginBottom: "20px" }} className="text-center d-flex justify-content-center align-items-center">
            <input
              // className="form-control"
              type="text"
              placeholder="Please enter your 13-digit CNIC number eg(3520112345671)"
              value={cnic}
              onChange={(e) =>
                setCnic(e.target.value.replace(/\D/g, "").slice(0, 13))
              }
              style={{
                width: "70%",
                padding: "12px 16px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "white",
                color: "black",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          <div className="text-center d-flex justify-content-center align-items-center">
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "#014421",
                color: "#fff",
                fontWeight: "bold",
                padding: "12px 24px",
                fontSize: "16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#026c35")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#014421")
              }
            >
              Search
            </button>
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {results.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              <h2 className="fw-bold" style={{ marginBottom: "1rem" }}>
                Results:
              </h2>
              <div
                style={{
                  overflowX: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                    backgroundColor: "#fff",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "#014421",
                        color: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      {Object.keys(results[0])
                        .filter(
                          (col) =>
                            col !== "Postal Address" && col !== "Mobile No."
                        )
                        .map((col) => (
                          <th
                            key={col}
                            style={{
                              padding: "12px",
                              border: "1px solid #ddd",
                            }}
                          >
                            {col}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row, index) => (
                      <tr
                        key={index}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                          textAlign: "center",
                        }}
                      >
                        {Object.entries(row)
                          .filter(
                            ([key]) =>
                              key !== "Postal Address" &&
                              key !== "Mobile No."
                          )
                          .map(([key, val], i) => (
                            <td
                              key={i}
                              style={{
                                padding: "10px",
                                border: "1px solid #ddd",
                              }}
                            >
                              {val}
                            </td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Header>
    </>
  );
}

export default SearchCNIC;
