import React from "react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  function handleClick() {
    // Redirect to the home page
    navigate("/");
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", fontFamily: "system-ui" }}>
        <p className="head-contact" style={{ color: "gray", width: "1px" }}>Home  </p>
        <p style={{ marginLeft: "10px" }}> /   404 Error</p>
      </div>

      <h1 style={{ marginTop: "40px", marginBottom: "0px", textAlign: "center", fontSize: "100px" }}> 404 Not Found</h1>

      <p style={{ marginTop: "10px", textAlign: "center", fontSize: "20px" }}>Your visited page not found. You may go home page.</p>

      <button onClick={handleClick} style={{ borderStyle:"none", height: "40px", backgroundColor: "maroon", color: "white", textAlign: "center", fontSize: "20px", margin: "0 auto", display: "block", marginBottom: "100px", marginTop: "50px" }}>Back to home page</button>
    </div>
  );
}
