import whyUs from "../assets/why-us.png";
import howItWorks from "../assets/how-it-works.png";
import getStarted from "../assets/get-started.png";
import logo from "../assets/logo.png";

export default function LandingPage({ onGetStarted }) {
  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      <nav style={{
        background: "#45247F",
        padding: "26px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <img src={logo} alt="Opportunity Hub" style={{ width: 67, height: 65, objectFit: "contain" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#fff", fontSize: "18px" }}>Already have an account?</span>
          <button
            style={{
              background: "linear-gradient(135deg, #09ADB0, #fff)",
              color: "#1E1E1E", border: "1px solid #2C2C2C",
              borderRadius: "999px", padding: "6px 16px",
              fontSize: "15px", fontWeight: 400,
              cursor: "pointer", width: "83px", height: "31px",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Log in</button>
        </div>
      </nav>

      <div style={{
        background: "#DBD9FF",
        padding: "48px 32px",
        textAlign: "center",
        minHeight: "calc(100vh - 117px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{
            position: "absolute", top: "20%", left: "52%",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,120,165,0.9) 0%, transparent 70%)",
            filter: "blur(50px)",
          }} />
          <div style={{
            position: "absolute", top: "15%", left: "35%",
            width: "480px", height: "450px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(160,130,255,0.85) 0%, transparent 70%)",
            filter: "blur(50px)",
          }} />
          <div style={{
            position: "absolute", top: "25%", left: "18%",
            width: "450px", height: "420px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(60,210,160,0.85) 0%, transparent 70%)",
            filter: "blur(50px)",
          }} />
          <div style={{
            position: "absolute", top: "35%", left: "38%",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(80,200,230,0.7) 0%, transparent 70%)",
            filter: "blur(50px)",
          }} />
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          width: "100%", display: "flex",
          flexDirection: "column", alignItems: "center",
        }}>

          <h1 style={{
            fontSize: "clamp(42px, 5vw, 72px)",
            fontWeight: 700, color: "#101010",
            lineHeight: 1.08, margin: "0 0 12px",
            letterSpacing: "0.4px", textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            Connecting Students with Opportunities &<br />Organizations
          </h1>

          <p style={{
            fontSize: "20px", color: "#101010",
            lineHeight: 1.5, margin: 0,
            fontWeight: 400, textAlign: "center",
          }}>
            Discover internships, scholarships & more<br />
            Tailored for students and organizations in Saudi Arabia
          </p>

          <div style={{ height: "48px" }} />

          <div style={{
            display: "flex", gap: "16px",
            width: "100%", maxWidth: "1400px",
            justifyContent: "center", flexWrap: "wrap",
          }}>

            
            <div
              style={{
                flex: "1 1 380px", maxWidth: "480px", height: "500px",
                borderRadius: "16px", border: "4px solid #000", overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "transform 0.15s, box-shadow 0.15s", cursor: "pointer",
                
                background: "linear-gradient(145deg, rgba(200,240,220,0.85) 0%, rgba(220,215,255,0.9) 60%, rgba(255,255,255,0.95) 100%)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                padding: "24px 24px 20px", flex: 1,
                display: "flex", flexDirection: "column", gap: "20px",
              }}>
                <div style={{ textAlign: "left" }}>
                  <svg width="28" height="28" viewBox="0 0 100 100" fill="#FF6B35">
                    <path d="M50 5 C53 5 55 8 55 12 L55 20 C55 22 57 24 59 23 L66 19 C70 17 74 19 76 23 C78 27 76 31 72 33 L65 37 C63 38 63 41 65 42 L72 46 C76 48 78 52 76 56 C74 60 70 62 66 60 L59 56 C57 55 55 57 55 59 L55 67 C55 71 53 74 50 74 C47 74 45 71 45 67 L45 59 C45 57 43 55 41 56 L34 60 C30 62 26 60 24 56 C22 52 24 48 28 46 L35 42 C37 41 37 38 35 37 L28 33 C24 31 22 27 24 23 C26 19 30 17 34 19 L41 23 C43 24 45 22 45 20 L45 12 C45 8 47 5 50 5Z" />
                  </svg>
                </div>
                
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: 700, color: "#101010", textAlign: "left" }}>
                  Why us?
                </h3>
                <p style={{ margin: 0, fontSize: "16px", color: "#333", lineHeight: 1.6, textAlign: "left" }}>
                  We simplify opportunity discovery for students and make it easier for organizations to reach the right talent in Saudi Arabia.
                </p>
              </div>
              <div style={{ height: "140px", overflow: "hidden", flexShrink: 0 }}>
                <img src={whyUs} alt="Why us" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            
            <div
              style={{
                flex: "1 1 380px", maxWidth: "480px", height: "500px",
                borderRadius: "16px", border: "4px solid #000", overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "transform 0.15s, box-shadow 0.15s", cursor: "pointer",
                background: "linear-gradient(145deg, rgba(255,200,220,0.8) 0%, rgba(200,180,255,0.85) 50%, rgba(255,255,255,0.95) 100%)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                padding: "24px 24px 20px", flex: 1,
                display: "flex", flexDirection: "column", gap: "20px",
              }}>
                <div style={{
                  width: "32px", height: "16px",
                  background: "#4CAF50", borderRadius: "16px 16px 0 0",
                }} />
                
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: 700, color: "#101010", textAlign: "left" }}>
                  How It Works
                </h3>
                <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "16px", color: "#333", lineHeight: 1.7, textAlign: "left" }}>
                  <li>Find opportunities that match your goals</li>
                  <li>Check details like eligibility and deadlines</li>
                  <li>Apply quickly without complicated steps through the platform or via external links</li>
                </ul>
              </div>
              <div style={{ height: "140px", overflow: "hidden", flexShrink: 0 }}>
                <img src={howItWorks} alt="How it works" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

            
            <div
              style={{
                flex: "1 1 380px", maxWidth: "480px", height: "500px",
                borderRadius: "16px", border: "4px solid #000", overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "transform 0.15s, box-shadow 0.15s", cursor: "pointer",
                background: "linear-gradient(145deg, rgba(180,230,255,0.8) 0%, rgba(220,215,255,0.85) 50%, rgba(255,240,220,0.9) 100%)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                padding: "24px 24px 20px", flex: 1,
                display: "flex", flexDirection: "column", gap: "20px",
              }}>
                <div style={{ fontSize: "26px", color: "#7B61FF", lineHeight: 1, textAlign: "left" }}>✦</div>
                
                <h3 style={{ margin: 0, fontSize: "28px", fontWeight: 700, color: "#101010", textAlign: "left" }}>
                  Ready to Get Started?
                </h3>
                <p style={{ margin: 0, fontSize: "16px", color: "#333", lineHeight: 1.6, textAlign: "left" }}>
                  Whether you're a student or an organization, your journey starts here.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "16px", color: "#101010" }}>→</span>
                  <button
                    onClick={onGetStarted}
                    style={{
                      background: "#09ADB0", color: "#fff",
                      border: "none", borderRadius: "999px",
                      padding: "12px 28px", fontSize: "15px",
                      fontWeight: 600, cursor: "pointer",
                      display: "inline-flex", alignItems: "center",
                      whiteSpace: "nowrap", transition: "background 0.15s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#078a8c"}
                    onMouseLeave={e => e.currentTarget.style.background = "#09ADB0"}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div style={{ height: "140px", overflow: "hidden", flexShrink: 0 }}>
                <img src={getStarted} alt="Get started" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
