export default function Origens1({ setPage }) {
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
          Supernovas: as fábricas naturais de raios cósmicos
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

      {/* Imagem principal */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <img
          src={import.meta.env.BASE_URL + "origens1.jpg"}
          alt="Imagem de remanescente de supernova"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Crédito da imagem */}
      <div
        style={{
          textAlign: "right",
          marginBottom: "35px",
          fontSize: "0.85rem",
          color: "#bbbbbb",
          fontStyle: "italic",
        }}
      >
        imagem: NASA/ESA/Hubble Heritage Team
      </div>

      {/* Texto principal */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Imagine uma estrela dezenas de vezes mais massiva que o Sol, brilhando
          intensamente em uma galáxia distante. Durante milhões de anos, ela
          viveu um equilíbrio delicado: de um lado, a força da gravidade
          tentando esmagá-la; de outro, a pressão das reações nucleares em seu
          núcleo, que empurram para fora. Mas esse equilíbrio não dura para
          sempre. Chega um momento em que o combustível nuclear — hidrogênio,
          depois hélio e uma sequência de elementos cada vez mais pesados — se
          esgota. Sem energia para resistir à gravidade, o núcleo colapsa quase
          que imediatamente. O resultado é uma das maiores explosões que o
          universo pode produzir: uma supernova.
        </p>

        <p>
          A energia liberada é colossal: em torno de 10⁴⁴ joules — o equivalente
          a toda a energia que o Sol emitirá ao longo de seus dez bilhões de
          anos de vida. O que resta da estrela é arremessado para o espaço em
          uma onda de choque supersônica, empurrando gás e poeira ao redor e
          formando uma estrutura em expansão chamada remanescente de supernova.
          É ali, nesses detritos estelares, que o universo faz algo ainda mais
          surpreendente: transforma a violência da destruição em um processo
          criador, capaz de acelerar partículas a velocidades próximas à da luz.
        </p>

        <p>
          Essas partículas — prótons, elétrons e núcleos atômicos — já são
          conhecidos nossos, os especiais Raios Cósmicos. Mas uma pergunta
          fascinante permaneceu em aberto por décadas: de onde vêm esses raios
          cósmicos?
        </p>

        <p>
          A hipótese de que as supernovas são as principais fábricas de raios
          cósmicos na Via Láctea começou a ganhar força nos anos 1970, quando
          físicos teóricos propuseram o chamado mecanismo de aceleração por
          choque difusivo (Diffusive Shock Acceleration, ou DSA) [1]. A onda de
          choque que se propaga após a explosão funciona como um trampolim
          cósmico: as partículas ficam “presas” entre campos magnéticos
          turbulentos de ambos os lados do choque, atravessando-o repetidas
          vezes. A cada travessia, elas ganham um pequeno impulso de energia.
          Depois de milhares ou milhões desses “saltos”, a partícula pode
          atingir energias milhões de vezes maiores do que qualquer acelerador
          terrestre.
        </p>

        <p>
          Observações em múltiplos comprimentos de onda — do rádio aos raios X e
          γ — sustentam essa visão. Em remanescentes como{" "}
          <strong>Cassiopeia A</strong> [2] e <strong>RX J1713.7-3946</strong>{" "}
          [3], telescópios espaciais detectaram emissões que só podem ser
          explicadas pela presença de elétrons e prótons acelerados a altíssimas
          energias. Alguns desses remanescentes mostram campos magnéticos tão
          amplificados que variam em escalas de apenas um ano, um indício de que
          a aceleração é extremamente eficiente. Estima-se que até 10% da
          energia total da explosão de uma supernova possa ser convertida em
          energia de raios cósmicos — o suficiente para manter o fluxo observado
          na galáxia.
        </p>

        <p>
          Mas, como em toda boa história científica, há mistérios ainda não
          resolvidos. Um deles diz respeito ao limite máximo dessa aceleração.
          As observações mostram que muitas supernovas produzem partículas até
          dezenas de trilhões de elétron-volts (TeV), mas o espectro dos raios
          cósmicos observados na Terra se estende até cerca de um quatrilhão de
          elétron-volts (10¹⁵ eV), o chamado “joelho” do espectro. Será que as
          supernovas conseguem chegar a tanto? Estudos recentes sugerem que
          apenas as explosões mais jovens, ou aquelas que ocorrem em ambientes
          especialmente densos — como as chamadas superbolhas — poderiam atingir
          energias tão extremas.
        </p>

        <p>
          Outra questão é se as supernovas seriam as únicas responsáveis por
          todos os raios cósmicos galácticos. Alguns indícios apontam para
          contribuições adicionais, como as de pulsares — estrelas de nêutrons
          magnetizadas e em rotação — e até regiões de formação estelar intensa,
          onde várias ondas de choque podem se sobrepor. Cada uma dessas fontes
          pode atuar como um pequeno “acelerador natural”, com características
          próprias.
        </p>

        <p>
          Ainda assim, o consenso atual é que as supernovas são os pilares dessa
          história. Elas fornecem a energia, as condições físicas e o ambiente
          ideais para transformar matéria comum em partículas de energia quase
          inimaginável. A cada explosão, não apenas enriquecem o espaço com
          elementos químicos pesados — ferro, cálcio, ouro — mas também semeiam
          a galáxia com um vento invisível de partículas relativísticas. Essas
          partículas viajam por milhões de anos, cruzam campos magnéticos e, por
          fim, algumas chegam até nós, penetrando nossa atmosfera e gerando
          chuveiros de partículas secundárias detectáveis por experimentos aqui
          na Terra.
        </p>

        <p>
          Pensar nisso é lembrar que vivemos em um universo profundamente
          conectado. As mesmas forças que destroem uma estrela são as que
          aceleram partículas que hoje atravessam nossos corpos, silenciosas e
          inofensivas, a cada segundo. Quando olhamos para o brilho fugaz de uma
          supernova, estamos vendo mais do que o fim de uma estrela: estamos
          testemunhando o nascimento de uma das máquinas mais poderosas da
          natureza, que converte a morte em energia pura e lança pelos confins
          do cosmos as sementes radiantes de seu legado.
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
          [1] DRURY, L. O’C. *An introduction to the theory of diffusive shock
          acceleration of energetic particles in tenuous plasmas.* Reports on
          Progress in Physics, 1983.
        </li>
        <li>
          [2] Abdo, A. A. et al. *Fermi-LAT discovery of GeV gamma-ray emission
          from the young supernova remnant Cassiopeia A.* ApJL, 2010.
        </li>
        <li>
          [3] Aharonian, F. et al. *Primary particle acceleration above 100 TeV
          in the supernova remnant RX J1713.7-3946.* A&A, 2007.
        </li>
      </ul>
    </div>
  );
}

