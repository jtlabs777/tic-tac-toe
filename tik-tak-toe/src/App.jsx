import { useState } from "react";
import useSound from "use-sound";
import VictorySound from "./sound/winning-music.mp3";
import Confetti from "react-confetti";
import calculateWinner from "./CalculateWinner";
import BoardRow from "./BoardRow";

export default function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const [playVictory] = useSound(VictorySound, { volume: 0.75 });

  let winner = calculateWinner(squares);
  let status;
  let confetti = <noValue />;

  if (winner) {
    status = "Winner: " + winner;
    confetti = <Confetti />;
    playVictory();
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    const nextSquares = squares.slice();

    if (squares[i]) return; //logic to prevent square from being clicked

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setxIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center"
        id="wrapper"
      >
        <h1 className="align-self-center">{status}</h1>
        {confetti}
        <div className="align-self-center mt-5">
          <BoardRow index={0} squares={squares} handleClick={handleClick} />
          <BoardRow index={3} squares={squares} handleClick={handleClick} />
          <BoardRow index={6} squares={squares} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
