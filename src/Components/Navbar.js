import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [hovered, setHovered] = useState(null);

    const getLinkStyle = (isActive, index) => ({
        color: 'black',
        fontWeight: isActive || hovered === index ? 500 : 400, // medium → bold
        textDecoration: 'none',
        display: 'inline-block',
        minWidth: '50px',
        transition: 'font-weight 0.2s ease'
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: '#e9b8c9' }}>
            <div className="container-fluid">
                <NavLink
                    className="navbar-brand"
                    style={{ color: 'black', fontWeight: 700 }}
                    to="/"
                >
                    Algo Visualizer
                    <div style={{fontSize:'10px'}}>Competitive programming Aid</div>
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {[
                            { to: '/Home', label: 'Home'},
                            { to: '/documentation', label: 'Documentation' },
                            { to: '/Visualizers', label: 'Visualizers' },
                            { to: '/problemList', label: 'Problems' }
                        ].map((link, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    to={link.to}
                                    end={link.exact || false}
                                    className="nav-link"
                                    style={({ isActive }) => getLinkStyle(isActive, index)}
                                    onMouseEnter={() => setHovered(index)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
