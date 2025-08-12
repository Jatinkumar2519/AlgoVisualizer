import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];
    const [openSection, setOpenSection] = useState(null);

    const sections = {
        'Searching Algorithms': [
            'Linear Search',
            'Binary Search'
        ],
        'Sorting Algorithms': [
            'Bubble Sort',
            'Merge Sort',
            'Quick Sort',
            'Heap Sort'
        ],
        'Tree Algorithms': [
            'Inorder Traversal',
            'Preorder Traversal',
            'Postorder Traversal',
            'Level Order Traversal',
            'Binary Tree',
            'Binary Search Tree',
            'Full Binary Tree',
            'Perfect Binary Tree',
            'Complete Binary Tree',
            'N-array Tree',
            'AVL Tree',
            'Red Black Tree'
        ],
        'Graph Algorithms': [
            'DFS',
            'BFS',
            'Dijkstra',
            'Bellman Ford',
            'Floyds Warshall',
            'kruskal For MST',
            'Tarjan_s For Bridges',
            'Tarjan_s For Articulation',
            'Kosaraju_s For SCC',
            'Graph Coloring'
        ],
        'Advance Algorithms': [
            'Segment Tree',
            'DSU',
            'Trie'
        ]
    };

    const toggleSection = (title) => {
        setOpenSection(prev => prev === title ? null : title);
    };

    return (
        <div className="p-3">
            <h5 className="mb-3">Algorithms</h5>
            <hr style={{ height: "3px", backgroundColor: "#ec7ba2ff", border: "none" }} />
            {Object.entries(sections).map(([sectionTitle, algos], index) => (
                <div key={index} className="mb-2">
                    <div
                        style={{
                            cursor: "pointer",
                            marginBottom: "4px"
                        }}
                        onClick={() => toggleSection(sectionTitle)}
                    >
                        {sectionTitle}
                    </div>
                    <div className={`collapse ${openSection === sectionTitle ? 'show' : ''}`}>
                        <ul className="nav flex-column ms-3">
                            {algos.map((algo, i) => {
                                const path = `/${basePath}/${algo.toLowerCase().replace(/\s/g, '-')}`;
                                const isActive = location.pathname === path;

                                return (
                                    <li className="nav-item" key={i}>
                                        <Link
                                            className="nav-link"
                                            to={path}
                                            style={{
                                                color: isActive ? 'blue' : 'black',
                                                fontWeight: isActive ? 'bold' : 'normal',
                                                padding: '2px 0',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = 'blue'}
                                            onMouseLeave={(e) => e.target.style.color = isActive ? 'blue' : 'black'}
                                        >
                                            {algo}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
