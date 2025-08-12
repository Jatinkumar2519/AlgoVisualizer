import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "String", path: "/problemList/String" },
    { name: "Searching_Sorting", path: "/problemList/Searching_Sorting"},
    { name: "Sliding_Window", path: "/problemList/Sliding_Window"},
    { name: "DP", path: "/problemList/DP" },
    { name: "Backtracking", path: "/problemList/Backtracking"},
    { name: "Tree", path: "/problemList/Tree" },
    { name: "Graph", path: "/problemList/Graph" },
    { name: "DSU", path: "/problemList/DSU"},
    { name: "Trie", path: "/problemList/Trie"},
    { name: "Segment_Tree", path: "/problemList/Segment_Tree"},
  ];

  return (
    <div className="p-3">
      <h4>Problems</h4>
      <hr style={{ height: "3px", backgroundColor: "#ec7ba2ff", border: "none" }} />
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {links.map((link) => (
          <li key={link.path} style={{ marginBottom: "10px" }}>
            <Link
              to={link.path}
              style={{
                textDecoration: "none",
                color: location.pathname === link.path ? "blue" : "black",
                fontWeight: location.pathname === link.path ? "bold" : "normal",
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
