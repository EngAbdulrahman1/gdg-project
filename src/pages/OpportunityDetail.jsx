import { useState } from "react";
import { CompanyLogo } from "../components/OpportunityCard";

const TYPE_COLORS = {
  Internship:  { bg: "#e6f4ea", text: "#1e7e34" },
  Scholarship: { bg: "#fff3cd", text: "#b8860b" },
  COOP:        { bg: "#e8f0fe", text: "#1a56db" },
  Competition: { bg: "#fce8e6", text: "#c5221f" },
  Bootcamp:    { bg: "#f3e8fd", text: "#7b2fbe" },
};

function BookmarkIcon({ filled }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
      fill={filled ? "#1e1b3a" : "none"}
      stroke="#1e1b3a" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

export default function OpportunityDetail({ opp, isBookmarked, onBookmark, onBack }) {
  const deadlineStr = new Date(opp.application_deadline).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric"
  });
  const colors = TYPE_COLORS[opp.opportunity_type] || { bg: "#f0f0f0", text: "#666" };

  return (
    <div style={{
      flex: 1,
      fontFamily: "'Inter', 'Sora', 'Segoe UI', sans-serif",
      display: "flex", flexDirection: "column",
      minHeight: "100vh",
    }}>
      <div style={{
        background: "#3d2a7a", padding: "14px 24px",
        display: "flex", justifyContent: "flex-end", flexShrink: 0,
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", cursor: "pointer",
          fontSize: "14px", color: "#c4b8e8", fontWeight: 600,
          display: "flex", alignItems: "center", gap: "6px",
          fontFamily: "inherit", transition: "color 0.15s", textDecoration: "underline",
        }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "#c4b8e8"}
        >
          Back to Opportunities →
        </button>
      </div>

      <div style={{
        background: "#e8e4f5", flex: 1,
        padding: "24px",
      }}>
        <div style={{
          display: "flex",
          gap: "24px",
          alignItems: "stretch",
          width: "100%",
          flexWrap: "wrap",
        }}>

          <div style={{
            flex: 1,
            minWidth: "280px",
            background: "linear-gradient(135deg, #CBF6F7 0%, #FFFFFF 100%)",
            borderRadius: "8px", border: "1px solid #E4E5E8",
            padding: "24px 28px",
            boxShadow: "0 10px 18px rgba(0,0,0,0.06)",
          }}>
            <h2 style={{ margin: "0 0 8px", fontSize: "25px", fontWeight: 500, color: "#18191C", fontFamily: "Poppins, Inter, sans-serif", lineHeight: "54px" }}>
              {opp.title}
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{
                background: colors.bg, color: colors.text,
                borderRadius: "4px", padding: "4px 12px",
                fontSize: "11px", fontWeight: 700, textTransform: "uppercase"
              }}>{opp.opportunity_type}</span>
              <span style={{ fontSize: "16px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {new Date(opp.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", height: "48px" }}>
              <CompanyLogo company={opp.organization_name} size={38} />
              <span style={{ fontSize: "16px", fontWeight: 600, color: "#1e1b3a", fontFamily: "Inter, sans-serif" }}>
                {opp.organization_name}
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px", alignItems: "center" }}>
              {[
                opp.is_paid ? "Paid" : "Unpaid",
                opp.is_urgent ? "Urgent" : null,
                opp.major,
              ].filter(Boolean).map(tag => (
                <span key={tag} style={{
                  background: "#e2e2e2", border: "1px solid #c8c8c8",
                  borderRadius: "20px", padding: "3px 10px",
                  fontSize: "12px", color: "#555",
                  display: "inline-flex", alignItems: "center", gap: "3px"
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: "1px solid #E4E5E8", borderRadius: "8px",
              overflow: "hidden", marginBottom: "28px"
            }}>
              {[
                { icon: "📍", label: "Location", value: opp.location },
                { icon: "📅", label: "Deadline", value: deadlineStr },
                { icon: "🕐", label: "Type", value: opp.opportunity_type },
                { icon: "📋", label: "Major", value: opp.major },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: "14px 18px", background: "rgba(255,255,255,0.5)",
                  borderRight: i < 3 ? "1px solid #E4E5E8" : "none",
                }}>
                  <p style={{ margin: "0 0 4px", fontSize: "11px", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                    {item.icon} {item.label}:
                  </p>
                  <p style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: "#334155" }}>{item.value}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18191C", marginBottom: "8px", fontFamily: "Inter, sans-serif", lineHeight: "28px" }}>
              About this Opportunity:
            </h3>
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#5E6670", lineHeight: "24px", marginBottom: "22px", fontFamily: "Inter, sans-serif" }}>
              {opp.description}
            </p>

            {opp.responsibilities && (
              <>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18191C", marginBottom: "8px", fontFamily: "Inter, sans-serif" }}>
                  Responsibilities
                </h3>
                <ul style={{ margin: "0 0 22px", paddingLeft: "20px", fontSize: "16px", fontWeight: 400, color: "#5E6670", lineHeight: "24px", fontFamily: "Inter, sans-serif" }}>
                  {opp.responsibilities.split("\n").map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            )}

            {opp.requirements && (
              <>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18191C", marginBottom: "8px", fontFamily: "Inter, sans-serif" }}>
                  Requirements
                </h3>
                <ul style={{ margin: "0 0 22px", paddingLeft: "20px", fontSize: "16px", fontWeight: 400, color: "#5E6670", lineHeight: "24px", fontFamily: "Inter, sans-serif" }}>
                  {opp.requirements.split("\n").map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </>
            )}

            {opp.benefits && (
              <>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18191C", marginBottom: "8px", fontFamily: "Inter, sans-serif" }}>
                  Benefits
                </h3>
                <ul style={{ margin: "0 0 28px", paddingLeft: "20px", fontSize: "16px", fontWeight: 400, color: "#5E6670", lineHeight: "24px", fontFamily: "Inter, sans-serif" }}>
                  {opp.benefits.split("\n").map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button style={{
                background: "#09ADB0", color: "#fff", border: "none",
                borderRadius: "8px", padding: "11px 22px",
                fontSize: "14px", fontWeight: 600, cursor: "pointer",
                display: "flex", alignItems: "center", gap: "6px",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#078a8c"}
                onMouseLeave={e => e.currentTarget.style.background = "#09ADB0"}
              >
                🔗 Share this Opportunity!
              </button>
            </div>
          </div>

          
          <div style={{
            width: "341px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignSelf: "stretch",
          }}>

            <div style={{
              height: "526px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #CBF6F7 0%, #FFFFFF 100%)",
              borderRadius: "8px", border: "1px solid #E4E5E8",
              padding: "24px", display: "flex", flexDirection: "column",
              boxShadow: "0 10px 18px rgba(0,0,0,0.06)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h3 style={{ margin: 0, fontSize: "25px", fontWeight: 500, color: "#18191C", fontFamily: "Poppins, sans-serif", lineHeight: "38px" }}>
                  Apply Now
                </h3>
                <button onClick={() => onBookmark(opp.id)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "2px", transition: "opacity 0.15s", width: "30px", height: "26px"
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  <BookmarkIcon filled={isBookmarked} />
                </button>
              </div>

              <p style={{ margin: "0 0 4px", fontSize: "22px", fontWeight: 500, color: "#18191C", fontFamily: "Poppins, sans-serif", lineHeight: "33px" }}>
                Deadline:
              </p>
              <p style={{ margin: "0 0 24px", fontSize: "22px", fontWeight: 700, color: "#e05252", fontFamily: "Poppins, sans-serif" }}>
                {deadlineStr}
              </p>

              
              {(opp.is_expired || opp.status === "expired") && (
                <div style={{
                  background: "#fce8e6", color: "#c5221f",
                  borderRadius: "6px", padding: "8px 12px",
                  fontSize: "13px", fontWeight: 600,
                  marginBottom: "12px", textAlign: "center",
                }}>
                  ⚠️ This opportunity has expired
                </div>
              )}

              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                
                <a
                  href={opp.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    background: opp.is_expired ? "#aaa" : "#09ADB0",
                    color: "#fff", borderRadius: "8px",
                    padding: "0", fontSize: "14px", fontWeight: 600,
                    textDecoration: "none", transition: "background 0.15s",
                    width: "100%", height: "64px",
                    fontFamily: "Inter, sans-serif",
                    pointerEvents: opp.is_expired ? "none" : "auto",
                  }}
                  onMouseEnter={e => { if (!opp.is_expired) e.currentTarget.style.background = "#078a8c"; }}
                  onMouseLeave={e => { if (!opp.is_expired) e.currentTarget.style.background = "#09ADB0"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Apply Now!
                </a>

                <button onClick={() => onBookmark(opp.id)} style={{
                  background: "rgba(255,255,255,0.8)", color: "#09ADB0",
                  border: "1.5px solid #09ADB0", borderRadius: "8px",
                  width: "100%", height: "64px", fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "8px",
                  fontFamily: "inherit", transition: "all 0.15s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#09ADB0"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.8)"; e.currentTarget.style.color = "#09ADB0"; }}
                >
                  Bookmark
                  <BookmarkIcon filled={isBookmarked} />
                </button>
              </div>
            </div>

            <div style={{
              flex: 1,
              overflow: "hidden",
              background: "linear-gradient(135deg, #CBF6F7 0%, #FFFFFF 100%)",
              borderRadius: "8px", border: "1px solid #E4E5E8",
              padding: "24px", display: "flex", flexDirection: "column",
              boxShadow: "0 10px 18px rgba(0,0,0,0.06)",
            }}>
              <h3 style={{ margin: "0 0 16px", fontSize: "16px", fontWeight: 700, color: "#1e1b3a", display: "flex", alignItems: "center", gap: "6px" }}>
                🙂 About this Organization!
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", height: "48px" }}>
                <CompanyLogo company={opp.organization_name} size={40} />
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#1e1b3a", fontFamily: "Inter, sans-serif" }}>
                  {opp.organization_name}
                </span>
              </div>
              <p style={{ margin: "0 0 10px", fontSize: "14px", fontWeight: 400, color: "#767F8C", lineHeight: "20px", fontFamily: "Inter, sans-serif", width: "226px" }}>
                A leading organization focused on Vision 2030 goals...
              </p>
              <button style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: "13px", color: "#09ADB0", padding: 0, fontWeight: 600,
                transition: "color 0.15s", textAlign: "left", fontFamily: "Inter, sans-serif",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "#078a8c"}
                onMouseLeave={e => e.currentTarget.style.color = "#09ADB0"}
              >
                [ Read more ]
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

