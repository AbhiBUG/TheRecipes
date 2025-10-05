import React, { useState } from "react";
import transitions from '../assets/transitions.png';

const ImageBlock = () => {
  const rows = 4;
  const cols = 4;
  const blockSize = 270;
const [hoveredRow,setHoveredRow] = useState(null);
  return (
    <div className="bg-blue-950 flex flex-row items-center justify-center gap-4 rounded bg-blue-900 p-4 w-full hover: cursor-pointer border-2 border-white m-2">
      {Array.from({ length: 4 }).map((_, row) => (
        <React.Fragment key={row}>
         <div className="rounded-xl shadow-2x1 border-2"
  style={{
    width: "50px",
    height: "50px",
    backgroundImage: `url(${transitions})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${cols * 100}% ${rows * 100}%`, // scale full sprite sheet
    backgroundPosition:// x y initially x is fixed y is moving so y is changes for 33%
     hoveredRow===row?`100% ${row*33}%`:`0% ${row*33}%`, 
    // border: "1px solid black",
    transition: "background-position 0.2s ease-in-out",
  }}
    onMouseEnter={() => setHoveredRow(row)}
            onMouseLeave={() => setHoveredRow(null)}
></div>
          
        </React.Fragment>
      ))}
    </div>
  );
};

export default ImageBlock;
