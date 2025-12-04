import React, { useState, useEffect } from "react";

export default function HomePage({ setPage }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const particlesPerSec = 100.0;
    const interval = setInterval(() => {
      setCount((c) => c + particlesPerSec / 10);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const displayCount = count >= 10_000 ? "MUITOS" : Math.floor(count);

  const articles = [
    {
      category: "☄️ Conceitos Fundamentais",
      items: [
        {
          title: "Mensageiros do cosmos: o que são os raios cósmicos?",
          page: "fundamentais1",
        },
        {
          title: "Da galáxia à Terra: a jornada de uma partícula cósmica",
          page: "fundamentais2",
        },
        {
          title:
            "Energia de outro mundo: por que os raios cósmicos são tão poderosos?",
          page: "fundamentais3",
        },
      ],
    },
    {
      category: "🌌 Origens e fontes astrofísicas",
      items: [
        {
          title: "Supernovas: as fábricas naturais de raios cósmicos",
          page: "origens1",
        },
        {
          title:
            "Buracos negros e jatos relativísticos: aceleradores cósmicos extremos",
          page: "origens2",
        },
        {
          title: "O mistério das partículas extragalácticas",
          page: "origens3",
        },
      ],
    },
    {
      category: "🌧️ Interações e fenômenos na Terra",
      items: [
        {
          title:
            "Quando o céu chove partículas: o que é um chuveiro atmosférico?",
          page: "terra1",
        },
        {
          title:
            "Raios cósmicos e tecnologia: como eles afetam nossos eletrônicos",
          page: "terra2",
        },
        {
          title:
            "Como detectamos o invisível? A arte de observar raios cósmicos",
          page: "terra3",
        },
      ],
    },
    {
      category: "🧭 Reflexões científicas",
      items: [
        { title: "A descoberta dos raios cósmicos", page: "reflexoes1" },
        { title: "Raios Cósmicos importam?", page: "reflexoes2" },
        { title: "Portas, Pontes e Mercados", page: "reflexoes3" },
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        color: "#eee",
        minHeight: "100vh",
        position: "relative",
        background: "#000",
        boxSizing: "border-box",
      }}
    >
      <style>
        {`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden !important;
          width: 100%;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          opacity: 0.7;
          border-radius: 50%;
          animation: flicker 10s infinite ease-in-out;
        }

        @keyframes flicker {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }

        .side-object {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 160px;
          height: 160px;
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes slowspin {
          from { transform: translateY(-50%) rotate(0deg); }
          to { transform: translateY(-50%) rotate(360deg); }
        }

        @keyframes swirl {
          0% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(-50%) scale(1.1); }
          100% { transform: translateY(-50%) scale(1); }
        }
      `}
      </style>

      {/* OBJECTS E ESTRELAS */}
      <div className="side-object planet" />
      <div className="side-object blackhole" />

      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      {/* TÍTULO ÚNICO */}
      <h1
        style={{
          fontSize: "4.2em",
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: "4px",
          color: "#ffd700",
          textAlign: "center",
          marginTop: 40,
          marginBottom: 10,
          zIndex: 2,
          textShadow: "0 0 12px rgba(255, 215, 0, 0.7)",
        }}
      >
        RAIOS CÓSMICOS
      </h1>

      {/* CONTADOR */}
      <p
        style={{
          fontSize: "1.2em",
          marginTop: 15,
          marginBottom: 40,
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {displayCount} raios cósmicos atravessaram seu corpo enquanto você
        acessava este site.
      </p>

      {/* LISTA DE ARTIGOS */}
      <div style={{ width: "100%", maxWidth: 700, zIndex: 2 }}>
        {articles.map((section) => (
          <div key={section.category} style={{ marginBottom: 55 }}>
            <h2
              style={{
                fontSize: "1.5em",
                marginBottom: 25,
                borderBottom: "1px solid #444",
                paddingBottom: 8,
                textAlign: "center",
              }}
            >
              {section.category}
            </h2>

            <ul
              style={{ listStyle: "none", paddingLeft: 0, textAlign: "center" }}
            >
              {section.items.map((item) => (
                <li
                  key={item.title}
                  onClick={() => setPage(item.page)}
                  style={{
                    cursor: "pointer",
                    padding: "12px 0",
                    fontSize: "1.15em",
                    color: "#ccc",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  ➜ {item.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
