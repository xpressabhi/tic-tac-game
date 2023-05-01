import { useState } from 'react';

export default function Game() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const handleClick = (i: number) => {
    console.log(i);
    const s = squares.slice();
    s[i]= 'X';
    setSquares([...s])
  };
  return (
    <div>
      {squares.map((value, index) => (
        <>
          <Square
            key={index}
            value={value}
            clickSquares={() => handleClick(index)}
          />
          {/* {index % 3 === 2 && <br />} */}
        </>
      ))}
    </div>
  );
}

function Square({ value, clickSquares }: any) {
  return (
    <button className="square" onClick={clickSquares}>
      {value}
    </button>
  );
}
