// Visualizers.js
import React, { useState } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const N = 8;
const cellSize = 60;
const boardSize = N * cellSize;

export default function Visualizers() {
  const [queens, setQueens] = useState([]);

  const renderBoard = () => {
    const cells = [];
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        const isDark = (row + col) % 2 === 1;
        cells.push(
          <Rect
            key={`${row}-${col}`}
            x={col * cellSize}
            y={row * cellSize}
            width={cellSize}
            height={cellSize}
            fill={isDark ? '#769656' : '#eeeed2'}
            stroke="black"
          />
        );
      }
    }
    return cells;
  };

  const renderQueens = () => {
    return queens.map(({ row, col }, i) => (
      <Text
        key={i}
        text="♕"
        fontSize={cellSize * 0.8}
        x={col * cellSize + 10}
        y={row * cellSize + 5}
        fill="black"
      />
    ));
  };

  const handleNQueens = () => {
    // Static solution for now
    const solution = [
      { row: 0, col: 0 },
      { row: 1, col: 4 },
      { row: 2, col: 7 },
      { row: 3, col: 5 },
      { row: 4, col: 2 },
      { row: 5, col: 6 },
      { row: 6, col: 1 },
      { row: 7, col: 3 },
    ];
    setQueens(solution);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light vh-100 p-3">
          <h5>Algorithm Visualizer</h5>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="btn btn-outline-primary mb-2 w-100" onClick={handleNQueens}>
                N-Queens
              </button>
            </li>
            {/* Add more algorithms here */}
          </ul>
        </div>

        {/* Main Visualizer Area */}
        <div className="col-md-10 d-flex justify-content-center align-items-center">
          <Stage width={boardSize} height={boardSize}>
            <Layer>{renderBoard()}{renderQueens()}</Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}
