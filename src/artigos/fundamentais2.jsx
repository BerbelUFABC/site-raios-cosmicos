export default function Fundamentais2() {
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
        Da galáxia à Terra: a jornada de uma partícula cósmica
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

      {/* Imagem real */}
      <div
        style={{
          width: "100%",
          marginBottom: "35px",
          textAlign: "center",
        }}
      >
        <img
          src={import.meta.env.BASE_URL + "fundamentais2.jpg"}
          alt="Ilustração científica relacionada ao tema"
          style={{
            width: "100%",
            maxHeight: "60vh",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div
          style={{
            fontSize: "0.9rem",
            color: "#cccccc",
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Imagem: NASA
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          O percurso de uma partícula cósmica começa em uma região de forte
          aceleração — como frentes de choque entre nuvens de gás em movimento
          rápido, zonas de turbulência magnética ou regiões próximas a objetos
          compactos. Assim que ganha energia suficiente, ela é lançada ao meio
          interestelar, onde passa a se mover de forma errática devido aos
          campos magnéticos da galáxia.
        </p>

        <p>
          A primeira etapa de sua jornada ocorre no disco galáctico. Ali, a
          partícula é constantemente desviada por linhas de campo magnético que
          se retorcem ao redor de nuvens, aglomerados estelares e cavidades de
          gás quente. Em vez de seguir uma rota linear, ela percorre trajetórias
          espiraladas e imprevisíveis, podendo levar milhares de anos para
          atravessar apenas alguns poucos parsecs.
        </p>

        <p>
          Conforme se afasta do plano galáctico e alcança o halo da Via Láctea,
          a densidade de matéria diminui. Nessa região, a partícula passa a ser
          influenciada por campos magnéticos mais fracos e irregulares, o que
          reduz o número de colisões e lhe permite percorrer distâncias maiores
          sem grandes desvios. Caso possua energia muito elevada, ela pode
          escapar da galáxia e entrar no espaço intergaláctico, onde avançará
          praticamente sozinha através de vastas extensões de vazio.
        </p>

        <p>
          Ao aproximar-se da nossa vizinhança cósmica, a partícula encontra a
          influência do vento solar. A heliosfera, moldada pelo fluxo constante
          de partículas emitidas pelo Sol, funciona como uma barreira flutuante.
          A partícula pode ser desacelerada, desviada ou até temporariamente
          retida, dependendo de sua energia e do estado do ciclo solar no
          momento em que chega.
        </p>

        <p>
          Vencida essa barreira, ela continua rumo à Terra e encontra o campo
          magnético terrestre. Essa é sua última defesa: linhas de campo se
          fecham ao redor do planeta e obrigam a partícula a seguir curvas que a
          desviam para longe da superfície, exceto se sua energia for
          suficientemente alta para atravessá-las.
        </p>

        <p>
          Ao entrar na atmosfera, a partícula finalmente interage com moléculas
          de ar. Nesse ponto, sua jornada termina. O impacto inicial libera uma
          sequência de interações nucleares que produzem um chuveiro de
          partículas secundárias que se espalham pela atmosfera — um processo
          que sinaliza que a longa viagem da partícula cósmica chegou ao fim.
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
          Berezinskii, V. S.; Bulanov, S. V.; Dogiel, V. A.; Ginzburg, V. L.;
          Ptuskin, V. S. <i>Astrophysics of Cosmic Rays</i>. North-Holland,
          1990.
        </li>
        <li>
          Blandford, R.; Eichler, D. “Particle Acceleration at Astrophysical
          Shocks.” <i>Physics Reports</i>, 1987.
        </li>
        <li>
          Han, J. L. “Magnetic Fields in the Milky Way.”{" "}
          <i>Annual Review of Astronomy and Astrophysics</i>, 2017.
        </li>
        <li>
          Potgieter, M. S. “Solar Modulation of Cosmic Rays.”{" "}
          <i>Living Reviews in Solar Physics</i>, 2013.
        </li>
        <li>
          Dorman, L.{" "}
          <i>Cosmic Rays in the Earth’s Atmosphere and Underground</i>.
          Springer, 2004.
        </li>
      </ul>
    </div>
  );
}

