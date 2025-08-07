import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "DP", path: "/problemList/DP" },
    { name: "Graph", path: "/problemList/Graph" },
    { name: "Tree", path: "/problemList/Tree" },
    { name: "String", path: "/problemList/String" },
  ];

  return (
    <div style={{ width: "200px", borderRight: "1px solid #ccc", height: "100vh", padding: "10px" }}>
      <h4>Problem Categories</h4>
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
