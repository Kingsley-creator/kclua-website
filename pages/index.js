export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222", margin: 0 }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80') center/cover",
          color: "white",
          padding: "120px 20px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Protecting Mount Elgon. Empowering Communities.
        </h1>
        <p style={{ maxWidth: "750px", margin: "0 auto", fontSize: "1.2rem" }}>
          Kimilili Community Land Users’ Association (KCLUA) restores ecosystems,
          promotes sustainable land use, and creates opportunities for local communities.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={btnGreen}>Donate Now</button>
          <button style={btnGold}>Partner With Us</button>
        </div>
      </section>

      {/* ABOUT */}
      <section style={section}>
        <h2 style={title}>About KCLUA</h2>
        <p style={text}>
          KCLUA is a registered community-based organization founded in 2017,
          working across Bungoma, Trans Nzoia, and the Mount Elgon ecosystem.
          We focus on land governance, biodiversity protection, climate resilience,
          youth empowerment, and sustainable livelihoods.
        </p>
      </section>

      {/* IMPACT */}
      <section style={{ ...section, background: "#f7f7f7" }}>
        <h2 style={title}>Our Impact So Far</h2>

        <div style={grid}>
          <div style={card}>
            <h3>1,675+</h3>
            <p>Farmers & community members reached</p>
          </div>

          <div style={card}>
            <h3>1,500+</h3>
            <p>School pupils engaged</p>
          </div>

          <div style={card}>
            <h3>5 Hectares</h3>
            <p>Land restored</p>
          </div>

          <div style={card}>
            <h3>1.4 Million</h3>
            <p>Seedling production capacity</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={section}>
        <h2 style={title}>What We Do</h2>

        <div style={grid}>
          <div style={card}>
            <h3>🌱 Reforestation</h3>
            <p>Restoring degraded land using indigenous trees.</p>
          </div>

          <div style={card}>
            <h3>🎓 Youth Education</h3>
            <p>Environmental clubs, school outreach, future stewardship.</p>
          </div>

          <div style={card}>
            <h3>🤝 Community Empowerment</h3>
            <p>Training, awareness, inclusion of women and youth.</p>
          </div>

          <div style={card}>
            <h3>🐝 Sustainable Livelihoods</h3>
            <p>Beekeeping, ecotourism, bamboo crafts, value addition.</p>
          </div>
        </div>
      </section>

      {/* WHY SUPPORT */}
      <section style={{ ...section, background: "#0b3d2e", color: "white" }}>
        <h2 style={{ ...title, color: "white" }}>Why Support KCLUA</h2>

        <p style={{ ...text, color: "#ddd" }}>
          Your support protects biodiversity, empowers communities,
          creates jobs for youth and women, and restores one of East Africa’s
          most important ecosystems.
        </p>

        <button style={btnGold}>Support Our Mission</button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#ccc",
          padding: "40px 20px",
          textAlign: "center"
        }}
      >
        <h3 style={{ color: "white" }}>KCLUA</h3>
        <p>Kimilili Community Land Users’ Association</p>
        <p>Email: info@kclua.org | Phone: +254 700 000 000</p>
        <p>Mount Elgon Region, Kenya</p>
        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          © 2026 KCLUA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const section = {
  padding: "70px 20px",
  maxWidth: "1100px",
  margin: "auto",
  textAlign: "center"
};

const title = {
  fontSize: "2.2rem",
  marginBottom: "20px",
  color: "#0b3d2e"
};

const text = {
  fontSize: "1.1rem",
  maxWidth: "800px",
  margin: "auto",
  lineHeight: "1.7"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  marginTop: "35px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
};

const btnGreen = {
  background: "#0b6b47",
  color: "white",
  border: "none",
  padding: "14px 26px",
  margin: "10px",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer"
};

const btnGold = {
  background: "#d4af37",
  color: "#111",
  border: "none",
  padding: "14px 26px",
  margin: "10px",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer"
};
