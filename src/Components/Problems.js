import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebarprob";
import DP from "./problemList/DP";
import Graph from "./problemList/Graph";
import Tree from "./problemList/Tree";
import String from "./problemList/String";

export default function Problems() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="DP" element={<DP />} />
          <Route path="Graph" element={<Graph />} />
          <Route path="Tree" element={<Tree />} />
          <Route path="String" element={<String />} />
        </Routes>
      </div>
    </div>
  );
}
