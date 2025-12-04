export default function Terra1() {
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
        Quando o céu chove partículas: o que é um chuveiro atmosférico?
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

      {/* Imagem */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <img
          src="/terra1.jpg"
          alt="Chuveiro atmosférico"
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            borderRadius: "10px",
            opacity: 0.95,
          }}
        />
        <div
          style={{
            textAlign: "right",
            fontSize: "0.75rem",
            color: "#aaaaaa",
            fontStyle: "italic",
            marginTop: "5px",
            paddingRight: "5px",
          }}
        >
          imagem: Osaka Metropolitan U./L-INSIGHT, Kyoto U./Ryuunosuke Takeshige
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Quando uma partícula cósmica extremamente energética chega à atmosfera
          da Terra, ela não para de imediato. Em vez disso, colide com um núcleo
          de gás da alta atmosfera e desencadeia uma reação que se multiplica
          rapidamente. Esse processo é chamado de <b>chuveiro atmosférico</b>,
          uma sequência de interações que transforma uma única partícula em uma
          verdadeira enxurrada de outras.
        </p>

        <p>
          A colisão inicial libera uma quantidade significativa de energia,
          suficiente para quebrar núcleos e produzir novas partículas. Entre
          elas surgem píons, káons, fótons de alta energia e outros produtos
          instáveis. Essas partículas, por sua vez, continuam interagindo com o
          ar, cada uma gerando novas ramificações. Em poucos microssegundos, a
          cascata se espalha vertical e lateralmente, formando uma estrutura que
          se estende por dezenas de quilômetros na atmosfera.
        </p>

        <p>
          À medida que o chuveiro avança para regiões mais densas do ar, parte
          das partículas se desfaz, parte se transforma e parte continua sua
          trajetória até o solo. Os múons, por exemplo, atravessam grandes
          distâncias e frequentemente chegam à superfície, permitindo que sejam
          detectados por instrumentos terrestres. Já os elétrons e fótons tendem
          a ser absorvidos mais rapidamente, compondo a porção eletromagnética
          da cascata.
        </p>

        <p>
          O resultado dessa cadeia de interações é um feixe de partículas
          distribuídas em grande área, que atinge o solo de maneira quase
          simultânea. Essa distribuição permite reconstruir propriedades da
          partícula original, como energia, direção e natureza. Cada chuveiro
          atmosférico funciona, assim, como uma impressão deixada por um evento
          que começou muito acima e se desdobrou em frações de segundo.
        </p>

        <p>
          Embora invisível a olho nu, esse fenômeno acontece continuamente ao
          redor do planeta. A “chuva” gerada por esses eventos é um testemunho
          da interação entre o espaço profundo e a atmosfera terrestre,
          revelando características de processos que ocorrem muito além do nosso
          ambiente imediato.
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
          Gaisser, T. K.; Engel, R.; Stanev, T.{" "}
          <i>Cosmic Rays and Particle Physics</i>. Cambridge University Press,
          2016.
        </li>
        <li>
          Dorman, L.{" "}
          <i>Cosmic Rays in the Earth’s Atmosphere and Underground</i>.
          Springer, 2004.
        </li>
        <li>
          Berezinskii, V. S. et al. <i>Astrophysics of Cosmic Rays</i>.
          North-Holland, 1990.
        </li>
        <li>
          Potgieter, M. S. “Solar Modulation of Cosmic Rays.”{" "}
          <i>Living Reviews in Solar Physics</i>, 2013.
        </li>
      </ul>
    </div>
  );
}
