import { useState } from "react";
import calculateWinner from "../../shared/calculateWinner";
import Board from "../Board/Board";

import "./Game.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [turn, setTurn] = useState(true);

  const value = turn ? "X" : "O";
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const board = [...current];

    if (winner || board[i]) return;

    board[i] = value;
    setHistory([...historyPoint, board]);
    setStepNumber(historyPoint.length);
    setTurn(!turn);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setTurn(step % 2 === 0);
  };

  //   const renderMoves = () => {
  //     history.map((_step, move) => {
  //       const destination = move ? `Go to move #${move}` : "Go to Start";
  //       return (
  //         <li key={move}>
  //           <button onClick={() => jumpTo(move)}>{destination}</button>
  //         </li>
  //       );
  //     });
  //   };

  return (
    <>
      <Board board={history[stepNumber]} onClick={handleClick} />
      <div className="stats">
        <div className="history">
          <h3>History</h3>
          {/* {renderMoves()} */}
          {history.map((_step, move) => {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
              <div key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
              </div>
            );
          })}
        </div>
        <h3>
          {winner
            ? "Winner: " + winner
            : stepNumber !== 9
            ? `Next Player: ${value}`
            : "Draw!"}
        </h3>
      </div>
    </>
  );
};

export default Game;
