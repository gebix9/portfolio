const Etude = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0ede7",
        padding: "3rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <h1 className="mb-4 text-center fw-bold" style={{ color: "#333" }}>
          Parcours Études & Stages
        </h1>

        <div style={{ fontSize: "1.1rem", lineHeight: "2", color: "#444" }}>
          <p className="mb-4">
            Mon parcours a réellement débuté en filière STI2D (Sciences et
            Technologies de l'Industrie et du Développement Durable), où j'ai pu découvrir l'univers du
            développement à travers plusieurs projets pratiques.
          </p>

          <p className="mb-4">
            J'ai notamment travaillé avec Python et Arduino, ce qui m'a
            permis d'aborder des bases d'algorithmie via la logique combinatoire (portes logiques).
            Cette approche m'a particulièrement plu et m'a naturellement conduit à choisir
            l'option SLAM (Solutions Logicielles et Applications Métiers) en terminale.
          </p>

          <p className="mb-4">
            Cette orientation a été confirmée avec mon entrée en BTS SIO (Services
            Informatiques aux Organisations), où j'ai approfondi mes connaissances en algorithmie et
            en programmation avec différents langages : C#, Java,
            PHP, JavaScript, CSS, HTML,
            SQL. J'ai également utilisé des frameworks comme .NET,
            Entity Framework et Symfony.
          </p>

          <div className="mb-4">
            <p className="mb-3">
              Mon projet de fin d'études était un e-commerce nommé Ciel Bijou, développé en
              duo. Il comportait deux parties :
            </p>
            <ul style={{ paddingLeft: "2rem", marginTop: "1rem" }}>
              <li className="mb-2">Une application web Symfony servant de site marchand.</li>
              <li className="mb-2">Une application lourde C# pour la gestion (stock, commandes, etc.).</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="mb-3">
              J'ai aussi effectué deux stages chez Diluz :
            </p>
            <ul style={{ paddingLeft: "2rem", marginTop: "1rem" }}>
              <li className="mb-2">
                Un premier stage de 4 semaines où j'ai découvert des technologies comme
                Vue.js, Node.js et TypeScript.
              </li>
              <li className="mb-2">
                Un second stage de 8 semaines l'année suivante, avec un nouveau projet, ce
                qui m'a permis de consolider mes compétences sur ces technologies modernes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etude;