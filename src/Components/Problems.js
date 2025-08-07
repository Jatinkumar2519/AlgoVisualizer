import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebarprob";
import DP from "./problemList/DP";
import Graph from "./problemList/Graph";
import Tree from "./problemList/Tree";
import Trie from "./problemList/Trie";
import String from "./problemList/String";
import Backtracking from "./problemList/Backtracking";
import Searching_Sorting from "./problemList/Searching_Sorting"
import Sliding_Window from "./problemList/Sliding_Window"
import Segment_Tree from "./problemList/Segment_Tree"
import DSU from "./problemList/DSU"
export default function Problems() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="DP" element={<DP />} />
          <Route path="DSU" element={<DSU />} />
          <Route path="Graph" element={<Graph />} />
          <Route path="Tree" element={<Tree />} />
          <Route path="String" element={<String />} />
          <Route path="Backtracking" element={<Backtracking />} />
          <Route path="Segment_Tree" element={<Segment_Tree />} />
          <Route path="Trie" element={<Trie />} />
          <Route path="Searching_Sorting" element={<Searching_Sorting />} />
          <Route path="Sliding_Window" element={<Sliding_Window />} />
        </Routes>
      </div>
    </div>
  );
}
