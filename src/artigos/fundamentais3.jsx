export default function Fundamentais3() {
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
        Energia de outro mundo: por que os raios cósmicos são tão poderosos?
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
      <div style={{ width: "100%", marginBottom: "35px" }}>
        <img
          src="/fundamentais3.jpg"
          alt="Imagem relacionada ao artigo"
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div
          style={{
            textAlign: "right",
            fontSize: "0.8rem",
            marginTop: "5px",
            color: "#bbbbbb",
            fontStyle: "italic",
          }}
        >
          Imagem: NASA/CXC/UMass/Q.D. Wang
        </div>
      </div>

      {/* Conteúdo */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "1.2em" }}>
        <p>
          Os raios cósmicos impressionam porque alcançam energias muito
          superiores às produzidas por qualquer acelerador humano. Enquanto
          grandes instalações terrestres conseguem atingir alguns trilhões de
          elétron-volts, certas partículas vindas do espaço chegam à Terra com
          energias mais de cem milhões de vezes maiores. Essa diferença extrema
          revela que há regiões no universo capazes de gerar condições físicas
          que ultrapassam tudo o que conseguimos reproduzir em laboratório.
        </p>

        <p>
          O principal motivo para essa potência extraordinária está nos
          ambientes onde essas partículas são aceleradas. Em diferentes partes
          do cosmos, existem frentes de choque que se expandem rapidamente,
          zonas de rotação intensa e campos magnéticos que mudam de intensidade
          em escalas extremamente curtas. Esses cenários permitem que uma
          partícula seja acelerada repetidas vezes, recebendo sucessivos
          incrementos de energia enquanto atravessa regiões turbulentas. Quanto
          mais forte e extensa essa turbulência, maior o limite de energia
          alcançável.
        </p>

        <p>
          Além disso, esses ambientes cósmicos operam em dimensões que não têm
          paralelo na Terra. Ondas de choque que se estendem por anos-luz,
          estruturas magnéticas que se esticam por centenas de parsecs e jatos
          relativísticos que viajam a velocidades próximas à da luz criam
          condições onde a energia pode se acumular por longos períodos — às
          vezes milhares de anos. Esse acúmulo prolongado permite que algumas
          partículas atinjam energias que desafiam até mesmo os modelos teóricos
          mais conservadores.
        </p>

        <p>
          As energias extremas dos raios cósmicos também revelam algo
          fundamental sobre o universo: ele é permeado por processos altamente
          dinâmicos, capazes de transferir grandes quantidades de energia para
          partículas minúsculas. Isso indica a presença de fenômenos que
          envolvem gravidade extrema, turbulência em escalas gigantescas e
          campos magnéticos muito mais complexos do que os observados em nossa
          vizinhança planetária.
        </p>

        <p>
          Quando uma partícula dessas alcança a Terra, ela não traz apenas
          energia; traz indícios de ambientes distantes e de condições físicas
          que ainda estamos aprendendo a compreender. A análise dessas
          partículas permite explorar regiões inacessíveis do cosmos e
          investigar leis da natureza em regimes que nenhum experimento
          terrestre consegue alcançar.
        </p>

        <p>
          Por isso os raios cósmicos são considerados mensageiros de “outro
          mundo”: não apenas pela origem distante, mas pela capacidade de
          carregar energias que revelam a força e a complexidade dos processos
          que moldam o universo.
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
          Schlickeiser, R. <i>Cosmic Ray Astrophysics</i>. Springer, 2002.
        </li>
        <li>
          Gaisser, T. K.; Engel, R.; Stanev, T.{" "}
          <i>Cosmic Rays and Particle Physics</i>. Cambridge University Press,
          2016.
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
          Dorman, L.{" "}
          <i>Cosmic Rays in the Earth’s Atmosphere and Underground</i>.
          Springer, 2004.
        </li>
      </ul>
    </div>
  );
}
