import React from "react";

function Homepage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            opacity: 0.2,
          }}
        >
          <img
            src="/logo.png"
            alt=""
            style={{
              width: "64px",
              height: "64px",
            }}
          />
          <h1
            style={{
              fontSize: "64px",
              background: "linear-gradient(to right, #217bfe, #e55571)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Jamal's AI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
