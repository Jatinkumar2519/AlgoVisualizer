import React,{useState} from 'react';
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
                <div className="col-md-9" style={{border:'1px solid black', borderRadius:'7px'}}>
                    {algo ? (
                        <AlgoDetails algo={algo} />
                    ) : (
                        <>
                        <h3 style={{textAlign:'center'}}>INTRODUCTION</h3>
                        <pre style={{ width: '100%', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>Welcome to the Algorithms Documentation — your go-to guide for mastering the art of algorithms, whether you're just getting started or preparing for high-level competitions.
                        This platform is built to serve beginners who are learning fundamental concepts from scratch, as well as competitive programmers who need fast, optimized solutions with clean code and in-depth analysis.
                        Our goal is to make algorithms not just understandable — but visual, practical, and easy to apply.</pre>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
