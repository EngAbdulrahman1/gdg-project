import { useState } from "react";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import DeadlineTrackerPage from "./pages/DeadlineTrackerPage";
import LandingPage from "./pages/LandingPage";
import "./index.css";

function App() {
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [activePage, setActivePage] = useState("landing");

  const handleBookmark = (id) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  if (activePage === "landing") {
    return (
      <LandingPage
        onGetStarted={() => setActivePage("opportunities")}
        onLogin={() => setActivePage("login")}
      />
    );
  }

  
  if (activePage === "login") {
    return (
      <div style={{
        minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "#e8e4f5", fontFamily: "Inter, sans-serif"
      }}>
        <div style={{
          background: "#fff", borderRadius: "16px",
          padding: "40px", width: "400px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}>
          <h2 style={{ color: "#3d2a7a", marginBottom: "8px" }}>Log in</h2>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "24px" }}>
            
          </p>
          
          <button
            onClick={() => setActivePage("landing")}
            style={{
              background: "#3d2a7a", color: "#fff",
              border: "none", borderRadius: "999px",
              padding: "10px 24px", cursor: "pointer",
              fontSize: "14px"
            }}
          >
            ← Back to Landing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <nav className="app-nav">
        <button
          onClick={() => setActivePage("opportunities")}
          style={{ color: activePage === "opportunities" ? "#4db8a8" : "#c4b8e8" }}
        >
          🔍 Opportunities
        </button>
        <button
          onClick={() => setActivePage("tracker")}
          style={{ color: activePage === "tracker" ? "#4db8a8" : "#c4b8e8" }}
        >
          📌 Tracker ({bookmarkedIds.size})
        </button>
      </nav>

      <div className="app-content">
        {activePage === "opportunities"
          ? <OpportunitiesPage bookmarkedIds={bookmarkedIds} onBookmark={handleBookmark} />
          : <DeadlineTrackerPage bookmarkedIds={bookmarkedIds} onBookmark={handleBookmark} onViewDetail={() => {}} />
        }
      </div>
    </div>
  );
}

export default App;



