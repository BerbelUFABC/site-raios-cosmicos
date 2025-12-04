export default function Terra2() {
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
        Buracos negros e jatos relativísticos: aceleradores cósmicos extremos
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
      <div
        style={{
          width: "100%",
          height: "60vh",
          borderRadius: "10px",
          marginBottom: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={import.meta.env.BASE_URL + "terra2.jpg"}
          alt="Jato relativístico emanando de um buraco negro"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.95,
          }}
        />
      </div>

      {/* Crédito da imagem */}
      <div
        style={{
          textAlign: "right",
          fontSize: "0.85rem",
          color: "#bbbbbb",
          marginBottom: "35px",
          marginTop: "5px",
          fontStyle: "italic",
          paddingRight: "8px",
        }}
      >
        imagem: The European Space Agency
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Buracos negros são como monstros cósmicos. Imagine um objeto tão denso
          que nem a luz consegue escapar de seu horizonte de eventos. Agora
          imagine esse buraco negro girando, alimentando-se de gás e poeira ao
          redor, cercado por um disco de material incandescente, e lançando
          jatos de partículas que cruzam o universo a velocidades próximas à da
          luz. Esses jatos figuram entre os maiores aceleradores naturais de
          partículas e podem ser peças-chave na origem dos raios cósmicos — as
          partículas mais energéticas que conhecemos no universo.
        </p>

        <p>
          Em particular, quando um buraco negro supermassivo está no centro de
          uma galáxia ativa e se alimenta intensamente, o material ao redor
          aquece, gira e forma um disco turbulento. As linhas de campo magnético
          se torcem e se reconectam, podendo extrair energia do próprio giro do
          buraco negro, como previsto pelo mecanismo de Blandford–Znajek
          <sup>[1]</sup>. O jato lançado não é composto por matéria que “entrou”
          no buraco negro, mas sim por plasma que permanece fora do horizonte de
          eventos e é acelerado por forças combinadas da gravidade extrema,
          rotação e magnetismo.
        </p>

        <p>
          Esses jatos são particularmente interessantes para a astrofísica de
          altas energias. Dentro deles, partículas carregadas — prótons,
          elétrons e núcleos — podem ser aceleradas repetidamente, cruzando
          ondas de choque e regiões magnéticas complexas, até alcançarem
          energias enormes, muitas vezes superiores às atingidas pelos maiores
          aceleradores terrestres.
        </p>

        <p>
          Observações recentes, especialmente pelo Event Horizon Telescope
          (EHT), mostram que esses jatos se tornam relativísticos muito próximos
          ao horizonte de eventos <sup>[2]</sup>. Isso sugere que os fenômenos
          que os impulsionam ocorrem em escalas menores do que imaginávamos,
          reforçando a ideia de que buracos negros ativos funcionam como
          aceleradores naturais extremamente eficientes.
        </p>

        <p>
          As partículas aceleradas podem escapar do jato e atravessar enormes
          distâncias no espaço extragaláctico, interagindo com campos
          magnéticos, com o gás interestelar e até com o fundo cósmico de
          micro-ondas. Essas interações podem gerar raios gama, neutrinos e,
          eventualmente, partículas que chegam à Terra como raios cósmicos de
          altíssima energia.
        </p>

        <p>
          Apesar dos avanços, muitas perguntas permanecem: qual o limite máximo
          de energia que esses jatos conseguem produzir? Qual é a eficiência
          real do mecanismo de aceleração? E como exatamente as partículas
          escapam do jato e viajam até nós, desviadas pelos campos magnéticos do
          cosmos?
        </p>

        <p>
          Embora pareça distante, esse processo nos afeta: cada vez que uma
          partícula de altíssima energia atinge nossa atmosfera, ela pode
          carregar a assinatura de um desses aceleradores cósmicos extremos.
          Compreender esses jatos relativísticos é entender como o universo
          converte gravidade, rotação e magnetismo em energia cinética pura — e
          como esses fenômenos moldam o cosmos em escalas gigantescas.
        </p>

        <p>
          Em resumo, jatos relativísticos não são apenas estruturas
          impressionantes: são laboratórios naturais, pistas sobre a origem dos
          raios cósmicos e janelas para processos físicos que ocorrem nos
          limites do que conhecemos.
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
          [1] UNI-FRANKFURT.{" "}
          <i>How Black Holes Produce Powerful Relativistic Jets.</i>
          Goethe-Universität Frankfurt, 06 out. 2025.
        </li>
        <li>
          [2] Max-Planck Institute for Radio Astronomy — MPIfR.{" "}
          <i>Accelerating jets from black holes.</i>
          Bonn: MPIfR, 24 mar. 2025.
        </li>
      </ul>
    </div>
  );
}

