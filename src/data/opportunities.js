export const TYPES = ["All", "Internship", "Scholarship", "COOP", "Competition", "Bootcamp"];
export const MAJORS = ["All Majors", "Engineering", "Computer Science", "Business", "Science & Tech", "Design"];
export const LOCATIONS = ["All Locations", "Riyadh", "Jeddah", "Dhahran", "Online", "International"];

export const TYPE_COLORS = {
  Internship:  { bg: "#e8f5e9", text: "#2e7d32", dot: "#4caf50" },
  Scholarship: { bg: "#e3f2fd", text: "#1565c0", dot: "#2196f3" },
  COOP:        { bg: "#fff3e0", text: "#e65100", dot: "#ff9800" },
  Competition: { bg: "#fce4ec", text: "#880e4f", dot: "#e91e63" },
  Bootcamp:    { bg: "#f3e5f5", text: "#4a148c", dot: "#9c27b0" },
};

export function daysLeft(deadline) {
  const diff = new Date(deadline) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
