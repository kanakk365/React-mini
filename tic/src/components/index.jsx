import "./style.css";
import { useEffect, useState } from "react";

export default function Tic() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (!getWinner(square) && square.every((item) => item !== "")) {
      setStatus("This is a draw");
    } else if (getWinner(square)) {
      setStatus(`${getWinner(square)} WON`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [square, isXTurn]);
  


  function handleClick(x) {
    let cpySquares = [...square];
    if (getWinner(cpySquares) || cpySquares[x]) return;
    cpySquares[x] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquare(cpySquares);
  }

  function Square({ value, onClick }) {
    return (
      <button onClick={onClick} className="square">
        {value}
      </button>
    );
  }
  function getWinner(square) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
      
    }return null;
  }
  function handleReset(){
    setSquare(Array(9).fill(""))
  }

  return (
    <div className="b">
        <div className="tic-container">
      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>
      
    </div>
    <h1>{status}</h1>
    <button className="reset" onClick={handleReset}> Reset </button>
    </div>
    
  );
}
