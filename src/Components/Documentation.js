import React, { useState } from 'react';
import Sidebar from './Sidebar';
import AlgoDetails from './AlgoDetails';
import { useParams } from 'react-router-dom';

export default function Documentation() {
    const { algo } = useParams();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-md-9" >
                    {algo ? (
                        <AlgoDetails algo={algo} />
                    ) : (
                        <>
                            <div style={{ textAlign: "center", margin: "50px 50px 0px 50px", background: '#212529', borderRadius: '5px', color: 'white', padding: '10px 10px' }}>
                                <h2>Welcome to the Documentation Section</h2>
                                <p>
                                    Here you'll find the documentation of every algo.
                                    <br />
                                    Select a Topic from the sidebar to get started!
                                </p>
                            </div>
                            <img
                                src="/document.gif"
                                alt="prob solving"
                                style={{ width: '350px', height: '250px', borderRadius: '7px', marginLeft: '230px', marginTop: '10px' }}
                                className="img-fluid rounded shadow"
                            />
                        </>
                    )}
            </div>
        </div>
        </div >
    );
}
