import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

function Palco() {
    return (
    <Stage width={window.innerWidth} height = {window.innerHeight}>
        <Layer>
            <Rect 
              x= {-100}
              y= {-150}
              width= {350}
              height= {8000}
              fill= 'white'
              stroke= '#212529'
              strokeWidth= {7}
            />
        </Layer>
    </Stage>
    )
}

ReactDOM.render(
    <Palco />,
    document.getElementById('react')
)

