import { OPPORTUNITIES, daysLeft } from "../data/opportunities";
import { OpportunityCard } from "../components/OpportunityCard";

export default function DeadlineTrackerPage({ bookmarkedIds, onBookmark, onViewDetail }) {
  const bookmarked = OPPORTUNITIES
    .filter(o => bookmarkedIds.has(o.id))
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      minHeight: "100vh", fontFamily: "'Inter', 'Sora', 'Segoe UI', sans-serif",
      background: "#e8e4f5",
    }}>
      <div style={{
        background: "#3d2a7a", padding: "30px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div>
          <h1 style={{
            margin: 0, fontSize: "40px", fontWeight: 500,
            color: "#fff", fontFamily: "Inter, sans-serif", lineHeight: "48px"
          }}>Bookmarks</h1>
          <p style={{
            margin: "4px 0 0", fontSize: "14px",
            color: "#979797", fontFamily: "Inter, sans-serif"
          }}>
            have all of your opportunities sorted by the nearest deadline
          </p>
        </div>
        <div style={{
          display: "flex", alignItems: "center",
          background: "#fff", borderRadius: "999px",
          padding: "10px 16px", width: "281px", height: "40px",
          border: "1px solid #e2e8f0", boxSizing: "border-box",
        }}>
          <input placeholder="Search saved opportunities..." style={{
            border: "none", outline: "none", fontSize: "13px",
            color: "#334155", background: "transparent",
            width: "100%", fontFamily: "inherit",
          }} />
          <span style={{ color: "#94a3b8", fontSize: "14px", marginLeft: "8px" }}>🔍</span>
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px 32px" }}>
        <div style={{
          background: "#fff", borderRadius: "12px",
          border: "1px solid #E4E5E8",
          padding: "24px 32px", marginBottom: "28px",
          boxShadow: "0 10px 18px rgba(0,0,0,0.06)",
        }}>
          <h2 style={{
            margin: "0 0 4px", fontSize: "27px", fontWeight: 700,
            color: "#2B2B2B", fontFamily: "Inter, sans-serif"
          }}>
            Deadline Tracker
          </h2>
          <p style={{
            margin: "0 0 20px", fontSize: "14px",
            color: "#979797", fontFamily: "Inter, sans-serif",
            width: "244px"
          }}>
            {bookmarked.length} saved · sorted by nearest deadline
          </p>

          {bookmarked.length === 0 ? (
            <div style={{ textAlign: "center", padding: "30px", color: "#94a3b8" }}>
              <p>No bookmarked opportunities yet.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              {bookmarked.map(opp => {
                const days = daysLeft(opp.deadline);
                const pct = days <= 0 ? 100 : Math.max(0, Math.min(100, (days / 60) * 100));
                const color = days <= 0 ? "#e05252" : days <= 7 ? "#e05252" : days <= 14 ? "#f97316" : "#4db8a8";
                return (
                  <div key={opp.id} style={{
                    background: "#fff",
                    borderBottom: "1px solid #f0f0f0",
                    padding: "16px 0",
                    height: "53px",
                    boxSizing: "content-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: "50%",
                          background: "#f0f0f0", border: "1px solid #e2e8f0",
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px",
                          flexShrink: 0,
                        }}>🏢</div>
                        <span style={{ fontSize: "14px", fontWeight: 600, color: "#2B2B2B", fontFamily: "Inter, sans-serif" }}>{opp.title}</span>
                      </div>
                      <span style={{ fontSize: "13px", fontWeight: 600, color, whiteSpace: "nowrap", fontFamily: "Inter, sans-serif" }}>
                        {days > 0 ? `${days} days left` : "Expired"}
                      </span>
                    </div>
                    <div style={{ height: 6, background: "#f0f0f0", borderRadius: 99, overflow: "hidden", width: "100%" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.4s" }} />
                    </div>
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#979797", fontFamily: "Inter, sans-serif" }}>
                      Deadline: {new Date(opp.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <h2 style={{
          fontSize: "27px", fontWeight: 700,
          color: "#2B2B2B", marginBottom: "16px",
          fontFamily: "Inter, sans-serif"
        }}>
          Your Saved Opportunities
        </h2>

        {bookmarked.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "#6b5c9e" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📌</div>
            <p>Bookmark opportunities to see them here.</p>
          </div>
        ) : (
          <div className="cards-grid">
            {bookmarked.map(opp => (
              <OpportunityCard
                key={opp.id}
                opp={opp}
                isBookmarked={true}
                onBookmark={onBookmark}
                onClick={onViewDetail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
