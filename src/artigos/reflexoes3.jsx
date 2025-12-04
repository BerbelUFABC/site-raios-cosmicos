export default function Reflexoes3({ setPage }) {
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
      {/* Título e autor */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 25px auto" }}>
        <h1
          style={{
            fontFamily: "'Merriweather', serif",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#ffd700",
            marginBottom: "5px",
          }}
        >
          Portas, Pontes e Mercados
        </h1>

        <div
          style={{
            textAlign: "right",
            fontSize: "0.9rem",
            color: "#cccccc",
            fontStyle: "italic",
          }}
        >
          Autor: Gabriel Berbel
        </div>
      </div>

      {/* Texto */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Divulgar ciência é, antes de tudo, um gesto humanitário. É abrir uma
          porta que, de outro modo, ficaria trancada atrás de uma linguagem
          técnica. E toda porta aberta é também uma ponte: uma travessia
          possível entre mundos que raramente se encontram — o da pesquisa
          acadêmica, com seus ritos próprios, e o da vida cotidiana, com suas
          urgências.
        </p>

        <p>
          Às vezes parece que a função de um cientista é a mesma de um padre em
          uma missa: impassível, distante, em conexão com uma realidade distinta
          da nossa e com uma linguagem morta e inacessível. Mas o campo
          científico (pelo menos para os cientistas) se parece muito mais com um
          mercado público: barulhento, vivo, cheio de pessoas oferecendo ideias,
          discutindo de maneiras mais ou menos calorosas, etc.
        </p>

        <p>
          Divulgar ciência é apresentar aos de fora esse mercado: não apenas
          explicar os produtos vendidos lá, mas mostrar como se escolhem os
          ingredientes do conhecimento, como se limpam as bancas e como se evita
          que ideias estragadas contaminem o resto. É explicar a ciência não
          enquanto um produto pronto, mas como um processo.
        </p>

        <p>
          Vivemos num tempo curioso: nunca produzimos tanto conhecimento, e
          nunca estivemos tão desconectados dele. Entre um artigo científico e o
          imaginário coletivo há, às vezes, um distanciamento que pode gerar,
          por um lado, um cientificismo fideísta do público e, por outro, um
          negacionismo absoluto.
        </p>

        <p>
          Aí está a função do divulgador: apresentar o conhecimento científico
          em meio às suas contradições e críticas, não como um dogma, mas como
          um diálogo constante.
        </p>

        <p>
          Quando Carl Sagan disse que “somos feitos de poeira estelar”, ele não
          estava apenas transmitindo um dado astrofísico. Ele estava ligando
          dois mundos: o humano e o cósmico. A divulgação científica participa
          desse mesmo gesto: ela costura mundos que não deveriam estar
          separados.
        </p>

        <blockquote
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            fontSize: "1.4rem",
            fontStyle: "italic",
            textAlign: "center",
            color: "#f0f0f0",
          }}
        >
          “The universe is made of stories, not of atoms.”
          <br />— <i>The Speed of Darkness</i>, Muriel Rukeyser
        </blockquote>
      </div>
    </div>
  );
}
