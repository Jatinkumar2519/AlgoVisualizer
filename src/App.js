import Navbar from './Components/Navbar';
import Documentation from './Components/Documentation';
import Problems from './Components/Problems';
import Visualizers from './Components/Visualizers';
import DP from './Components/problemList/DP';
import Graph from './Components/problemList/Graph';
import Tree from './Components/problemList/Tree';
import Trie from './Components/problemList/Trie';
import DSU from './Components/problemList/DSU';
import String from './Components/problemList/String';
import Backtracking from './Components/problemList/Backtracking';
import Searching_Sorting from './Components/problemList/Searching_Sorting'
import Sliding_Window from './Components/problemList/Sliding_Window'
import Segment_Tree from './Components/problemList/Segment_Tree'
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  document.body.style.background = '#fdf2f8';

  return (
    <Router>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:algo" element={<Documentation />} />
          <Route path="/Visualizers" element={<Visualizers />} />
          
          {/* Nested layout for problems */}
          <Route path="/problemList" element={<Problems />}>
            <Route path="DP" element={<DP />} />
            <Route path="Backtracking" element={<Backtracking />} />
            <Route path="Searching_Sorting" element={<Searching_Sorting />} />
            <Route path="Sliding_Window" element={<Sliding_Window />} />
            <Route path="Segment_Tree" element={<Segment_Tree />} />
            <Route path="Graph" element={<Graph />} />
            <Route path="Tree" element={<Tree />} />
            <Route path="Trie" element={<Trie />} />
            <Route path="DSU" element={<DSU />} />
            <Route path="String" element={<String />} />
          </Route>

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
