import { useState, useEffect } from "react";
import { OPPORTUNITIES } from "../data/opportunities";
import { OpportunityCard } from "../components/OpportunityCard";
import OpportunityDetail from "./OpportunityDetail";

const BASE_URL = "https://opportunityhub-api.onrender.com/api";

const TABS = ["All", "Internships", "Scholarships", "Programs", "Volunteering", "COOPs"];
const TAB_TYPE_MAP = {
  Internships: "Internship",
  Scholarships: "Scholarship",
  COOPs: "COOP",
  Programs: "Bootcamp",
  Volunteering: "Competition",
};

export default function OpportunitiesPage({ bookmarkedIds, onBookmark }) {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [major, setMajor] = useState("Major");
  const [selectedOpp, setSelectedOpp] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      setLoading(true);
      try {
        let url = `${BASE_URL}/opportunities/?limit=100`;
        if (activeTab !== "All") url += `&type=${TAB_TYPE_MAP[activeTab]}`;
        if (search) url += `&search=${encodeURIComponent(search)}`;
        if (major !== "Major") url += `&major=${encodeURIComponent(major)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.results?.length) {
          setOpportunities(data.results);
        } else {
          setOpportunities(OPPORTUNITIES);
        }
      } catch {
        setOpportunities(OPPORTUNITIES);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchOpportunities, 400);
    return () => clearTimeout(delay);
  }, [activeTab, search, major]);

  const normalized = opportunities.map(o => ({
    id: o.id,
    title: o.title,
    type: o.opportunity_type || o.type,
    paid: o.is_paid ?? o.paid,
    urgent: o.is_urgent ?? o.urgent,
    company: o.organization_name || o.company,
    major: o.major || "General",
    location: o.location?.replace(", Saudi Arabia", "") || "Saudi Arabia",
    deadline: o.application_deadline || o.deadline || "2099-12-31",
    description: o.description,
    link: o.external_url || o.link || "#",
    responsibilities: o.responsibilities,
    requirements: o.requirements,
    benefits: o.benefits,
    isExpired: o.is_expired,
  }));

  if (selectedOpp) {
    return (
      <OpportunityDetail
        opp={selectedOpp}
        isBookmarked={bookmarkedIds.has(selectedOpp.id)}
        onBookmark={onBookmark}
        onBack={() => setSelectedOpp(null)}
      />
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="page-header">
        <div>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: 800, color: "#fff" }}>
            Explore Opportunities
          </h1>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#c4b8e8" }}>
            100+ opportunities posted
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            display: "flex", alignItems: "center",
            background: "#fff", borderRadius: "8px",
            padding: "9px 14px", width: "220px", height: "40px",
          }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search opportunities..."
              style={{
                border: "none", outline: "none", fontSize: "13px",
                color: "#334155", background: "transparent",
                width: "100%", fontFamily: "inherit",
              }}
            />
            <span style={{ color: "#94a3b8", fontSize: "14px", marginLeft: "8px" }}>🔍</span>
          </div>

          <div style={{
            display: "flex", alignItems: "center", gap: "4px",
            background: "#fff", borderRadius: "999px",
            padding: "0 14px",
            border: "1px solid #e2e8f0",
            width: "112px",
            height: "40px",
            boxSizing: "border-box",
            cursor: "pointer",
          }}>
            <select
              value={major}
              onChange={e => setMajor(e.target.value)}
              style={{
                border: "none", outline: "none", fontSize: "13px",
                color: "#1e1b3a", background: "transparent",
                cursor: "pointer", fontFamily: "inherit",
                appearance: "none", WebkitAppearance: "none",
                fontWeight: 600, flex: 1, minWidth: 0,
              }}
            >
              <option>Major</option>
              <option>Engineering</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Science & Tech</option>
              <option>Design</option>
            </select>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e1b3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#c4b8e8", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "20px", cursor: "pointer",
            flexShrink: 0,
          }}>👤</div>
        </div>
      </div>

      <div className="page-body" style={{ paddingTop: "0" }}>
        <div className="tabs-row">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="tab-btn"
              style={{
                fontWeight: activeTab === tab ? 700 : 400,
                color: activeTab === tab ? "#3d2a7a" : "#6b5c9e",
                borderBottom: activeTab === tab ? "2px solid #3d2a7a" : "2px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="empty-state">
            <div style={{ fontSize: 48, marginBottom: 12 }}>⏳</div>
            <p>Loading opportunities...</p>
          </div>
        ) : normalized.length === 0 ? (
          <div className="empty-state">
            <div style={{ fontSize: 48, marginBottom: 12 }}>🔎</div>
            <p>No opportunities found.</p>
          </div>
        ) : (
          <div className="cards-grid">
            {normalized.map(opp => (
              <OpportunityCard
                key={opp.id}
                opp={opp}
                isBookmarked={bookmarkedIds.has(opp.id)}
                onBookmark={onBookmark}
                onClick={setSelectedOpp}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}