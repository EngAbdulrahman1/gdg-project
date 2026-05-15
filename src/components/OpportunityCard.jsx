import { useState } from "react";
import { daysLeft } from "../data/opportunities";

const TYPE_COLORS = {
  Internship:  { bg: "#e6f4ea", text: "#1e7e34" },
  Scholarship: { bg: "#fff3cd", text: "#b8860b" },
  COOP:        { bg: "#e8f0fe", text: "#1a56db" },
  Competition: { bg: "#fce8e6", text: "#c5221f" },
  Bootcamp:    { bg: "#f3e8fd", text: "#7b2fbe" },
};

const TIME_AGO = [
  "2 days ago", "3 days ago", "5 days ago", "1 week ago", "2 weeks ago",
  "3 days ago", "1 day ago", "4 days ago", "6 days ago", "2 weeks ago",
];

const TABS = ["All", "Internships", "Scholarships", "Programs", "Volunteering", "COOPs"];

const COMPANY_LOGOS = {
  "Google": "https://www.google.com/favicon.ico",
  "SABIC": "https://www.sabic.com/favicon.ico",
  "Saudi Aramco": "https://www.aramco.com/favicon.ico",
  "STC": "https://www.stc.com.sa/favicon.ico",
  "Noon": "https://www.noon.com/favicon.ico",
  "Public Investment Fund": "https://www.pif.gov.sa/favicon.ico",
  "Tuwaiq Academy": "https://tuwaiq.edu.sa/favicon.ico",
  "Misk Foundation": "https://misk.org.sa/favicon.ico",
  "KACST": "https://www.kacst.edu.sa/favicon.ico",
  "Ministry of Education": "https://moe.gov.sa/favicon.ico",
  "Namaa": null,
};

export function CompanyLogo({ company, size = 28 }) {
  const [failed, setFailed] = useState(false);
  const src = COMPANY_LOGOS[company];

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "#fff", border: "1px solid #e2e8f0",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.5, flexShrink: 0, overflow: "hidden"
    }}>
      {src && !failed ? (
        <img
          src={src}
          alt={company}
          width={size * 0.65}
          height={size * 0.65}
          style={{ objectFit: "contain" }}
          onError={() => setFailed(true)}
        />
      ) : "🏢"}
    </div>
  );
}

function BookmarkIcon({ filled }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24"
      fill={filled ? "#1e1b3a" : "none"}
      stroke="#1e1b3a" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

export function OpportunityCard({ opp, isBookmarked, onBookmark, onClick }) {
  const deadlineStr = new Date(opp.deadline).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric"
  });
  const colors = TYPE_COLORS[opp.type] || { bg: "#f0f0f0", text: "#666" };
  const timeAgo = TIME_AGO[(opp.id - 1) % TIME_AGO.length];
  const isUrgent = daysLeft(opp.deadline) <= 30;

  const tags = [
    opp.paid ? "Paid" : "Unpaid",
    isUrgent ? "Urgent" : null,
    opp.major,
  ].filter(Boolean);

  return (
    <div className="opp-card" onClick={() => onClick && onClick(opp)}>
      <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#1e1b3a", lineHeight: 1.3 }}>
        {opp.title}
      </h3>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span className="type-badge" style={{ background: colors.bg, color: colors.text }}>
          {opp.type}
        </span>
        <span style={{ fontSize: "11px", color: "#64748b", display: "flex", alignItems: "center", gap: "3px" }}>
          🕐 {timeAgo}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CompanyLogo company={opp.company} size={28} />
          <div>
            <p style={{ margin: 0, fontSize: "12px", fontWeight: 600, color: "#1e1b3a" }}>{opp.company}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <span style={{ fontSize: "11px" }}>📍</span>
              <span style={{ fontSize: "11px", color: "#64748b" }}>{opp.location}, Saudi Arabia</span>
            </div>
          </div>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onBookmark(opp.id); }}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", flexShrink: 0 }}
        >
          <BookmarkIcon filled={isBookmarked} />
        </button>
      </div>

      <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
        Deadline: {deadlineStr}
      </p>

      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", alignItems: "center", marginTop: "auto" }}>
        {tags.map(tag => (
          <span key={tag} className="tag">
            {tag} <span style={{ color: "#888", fontWeight: 700 }}>×</span>
          </span>
        ))}
        <button
          className="view-details-btn"
          onClick={e => { e.stopPropagation(); onClick && onClick(opp); }}
        >
          ∨ View Details
        </button>
      </div>
    </div>
  );
}

export default function OpportunitiesWithTabs({ opportunities, bookmarks, onBookmark, onCardClick }) {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? opportunities
    : opportunities.filter(o => {
        if (activeTab === "Internships") return o.type === "Internship";
        if (activeTab === "Scholarships") return o.type === "Scholarship";
        if (activeTab === "COOPs") return o.type === "COOP";
        if (activeTab === "Programs") return o.type === "Bootcamp";
        if (activeTab === "Volunteering") return o.type === "Volunteering";
        return true;
      });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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

      <div className="cards-grid">
        {filtered.map(opp => (
          <OpportunityCard
            key={opp.id}
            opp={opp}
            isBookmarked={bookmarks?.includes(opp.id)}
            onBookmark={onBookmark}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}
