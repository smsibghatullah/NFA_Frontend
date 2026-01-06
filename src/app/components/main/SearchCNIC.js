import React, { useState } from "react";
import * as XLSX from "xlsx";

const excelFiles = ["file1.xlsx","file2.xlsx"]; // Put in public/

function SearchCNIC() {
  const [cnic, setCnic] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const validateCNIC = (value) => /^\d{5}-\d{7}-\d{1}$/.test(value);

  const handleSearch = async () => {
    if (!validateCNIC(cnic)) {
      setError("❌ Invalid CNIC format (use 12345-1234567-1)");
      setResults([]);
      return;
    }

    setError("");
    let allMatches = [];

    for (const file of excelFiles) {
      const response = await fetch(`/${file}`);
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, { type: "buffer" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      const matches = data.filter(
        (row) =>
          row.CNIC?.toString().trim() === cnic.trim() ||
          row["CNIC"]?.toString().trim() === cnic.trim()
      );

      allMatches.push(...matches);
    }

    if (allMatches.length > 0) {
      setResults(allMatches);
    } else {
      setError("❌ No record found.");
      setResults([]);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Search CNIC Record</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter CNIC (12345-1234567-1)"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {results.length > 0 && (
        <div className="mt-4">
          <h4>Results:</h4>
          <table className="table table-bordered">
            <thead id="gr">
              <tr>
                {Object.keys(results[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((val, i) => (
                    <td key={i}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchCNIC;
