// src/components/LoadingScreen.js
import React from "react";

const LoadingScreen = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          className="d-flex flex-column align-items-center justify-content-sm-center align-items-sm-start justify-content-center align-items-start"
          style={{ height: "100%" }}
        >
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
