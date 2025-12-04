import React, { useState } from "react";

// Home
import HomePage from "./HomePage";

// Simulações
import SimulationPage from "./SimulationPage";

// Artigos
import Fundamentais1 from "./artigos/fundamentais1.jsx";
import Fundamentais2 from "./artigos/fundamentais2.jsx";
import Fundamentais3 from "./artigos/fundamentais3.jsx";

import Origens1 from "./artigos/origens1.jsx";
import Origens2 from "./artigos/origens2.jsx";
import Origens3 from "./artigos/origens3.jsx";

import Terra1 from "./artigos/terra1.jsx";
import Terra2 from "./artigos/terra2.jsx";
import Terra3 from "./artigos/terra3.jsx";

import Reflexoes1 from "./artigos/reflexoes1.jsx";
import Reflexoes2 from "./artigos/reflexoes2.jsx";
import Reflexoes3 from "./artigos/reflexoes3.jsx";

// Header
import Header from "./Header.jsx";

//  Scroll Reset
import ScrollToTop from "./ScrollToTop.jsx";

export default function App() {
  const [page, setPage] = useState("home");

  const pages = {
    home: <HomePage setPage={setPage} />,
    simulations: <SimulationPage setPage={setPage} />,

    fundamentais1: <Fundamentais1 setPage={setPage} />,
    fundamentais2: <Fundamentais2 setPage={setPage} />,
    fundamentais3: <Fundamentais3 setPage={setPage} />,

    origens1: <Origens1 setPage={setPage} />,
    origens2: <Origens2 setPage={setPage} />,
    origens3: <Origens3 setPage={setPage} />,

    terra1: <Terra1 setPage={setPage} />,
    terra2: <Terra2 setPage={setPage} />,
    terra3: <Terra3 setPage={setPage} />,

    reflexoes1: <Reflexoes1 setPage={setPage} />,
    reflexoes2: <Reflexoes2 setPage={setPage} />,
    reflexoes3: <Reflexoes3 setPage={setPage} />,
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*  Sempre que App renderiza, scroll volta ao topo */}
      <ScrollToTop />

      <Header setPage={setPage} />

      {pages[page] || <HomePage setPage={setPage} />}
    </div>
  );
}
