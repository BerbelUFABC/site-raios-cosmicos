export default function Reflexoes1({ setPage }) {
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
          A descoberta dos raios cósmicos
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

      {/* Imagem do artigo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 35px auto" }}>
        <img
          src={import.meta.env.BASE_URL + "reflexoes1.jpg"}
          alt="Victor Hess em um balão de hidrogênio"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            display: "block",
            marginBottom: "8px",
          }}
        />

        <div
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#cccccc",
            fontStyle: "italic",
          }}
        >
          Imagem: Victor Hess em um balão de hidrogênio
        </div>
      </div>

      {/* Texto principal */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          O senso comum associa grandes descobertas científicas com laboratórios
          grandes, mesas cheias de papéis e equipamentos caros. Mas a descoberta
          dos raios cósmicos começa de um jeito bem diferente: com um homem
          corajoso subindo numa cesta de balão e levando consigo um instrumento
          simples, uma curiosidade imensa e uma pergunta – por que o ar à nossa
          volta está ionizado mesmo quando não há nenhuma fonte por perto?
        </p>

        <p>
          Victor Franz Hess era esse homem. No verão de 1912, depois de meses de
          medições cuidadosas com electroscópios, Hess decidiu que havia apenas
          uma maneira decisiva de testar as hipóteses da época: subir. Em sete
          voos de balão, culminando em 7 de agosto de 1912 quando alcançou cerca
          de 5.300 metros de altitude, Hess observou algo surpreendente – a
          ionização subia com altitudes maiores. Em outras palavras, a radiação
          que carregava energia não vinha apenas da Terra, algo vinha do espaço.
          Com essas medições, concluiu que existia uma radiação de origem
          extraterrestre. A ousadia da empreitada e a clareza dos resultados
          marcaram o início da física dos raios cósmicos.
        </p>

        <p>
          A descoberta não foi celebrada como um avanço imediato. Levou anos de
          confirmação e debate. Robert Millikan difundiu o termo “cosmic rays” e
          ajudou a consolidar a aceitação da ideia. Hess recebeu o Prêmio Nobel
          de Física de 1936. O que começou como uma curiosidade experimental
          abriria portas para a física de partículas e a astrofísica moderna.
        </p>

        <p>
          A partir desses primórdios, a investigação se sofisticou. Em vez de
          balões, hoje enviamos detectores ao espaço e espalhamos redes de
          instrumentos capazes de capturar chuveiros de partículas formados na
          atmosfera. Missões espaciais medem diretamente partículas a energias
          moderadas, enquanto observatórios terrestres como o Pierre Auger e o
          Telescope Array detectam raríssimos eventos de altíssima energia.
        </p>

        <p>
          Esses experimentos modernos transformaram o relato singular de Hess em
          uma ciência empírica robusta, permitindo mapear espectros, composições
          e direções com precisão antes inimaginável. Com os dados, padrões
          emergiram – e com eles novas perguntas. O espectro dos raios cósmicos
          exibe “joelhos” e “tornozelos”, quebras que revelam limites de
          aceleração das fontes e efeitos de propagação.
        </p>

        {/* --- IMAGEM DO GRAFICO  --- */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "30px 0 10px 0",
          }}
        >
          <img
            src={import.meta.env.BASE_URL + "banner.jpg"} 
            alt="Espectro de raios cósmicos"
            style={{
              maxWidth: "790px",
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#cccccc",
            fontStyle: "italic",
            marginBottom: "35px",
          }}
        >
          Imagem: Espectro de energia dos raios cósmicos
        </div>
        {/* --- FIM DA INSERÇÃO --- */}

        <p>
          A composição das partículas muda com a energia, sugerindo diferentes
          mecanismos e fontes contribuindo em distintos intervalos. E as
          partículas de altíssima energia raramente apontam para sua fonte:
          campos magnéticos desviam suas trajetórias. Isso levou ao
          desenvolvimento de métodos indiretos e técnicas multimensageiras.
        </p>

        <p>
          Nos últimos anos, a abordagem multimensageira trouxe avanços
          significativos. Detectores de neutrinos como o IceCube identificaram
          eventos com provável origem extragaláctica, fornecendo pistas únicas,
          já que neutrinos não são desviados por campos magnéticos. Ao mesmo
          tempo, telescópios de raios gama e campanhas coordenadas buscam sinais
          coincidentes que unam partículas detectadas aqui aos processos que as
          geraram no cosmos.
        </p>

        <p>
          A história iniciada com os balões de Hess hoje se desdobra em
          observatórios continentais, detectores subglaciais e instrumentos em
          órbita. O que antes era uma suspeita experimental tornou-se um campo
          global de pesquisa, com tecnologias diversas trabalhando em conjunto
          para reconstruir eventos que começam muito além da nossa atmosfera.
        </p>

        <p>
          Por fim, a aventura de Victor Hess permanece como símbolo do espírito
          científico — a disposição de enfrentar riscos, subir mais alto e olhar
          além do comum. As tecnologias mudaram, as perguntas ficaram mais
          profundas, mas a essência da investigação científica continua a mesma:
          explorar o desconhecido com curiosidade e rigor.
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
          lineHeight: 1.6,
        }}
      >
        <li>
          [1] PIERRE AUGER OBSERVATORY.{" "}
          <i>Home – The Pierre Auger Observatory.</i> Malargüe: Pierre Auger
          Observatory, 2025.
        </li>

        <li>
          [2] TELESCOPE ARRAY PROJECT. <i>Home – Telescope Array Experiment.</i>{" "}
          Telescope Array Collaboration, 2025.
        </li>

        <li>
          [3] ICECUBE NEUTRINO OBSERVATORY. <i>Science – IceCube.</i> 2025.
        </li>

        <li>
          [4] THE NEW YORK TIMES.{" "}
          <i>
            Victor F. Hess, physicist, dies; shared the Nobel Prize in 1936.
          </i>{" "}
          19 dez. 1964.
        </li>
      </ul>
    </div>
  );
}


