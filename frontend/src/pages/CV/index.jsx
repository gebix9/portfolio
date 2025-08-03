import React from "react";

const CV = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0ede7",
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <h1 className="mb-4 text-center fw-bold" style={{ color: "#333" }}>
          Mon CV
        </h1>

        <div style={{ height: "1000px", border: "1px solid #ccc", borderRadius: "0.5rem", overflow: "hidden" }}>
          <iframe
            src="/documents/CV.pdf"
            title="CV"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
