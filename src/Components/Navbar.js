import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background:'#e9b8c9'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{color:'black'}} to="/">Algo Vizlr</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/documentation">Documentation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/Visualizers">Visualizers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'black'}} to="/problemList">Problems</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
