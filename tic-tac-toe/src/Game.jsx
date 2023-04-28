import Board from "./Board";
import { useState } from "react";

export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[history.length -1]; //accessing last element in history array so that currentSquares would have an array of current game
    

    function handlePlay(nextSquares) {
        //TODO
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
         setHistory([...history, history[nextMove]]);
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
