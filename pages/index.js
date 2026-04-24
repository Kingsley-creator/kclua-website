export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial, sans-serif", color: "#1a1a1a" }}>
      
      {/* NAVBAR */}
      <header style={nav}>
        <div>
          <h2 style={{ margin: 0, color: "#0b5d3b", letterSpacing: "1px" }}>KCLUA</h2>
          <small style={{ color: "#666" }}>Protecting Land. Empowering Communities.</small>
        </div>

        <nav style={navLinks}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
          <button style={supportBtn}>Support Us</button>
        </nav>
      </header>

      {/* HERO */}
      <section style={hero}>
        <div style={overlay}>
          <div style={{ maxWidth: "850px", margin: "auto" }}>
            <h1 style={heroTitle}>
              Protecting Mount Elgon. Empowering Communities.
            </h1>

            <p style={heroText}>
              Kimilili Community Land Users’ Association works to restore ecosystems,
              strengthen livelihoods, and promote sustainable land use across the
              Mount Elgon region.
            </p>

            <div style={{ marginTop: "30px" }}>
              <button style={greenBtn}>Learn More</button>
              <button style={goldBtn}>Support Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={section}>
        <h2 style={title}>Who We Are</h2>
        <p style={paragraph}>
          KCLUA is a registered community-based organization founded in 2017,
          serving Bungoma, Trans Nzoia, and the wider Mount Elgon ecosystem.
          We champion environmental conservation, equitable land governance,
          youth inclusion, and community resilience.
        </p>
      </section>

      {/* IMPACT */}
      <section style={{ ...section, background: "#f8f8f8" }}>
        <h2 style={title}>Our Impact</h2>

        <div style={grid}>
          <div style={card}>
            <h3>1,675+</h3>
            <p>Community members reached</p>
          </div>

          <div style={card}>
            <h3>1,500+</h3>
            <p>Pupils engaged</p>
          </div>

          <div style={card}>
            <h3>5 Hectares</h3>
            <p>Land restored</p>
          </div>

          <div style={card}>
            <h3>1.4M</h3>
            <p>Seedlings capacity</p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" style={section}>
        <h2 style={title}>Our Programs</h2>

        <div style={grid}>
          <div style={card}>
            <h3>🌱 Reforestation</h3>
            <p>Restoring degraded landscapes using indigenous trees.</p>
          </div>

          <div style={card}>
            <h3>🎓 Youth Education</h3>
            <p>Environmental clubs and mentorship in schools.</p>
          </div>

          <div style={card}>
            <h3>🤝 Community Outreach</h3>
            <p>Training farmers and households on sustainable practices.</p>
          </div>

          <div style={card}>
            <h3>🐝 Livelihood Support</h3>
            <p>Beekeeping, ecotourism, crafts and enterprise development.</p>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section style={supportSection}>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "20px" }}>
          Help Protect Nature & Build Better Futures
        </h2>

        <p style={{ maxWidth: "800px", margin: "auto", lineHeight: "1.8" }}>
          Your support helps communities conserve biodiversity, restore forests,
          empower youth and women, and create sustainable opportunities across
          the Mount Elgon landscape.
        </p>

        <button style={{ ...goldBtn, marginTop: "30px" }}>Support Us</button>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={footer}>
        <h3 style={{ color: "white", marginBottom: "10px" }}>KCLUA</h3>
        <p>Kimilili Community Land Users’ Association</p>
        <p>Mount Elgon Region, Kenya</p>
        <p>Email: info@kclua.org</p>
        <p>Phone: +254 700 000 000</p>

        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          © 2026 KCLUA. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

/* STYLES */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  background: "white",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
};

const navLinks = {
  display: "flex",
  gap: "20px",
  alignItems: "center"
};

const hero = {
  background:
    "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover",
  minHeight: "90vh"
};

const overlay = {
  background: "rgba(0,0,0,0.55)",
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
  color: "white"
};

const heroTitle = {
  fontSize: "3.4rem",
  marginBottom: "20px",
  lineHeight: "1.2"
};

const heroText = {
  fontSize: "1.2rem",
  maxWidth: "760px",
  margin: "auto",
  lineHeight: "1.8"
};

const section = {
  padding: "80px 20px",
  maxWidth: "1150px",
  margin: "auto",
  textAlign: "center"
};

const title = {
  fontSize: "2.3rem",
  color: "#0b5d3b",
  marginBottom: "20px"
};

const paragraph = {
  maxWidth: "850px",
  margin: "auto",
  fontSize: "1.1rem",
  lineHeight: "1.8"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "22px",
  marginTop: "35px"
};

const card = {
  background: "white",
  padding: "28px",
  borderRadius: "14px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
};

const greenBtn = {
  background: "#0b5d3b",
  color: "white",
  border: "none",
  padding: "14px 26px",
  borderRadius: "8px",
  margin: "10px",
  cursor: "pointer",
  fontSize: "1rem"
};

const goldBtn = {
  background: "#d4af37",
  color: "#111",
  border: "none",
  padding: "14px 26px",
  borderRadius: "8px",
  margin: "10px",
  cursor: "pointer",
  fontSize: "1rem"
};

const supportBtn = {
  background: "#d4af37",
  color: "#111",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const supportSection = {
  background: "#0b5d3b",
  color: "white",
  textAlign: "center",
  padding: "90px 20px"
};

const footer = {
  background: "#111",
  color: "#bbb",
  textAlign: "center",
  padding: "50px 20px",
  lineHeight: "1.8"
};
