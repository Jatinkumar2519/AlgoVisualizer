import Navbar from './Components/Navbar';
import Documentation from './Components/Documentation';
import Problems from './Components/Problems';
import Visualizers from './Components/Visualizers';
import DP from './Components/problemList/DP';
import Graph from './Components/problemList/Graph';
import Tree from './Components/problemList/Tree';
import String from './Components/problemList/String';

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
          <Route path="/" element={<h2>Welcome to Algo Visualizer</h2>} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/:algo" element={<Documentation />} />
          <Route path="/Visualizers" element={<Visualizers />} />
          
          {/* Nested layout for problems */}
          <Route path="/problemList" element={<Problems />}>
            <Route path="DP" element={<DP />} />
            <Route path="Graph" element={<Graph />} />
            <Route path="Tree" element={<Tree />} />
            <Route path="String" element={<String />} />
          </Route>

          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}
