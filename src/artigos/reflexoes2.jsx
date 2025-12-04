export default function Reflexoes2({ setPage }) {
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
          Por que raios cósmicos (não) importam
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
          Todo mundo se lembra da vez em que, durante uma aula de álgebra na
          escola, um aluno levantou a mão, estufou o peito e bravamente
          perguntou ao professor:{" "}
          <i>
            Para que isso serve? Como vou usar isso na vida? Isso importa mesmo?
          </i>{" "}
          Tendo sido você, leitor, o espectador desse momento ou o corajoso
          aluno questionador, muito provavelmente essa pergunta também surgiu na
          sua mente – e talvez tenha surgido ao ler os outros textos desse site,
          afinal, por que estudar raios cósmicos?
        </p>

        <p>
          Respondo com uma provocação: ninguém acorda de manhã pensando em como
          o comportamento da cascata muônica de um chuveiro atmosférico pode
          melhorar sua vida. Ainda assim, dos estudos dessas partículas,
          surgiram tecnologias para detectar radiações em hospitais e até
          modelos climáticos melhores. A ciência encontra usos mesmo onde
          ninguém os buscou. Mas este texto não é sobre raios cósmicos. É sobre
          o erro profundo de achar que a ciência precisa ser útil.
        </p>

        <p>
          Mais do que isso, a ciência só floresce plenamente quando não está
          obrigada a “servir”, e exigir utilidade imediata é uma forma de
          empobrecer o próprio pensamento científico.
        </p>

        <p>
          Uma das tendências do nosso tempo é submeter tudo — inclusive a
          ciência — a uma lógica de resultados, métricas e otimização. Essa
          lógica ecoa a estrutura mental de uma espécie de utilitarismo, que
          tenta medir ações apenas em termos de maximização de um suposto
          “bem-estar”.
        </p>

        <p>
          O filósofo e psicanalista Érico Andrade <b>[1]</b> mostra as
          complicações disso num plano moral: o utilitarismo “esvazia os seres
          humanos de suas motivações”, pressupondo que todo mundo age segundo um
          cálculo frio de dor e prazer — mas isso não corresponde à realidade
          humana, que é cheia de afetos, contextos específicos e valores
          culturais. Assim, uma ação pode ser moralmente valiosa mesmo quando
          contraria a solução ótima utilitarista.
        </p>

        <p>
          Pois bem: se nem pessoas cabem nesse modelo, por que imaginamos que a
          ciência caberia? Exigir que cada pesquisa produza “o bem para o maior
          número de pessoas”, que cada projeto gere resultados “úteis”,
          significa impor à ciência o mesmo estreitamento conceitual: reduzir a
          curiosidade humana a um cálculo.
        </p>

        <p>
          Em "Os usos sociais da ciência" [2], o filósofo Pierre Bourdieu
          fundamenta que a ciência, enquanto um “campo autônomo”, é regida por
          normas próprias — métodos, críticas e disputas internas — e, quanto
          mais autônomo é um campo, mais ele escapa das leis sociais externas.
          Isso significa que a ciência prospera justamente quando não é obrigada
          a responder diretamente a demandas políticas ou econômicas.
        </p>

        <p>
          Ou seja: ainda que a ciência tenha suas responsabilidades sociais, ela
          precisa definir seus próprios problemas. Novamente: exigir utilidade
          imediata é transformar a ciência em mera prestadora de serviços — e,
          com isso, matar aquilo que ela tem de mais criativo e transformador.
        </p>

        <p>
          Por fim, quero argumentar que a ideia de que a ciência “tem que servir
          para algo” é historicamente falsa. As equações de Maxwell não foram
          escritas para criar o Wi-Fi. A teoria dos números não foi criada para
          inventar a criptografia. Muitas das grandes descobertas da física
          nasceram quando alguém decidiu olhar para o mundo apenas porque ele
          era belo e/ou intrigante. E, ironicamente, é quando a ciência se
          permite esse luxo — esse espaço de inutilidade — que surgem as
          novidades mais transformadoras.
        </p>

        <p>
          Raios cósmicos importam porque nos lembram disso. Eles atravessam a
          atmosfera sem pedir licença, lembrando que o universo é muito maior do
          que nossas demandas sociais. E, assim, eles nos oferecem um encontro
          com o desconhecido, com o inexplorado, com o inútil.
        </p>

        <p>
          <b>Raios cósmicos importam porque eles não importam.</b>
        </p>
      </div>

      {/* REFERÊNCIAS */}
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
          [1] ANDRADE, Érico. <i>O homem vazio: uma crítica ao utilitarismo.</i>{" "}
          Trans/Form/Ação, Marília, v. 36, n. 2, p. 105–122, maio/ago. 2013.
        </li>

        <li>
          [2] BOURDIEU, Pierre. <i>Os usos sociais da ciência.</i> Trad. Denice
          Barbara Catani. 1. ed. São Paulo: Editora UNESP, 2004.
        </li>
      </ul>
    </div>
  );
}
