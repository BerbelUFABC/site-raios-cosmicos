import React from "react";

export default function Header({ setPage }) {
  return (
    <div
      style={{
        width: "100%",
        position: "sticky",   // sempre no topo
        top: 0,
        backgroundColor: "#111",
        display: "flex",
        justifyContent: "flex-start",
        padding: "15px 40px",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      }}
    >
      <button
        onClick={() => setPage("home")}
        style={{
          marginRight: "15px",
          padding: "8px 16px",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Home
      </button>

      <button
        onClick={() => setPage("simulations")}
        style={{
          marginRight: "15px",
          padding: "8px 16px",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Simulações
      </button>
    </div>
  );
}
