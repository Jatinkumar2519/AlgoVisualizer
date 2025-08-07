import React from 'react'
import {Stage,Layer,Rect} from 'react-konva'
export default function Visualizers() {
  const arr = [10,20,30,20,5];
  return (
    <Stage>
      <Layer>
        {arr.map((height,index) => {
          <Rect
          key={index}
          x={index * 60 + 10}
          y={300 - height}
          width={40}
          height={height}
          fill="skyblue"
          stroke="black"
          />
        })}
      </Layer>
    </Stage>
  )
}
