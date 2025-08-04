import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
  const location = useLocation();
  const basePath = location.pathname.split('/')[1];

  const sections = {
    'Sorting Algorithms': [
      'Bubble Sort',
      'Merge Sort',
      'Quick Sort',
      'Heap Sort'
    ],
    'Tree Algorithms': [
      'BST',
      'AVL Tree',
      'Trie'
    ],
    'Graph Algorithms': [
      'DFS',
      'BFS',
      'Dijkstra'
    ]
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(prev => prev === title ? null : title);
  };

  return (
    <div className="bg-light p-3" style={{ minHeight: '100vh' }}>
      <h5 className="mb-3">Algorithms</h5>
      {Object.entries(sections).map(([sectionTitle, algos], index) => (
        <div key={index} className="mb-3">
          <button
            className="btn btn-outline-secondary w-100 text-start"
            onClick={() => toggleSection(sectionTitle)}
            aria-expanded={openSection === sectionTitle}
          >
            {sectionTitle}
          </button>
          <div className={`collapse ${openSection === sectionTitle ? 'show' : ''}`}>
            <ul className="nav flex-column ms-3 mt-2">
              {algos.map((algo, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    className="nav-link"
                    to={`/${basePath}/${algo.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {algo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
