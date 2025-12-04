export default function Terra3({ setPage }) {
  return (
    <div
      style={{
        width: "100vw",
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
      {/* Título e Autor */}
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
          Autor: Ricardo Ramos Martins
        </div>
      </div>

      {/* IMAGEM */}
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto 35px auto",
        }}
      >
        <img
          src="/terra3.jpg"
          alt="Imagem relacionada ao artigo"
          style={{
            width: "100%",
            borderRadius: "10px",
            display: "block",
            marginBottom: "8px",
          }}
        />
        <div
          style={{
            textAlign: "right",
            fontSize: "0.85rem",
            color: "#bbbbbb",
            fontStyle: "italic",
            marginRight: "4px",
          }}
        >
          imagem: ESO/C. Malin
        </div>
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
          componente claramente extragaláctico. Essas partículas apresentam
          energias tão elevadas que nenhuma fonte galáctica conhecida parece
          capaz de produzi-las de forma convincente.
        </p>

        <p>
          Para entendê-las, astrônomos e físicos usam um arsenal moderno:
          observatórios de raios cósmicos como o Pierre Auger [1] e o Telescope
          Array [2], detectores de neutrinos como o IceCube [3] e o emergente
          KM3NeT [4], e uma constelação de telescópios que observam o céu em
          raios gama, X e rádio. Juntos, tentam montar um retrato a partir de
          indícios dispersos.
        </p>

        <p>
          Uma das primeiras pistas vem do próprio espectro das partículas — o
          gráfico que mostra quantas partículas chegam por energia. Em energias
          muito altas surge um comportamento curioso, com quebras conhecidas
          como o “joelho” e o “ankle”. Essas formações carregam informações
          sobre limites físicos, perda de energia durante a viagem e capacidades
          máximas das fontes.
        </p>

        <p>
          Além disso, a composição dessas partículas — se são prótons, núcleos
          leves ou pesados — muda ao subir a escala de energia, alterando as
          interpretações possíveis. Observações recentes sugerem que, no extremo
          maior de energias, partículas mais pesadas podem dominar — uma pista
          que abre e fecha hipóteses ao mesmo tempo [5].
        </p>

        <p>
          Outro mensageiro tornou-se chave: o neutrino de alta energia. Eles são
          partículas fantasmas e carregam informações diretas do interior de
          regiões energéticas que outros mensageiros não conseguem revelar. A
          descoberta de neutrinos cósmicos pelo IceCube mudou o jogo: começaram
          a surgir associações entre neutrinos e fontes como blazares — mas
          muitas delas ainda são frágeis estatisticamente.
        </p>

        <p>
          Somam-se aos enigmas as dificuldades impostas pelos caminhos dessas
          partículas. Prótons e núcleos são desviados por campos magnéticos —
          como folhas levadas por correntes invisíveis — tornando impossível
          traçar uma linha reta até a fonte. Neutrinos e fótons ultraenergéticos
          mantêm trajetórias quase retilíneas, mas têm suas próprias limitações:
          absorção, baixa taxa de detecção e grande esforço estatístico.
        </p>

        <p>
          Assim, a solução do mistério depende de combinar diferentes tipos de
          dados — a chamada <i>multimessenger astronomy</i> — e de construir
          modelos teóricos que conciliem espectro, composição, anisotropia e
          emissões em múltiplas faixas de energia.
        </p>

        <p>
          As fontes candidatas incluem núcleos ativos de galáxias, quasares,
          jatos relativísticos de buracos negros supermassivos, supernovas
          extremas, fusões de estrelas de nêutrons e até cenários exóticos como
          matéria escura em decaimento. Cada uma tem méritos e limitações, e o
          consenso atual é que talvez nenhuma sozinha explique o fluxo
          observado.
        </p>

        <p>
          Avanços instrumentais recentes — upgrade do Pierre Auger (AugerPrime),
          expansão do IceCube e do KM3NeT, e campanhas coordenadas de
          telescópios — aumentaram nossa sensibilidade, mas também revelaram a
          complexidade do problema. O cenário atual aponta para uma origem
          multifacetada, com diferentes fontes contribuindo em diferentes
          regimes.
        </p>

        <p>
          Para nós, o fascínio está na própria natureza dessa investigação:
          forças titânicas, campos magnéticos imensos, buracos negros girando
          como piões cósmicos, plasmas extremos e neutrinos silenciosos
          atravessando tudo.
        </p>

        <p>
          O futuro pode trazer um mapa claro que associe eventos a fontes. Até
          lá, seguimos decifrando pistas sutis. O mistério das partículas
          extragalácticas é uma das fronteiras mais ricas da astrofísica moderna
          — um encontro entre física de partículas, astrofísica e tecnologia de
          detecção. Cada partícula que chega é, no fundo, uma história que o
          universo nos conta.
        </p>

        <h3 style={{ marginTop: "40px", color: "#ffd700" }}>Referências</h3>
        <p>[1] Pierre Auger Observatory — 2025</p>
        <p>[2] Telescope Array Experiment — 2025</p>
        <p>[3] IceCube Neutrino Observatory — 2025</p>
        <p>[4] KM3NeT Collaboration — 2025</p>
        <p>[5] Perrone & Pierre Auger Collaboration (RICAP 2022)</p>
      </div>
    </div>
  );
}
