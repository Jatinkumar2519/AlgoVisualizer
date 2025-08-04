import React from 'react';
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
                <div className="col-md-9">
                    {algo ? (
                        <AlgoDetails algo={algo} />
                    ) : (
                        <h4>Select an algorithm from the sidebar</h4>
                    )}
                </div>
            </div>
        </div>
    );
}
