export default function Origens3({ setPage }) {
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
          O mistério das partículas extragalácticas
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
          marginBottom: "10px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src="/origens3.jpg"
          alt="Imagem principal do artigo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.92,
          }}
        />
      </div>

      {/* Crédito da imagem */}
      <div
        style={{
          textAlign: "right",
          fontSize: "0.85rem",
          color: "#bbbbbb",
          fontStyle: "italic",
          marginBottom: "35px",
          marginTop: "5px",
        }}
      >
        imagem: ESA/Hubble & NASA
      </div>

      {/* Texto principal */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Quando fechamos os olhos e imaginamos o universo além da Via Láctea, é
          fácil pensar em grandes distâncias, em luz viajando por milhões ou
          bilhões de anos-luz, em galáxias pontilhando o céu estrelado. Mas há
          outra viagem menos visível e ainda mais intrigante: a das partículas
          extragalácticas, mensageiras carregadas de energia que cruzam o espaço
          intergaláctico e, de vez em quando, chegam até nós. Elas não trazem
          imagens nem sons, mas trazem pistas antigas e enigmáticas sobre
          processos extremos que ocorrem longe daqui. E quanto mais os
          cientistas escavam essas pistas, mais o mistério se aprofunda.
        </p>

        <p>
          A história começa com um detetive cósmico que, durante décadas, tenta
          responder a uma pergunta simples: de onde vêm as partículas de
          altíssima energia que os detectores nos mostram? Parte dessa população
          é local — produzida por fenômenos na nossa própria galáxia — mas há um
          componente que é claramente extragaláctico. Essas são as partículas
          que apresentam energias tão elevadas que nenhuma fonte galáctica
          conhecida parece capaz de produzi-las de forma convincente. Para
          entendê-las, astrônomos e físicos usam um arsenal moderno —
          observatórios de raios cósmicos como o Pierre Auger [1] e o Telescope
          Array [2], detectores de neutrinos como o IceCube [3] e o
          recém-emergente KM3NeT [4], e uma constelação de telescópios que
          observam o céu em raios gama, raios X e rádio. Juntos, eles tentam
          montar um retrato a partir de indícios dispersos.
        </p>

        <p>
          Uma das primeiras pistas vem do próprio espectro das partículas — o
          gráfico que mostra quantas partículas chegam por energia. Em energias
          muito altas surge um comportamento curioso, com quebras conhecidas
          como o "joelho" e o "ankle" — termos que os especialistas usam, quase
          como com ludismo carinhoso, para nomear formações no gráfico. Essas
          quebras não são meros detalhes — elas carregam informações sobre
          limites físicos, perda de energia durante a viagem e sobre as
          capacidades máximas das fontes. Além disso, a composição dessas
          partículas — se são prótons, núcleos leves ou núcleos pesados como
          ferro — muda ao subir a escala de energia, e isso altera profundamente
          as interpretações possíveis. Observações recentes do Pierre Auger e do
          Telescope Array sugerem que, no maior extremo de energias, partículas
          mais pesadas podem dominar — uma pista que abre e fecha certas
          hipóteses ao mesmo tempo que abre novas portas para investigações [5].
        </p>

        <p>
          Enquanto os raios cósmicos carregam informações, há outro mensageiro
          que se tornou chave para a investigação moderna — o neutrino de alta
          energia. Neutrinos são partículas fantasma — passam por imensos blocos
          de matéria sem interagir — e por isso carregam informações diretas do
          coração de regiões energéticas que outros mensageiros não conseguem. A
          descoberta de neutrinos cósmicos pelo IceCube mudou o jogo — de
          repente tínhamos pistas diretas de fontes extragalácticas que podem
          produzir partículas tão energéticas que, ao interagir localmente,
          gerariam neutrinos e raios gama. Casos isolados de associação entre um
          neutrino e uma fonte — por exemplo, blazares ativos emitindo jatos
          apontados para nós — começaram a pintar um quadro multimodal, em que
          diferentes mensageiros confirmam e complementam sinais uns dos outros.
          Ainda assim, muitas associações permanecem estatísticas e controversas
          — não temos, até hoje, um catálogo robusto de fontes identificadas que
          explique todo o fluxo de partículas extragalácticas observado.
        </p>

        <p>
          Somam-se aos enigmas as dificuldades impostas pelos próprios caminhos
          dessas partículas. Prótons e núcleos são carregados e, por isso, são
          desviados por campos magnéticos galácticos e extragalácticos — como
          folhas levadas por correntes invisíveis. Isso torna praticamente
          impossível traçar uma linha reta de volta ao emissor, salvo em raros
          casos extremos e energias ainda maiores. Em contraste, neutrinos e
          fótons de altíssima energia seguem trajetórias quase retilíneas, mas
          têm suas próprias limitações: fótons ultra-energéticos são absorvidos
          por campos de radiação ao longo do caminho, e neutrinos são tão
          evasivos que exigem detectores gigantescos e paciência estatística
          para que um pequeno número de eventos seja coletado. Por isso, a
          solução depende de combinar diferentes tipos de dados — o que a
          comunidade chama de *multimessenger astronomy* — e de construir
          modelos teóricos que conciliem espectro, composição, anisotropia e
          emissões em raios gama e neutrinos.
        </p>

        <p>
          E então há as fontes candidatas — núcleos ativos de galáxias,
          quasares, jatos relativísticos, supernovas extremas, fusões de
          estrelas de nêutrons, e até hipóteses mais exóticas envolvendo matéria
          escura. Cada cenário tem méritos e limites. Jatos de AGN possuem
          mecanismos plausíveis de aceleração e energia abundante, mas nem
          sempre explicam simultaneamente taxa, composição e espectro
          observados. Supernovas hipernovas podem produzir fluxos extremos, mas
          sua taxa e distribuição espacial nem sempre batem com os dados. Talvez
          a resposta não seja uma única classe, mas sim a soma de vários tipos
          de fontes espalhadas pelo cosmos.
        </p>

        <p>
          Nos últimos anos, melhorias instrumentais como o AugerPrime, o
          crescimento do IceCube e o avanço do KM3NeT vêm revelando sinais antes
          invisíveis. Mas o quadro continua complexo: a origem das partículas
          extragalácticas provavelmente é multifacetada, com contribuições que
          variam em composição, energia e distância. Propagação, campos
          magnéticos e interações ao longo do caminho borram muitas assinaturas
          diretas. A solução — quando vier — será coletiva, combinando modelos
          teóricos mais robustos e observações multi-mensageiros cada vez mais
          precisas.
        </p>

        <p>
          O encanto desse mistério está em sua natureza dupla. São fenômenos
          fisicamente colossais, mas também narrativos: jatos relativísticos
          girando como piruetas cósmicas, explosões titânicas, neutrinos
          silenciosos que atravessam tudo, campos magnéticos dobrando
          trajetórias como vento dobra poeira. Cada nova pista redesenha o mapa.
          Cada dado obriga a revisitar hipóteses. E no fim, cada partícula que
          chega até nós é um fragmento de história que o universo soprou durante
          milhões de anos — basta sabermos ouvir.
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
          [1] PIERRE AUGER OBSERVATORY. Home – The Pierre Auger Observatory.
          2025.
        </li>
        <li>
          [2] TELESCOPE ARRAY PROJECT. Home – Telescope Array Experiment. 2025.
        </li>
        <li>[3] ICECUBE NEUTRINO OBSERVATORY. Science – IceCube. 2025.</li>
        <li>[4] KM3NET COLLABORATION. Home – KM3NeT. 2025.</li>
        <li>
          [5] PERRONE, L.; PIERRE AUGER COLLAB. Ultra-high energy cosmic rays…
          2023.
        </li>
      </ul>
    </div>
  );
}
