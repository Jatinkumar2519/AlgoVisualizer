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
          <Route
            path="/"
            element={
              <>
              <div style={{ textAlign: "center", margin: "30px 50px 0px 70px", background: '#212529', borderRadius:'5px', color:'white',padding:'10px 10px',width:'715px'}}>
                <h2>Welcome to the Problem Section</h2>
                <p>
                  Here you'll find a set of problems to practice.
                  <br />
                  Select a category from the sidebar to get started!
                </p>
              </div>
              <img
              src = "/prob.gif"
              alt = "prob solving"
              className="img-fluid rounded shadow"
              style={{width:'350px',height:'250px',borderRadius:'7px',marginLeft:'250px',marginTop:'10px'}}
              />
              </>
            }
          />
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
