import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [State, setState] = useState(Array(9).fill(null));
  const [xTurn, setxTurn] = useState(true);

  const checkWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerlogic) {
      const [a, b, c] = logic;
      if (State[a] !== null && State[a] === State[b] && State[a] === State[c]) {
        return State[a];
      }
    }
    return false;
  };

  const Winner = checkWinner();

  const isBoardFull = () => {
    return State.every((square) => square !== null);
  };

  const handleClick = (index) => {
    if (State[index] !== null || Winner) {
      return;
    }
    const copyState = [...State];
    copyState[index] = xTurn ? "X" : "O";
    setState(copyState);
    setxTurn(!xTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setxTurn(true);
  };

  return (
    <div>
      <div className="container-Board">
        {Winner ? (
          <>
            <p>{Winner} wins The match!!!</p>
            <button  className="btn" onClick={handleReset}>Play Again</button>
          </>
        ) : isBoardFull() ? (
          <>
           <p>It's a draw!</p>
            <button className="btn" onClick={handleReset}>Play Again</button>
          </>
        ) : (
          <>
            <p> {xTurn ? "X" : "O"} Please Make your move.</p>
            <div className="row">
              <Square onClick={() => handleClick(0)} value={State[0]} />
              <Square onClick={() => handleClick(1)} value={State[1]} />
              <Square onClick={() => handleClick(2)} value={State[2]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(3)} value={State[3]} />
              <Square onClick={() => handleClick(4)} value={State[4]} />
              <Square onClick={() => handleClick(5)} value={State[5]} />
            </div>
            <div className="row">
              <Square onClick={() => handleClick(6)} value={State[6]} />
              <Square onClick={() => handleClick(7)} value={State[7]} />
              <Square onClick={() => handleClick(8)} value={State[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
