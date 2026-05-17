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
    return <LandingPage onGetStarted={() => setActivePage("opportunities")} />;
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


