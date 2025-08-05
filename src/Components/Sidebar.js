import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];

    const [hoveredItem, setHoveredItem] = useState(null);      // For links
    const [hoveredSection, setHoveredSection] = useState(null); // For toggle buttons
    const [openSection, setOpenSection] = useState(null);       // For collapse

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
            'Tarjan_s For Articulation Points',
            'Kasaraju_s For SCC',
            'Graph Coloring'
        ],
        'Advance Algorithms': [
            'Segment Tree',
            'Disjoint Set Union',
            'Trie'
        ]
    };

    const toggleSection = (title) => {
        setOpenSection(prev => prev === title ? null : title);
    };

    return (
        <div className="p-3" style={{ minHeight: '100vh',borderRadius: '7px', background: '#f8d7e3' }}>
            <h5 className="mb-3">Algorithms</h5>
            {Object.entries(sections).map(([sectionTitle, algos], index) => {
                const isSectionHovered = hoveredSection === sectionTitle;

                const sectionButtonStyle = {
                    color: 'black',
                    backgroundColor: isSectionHovered ? '#edb7d2' : '#fdf2f8',
                    border: '1px solid #888',
                    borderRadius: '7px',
                    marginBottom: '6px',
                    padding: '6px 12px',
                    transition: 'all 0.2s ease',
                };

                return (
                    <div key={index} className="mb-3">
                        <button
                            className="btn w-100 text-start"
                            style={sectionButtonStyle}
                            onClick={() => toggleSection(sectionTitle)}
                            onMouseEnter={() => setHoveredSection(sectionTitle)}
                            onMouseLeave={() => setHoveredSection(null)}
                            aria-expanded={openSection === sectionTitle}
                        >
                            {sectionTitle}
                        </button>

                        <div className={`collapse ${openSection === sectionTitle ? 'show' : ''}`}>
                            <ul className="nav flex-column ms-3 mt-2">
                                {algos.map((algo, i) => {
                                    const path = `/${basePath}/${algo.toLowerCase().replace(/\s/g, '-')}`;
                                    const isHovered = hoveredItem === path;

                                    const linkStyle = {
                                        color: 'black',
                                        backgroundColor: isHovered ? '#edb7d2ff' : '#fdf2f8',
                                        borderRadius: '7px',
                                        marginBottom: '4px',
                                        border: '1px solid black',
                                        padding: '3px 3px 2px 6px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease'
                                    };

                                    return (
                                        <li className="nav-item w-100" key={i}>
                                            <Link
                                                className="nav-link"
                                                to={path}
                                                style={linkStyle}
                                                onMouseEnter={() => setHoveredItem(path)}
                                                onMouseLeave={() => setHoveredItem(null)}
                                            >
                                                {algo}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
