export default function Fundamentais1() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        padding: "60px 40px",
        color: "white",
        backgroundColor: "#0b0b0b",
        backgroundImage:
          "radial-gradient(white 0.5px, transparent 0.5px), radial-gradient(white 0.5px, transparent 0.5px)",
        backgroundPosition: "0 0, 25px 25px",
        backgroundSize: "50px 50px",
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.8,
        boxSizing: "border-box",
      }}
    >
      {/* Título */}
      <h1
        style={{
          fontFamily: "'Merriweather', serif",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "10px",
          textAlign: "center",
          color: "#ffd700",
        }}
      >
        Mensageiros do cosmos: o que são os raios cósmicos?
      </h1>

      {/* Autor */}
      <div
        style={{
          textAlign: "right",
          marginBottom: "25px",
          marginTop: "-10px",
          fontSize: "0.9rem",
          color: "#cccccc",
          fontStyle: "italic",
          paddingRight: "10px",
        }}
      >
        Autor: Ricardo Ramos Martins
      </div>

      {/* Imagem do artigo */}
      <div style={{ width: "100%", marginBottom: "35px" }}>
        <img
          src="/fundamentais1.jpg"
          alt="Raios cósmicos"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            display: "block",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            fontStyle: "italic",
            marginTop: "8px",
            color: "#cccccc",
          }}
        >
          Imagem: ASPERA/Novapix/L. Bret
        </p>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Raios cósmicos são partículas de altíssima energia que chegam à Terra
          vindas do espaço interestelar e extragaláctico. A maior parte é
          formada por prótons, acompanhados de núcleos de hélio e de elementos
          mais pesados. Sua descoberta mudou a física no início do século XX e
          continua marcando a pesquisa contemporânea.
        </p>

        <p>
          O estudo dos raios cósmicos começou oficialmente em 1912, quando
          Victor Hess realizou seus voos de balão e observou que a radiação
          aumentava com a altitude. Em 1936, Hess recebeu o Prêmio Nobel de
          Física pela descoberta. A partir daí, o campo se expandiu rapidamente:
          em 1938, Pierre Auger identificou os chuveiros atmosféricos extensos;
          em 1948, pesquisadores detectaram lítio, berílio e boro em raios
          cósmicos, reforçando a ideia de que eles traziam informações sobre a
          composição química do universo; e em 1962, foi observado o primeiro
          raio cósmico com energia acima de 10²⁰ eV.
        </p>

        <p>
          A origem dos raios cósmicos cobre diferentes escalas. Fontes
          galácticas incluem remanescentes de supernovas, especialmente
          estudados desde a década de 1950, quando Fermi propôs mecanismos de
          aceleração estocástica. Em energias superiores a 10¹⁸ eV, a hipótese
          extragaláctica se fortaleceu com a previsão independente feita por
          Zatsepin & Kuz’min (1966) e por Greisen (1966) sobre a queda no
          espectro de energias ultraltas, fenômeno conhecido como GZK cutoff.
        </p>

        <p>
          Quando chegam à atmosfera, essas partículas iniciam colisões que
          produzem cascatas secundárias. A observação desses chuveiros se tornou
          mais precisa nas décadas de 1990 e 2000, com grandes arranjos
          detectores como o Observatório Pierre Auger, inaugurado em 2004, e o
          Telescope Array, iniciado em 2008. Esses projetos permitiram medir
          direções de chegada, energias e composições, abrindo novas questões
          sobre física de partículas e astrofísica de altas energias.
        </p>

        <p>
          Os raios cósmicos são chamados de mensageiros do cosmos porque
          carregam informações sobre fenômenos extremos: explosões estelares,
          jatos relativísticos de buracos negros e até processos que ocorreram
          há bilhões de anos-luz. Cada partícula que atinge nosso planeta traz
          um registro de eventos violentos que moldam o universo — e investigar
          sua origem é aprofundar a compreensão da própria estrutura cósmica.
        </p>
      </div>

      {/* Referências */}
      <h2
        style={{
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "1.8rem",
          textAlign: "center",
          color: "#ffd700",
        }}
      >
        Referências
      </h2>

      <ul
        style={{
          maxWidth: "1000px",
          margin: "0 auto 40px auto",
          fontSize: "1em",
          paddingLeft: "20px",
        }}
      >
        <li>
          Longair, Malcolm S. *High Energy Astrophysics*. Cambridge University
          Press, 2011.
        </li>
        <li>
          Gaisser, T. K.; Engel, R.; Stanev, T. *Cosmic Rays and Particle
          Physics*. Cambridge, 2016.
        </li>
        <li>
          Hess, V. F. (1912). “Über Beobachtungen der durchdringenden Strahlung
          …”
        </li>
        <li>Auger, P. et al. “Extensive Cosmic-Ray Showers.” *RMP*, 1939.</li>
        <li>Fermi, E. “On the Origin of the Cosmic Radiation.” *PR*, 1949.</li>
        <li>Greisen, K. “End to the Cosmic-Ray Spectrum?” *PRL*, 1966.</li>
        <li>
          Zatsepin, G. T.; Kuz’min, V. A. “Upper Limit of the Spectrum…” *JETP
          Letters*, 1966.
        </li>
      </ul>
    </div>
  );
}
