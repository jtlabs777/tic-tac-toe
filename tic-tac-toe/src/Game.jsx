import Board from "./Board";
import { useState } from "react";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove]; //accessing last element in history array so that currentSquares would have an array of current game
    

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        //setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }


    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }

   const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
        description = 'Go to move #' + move;
    } else {
        description = 'Go to game start';
    }
    return (
        <li  key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    )
   })

  return (
    <div>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
