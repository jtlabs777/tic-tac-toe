import { useState } from "react";

function Square({value, onSquareClick}) {


  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

function calculateWinner(nSquare) {
   //check rows, [0, 1 , 2] [3, 4, 5] [ 6, 7 ,8]
   let winner = "";

   if (nSquare[0] == nSquare[1] && nSquare[1] == nSquare[2] && nSquare[0] != null) winner = nSquare[0];
   else if (nSquare[3] == nSquare[4] && nSquare[4] == nSquare[5] && nSquare[3] != null) winner = nSquare[3];
   else if (nSquare[6] == nSquare[7] && nSquare[7] == nSquare[8] && nSquare[6] != null) winner = nSquare[6];
  
   
 //check columns [0, 3, 6] [1, 4, 7] [2, 5, 8]
   else if (nSquare[0] == nSquare[3] && nSquare[3] == nSquare[6] && nSquare[0] != null) winner = nSquare[0];
   else if (nSquare[1] == nSquare[4] && nSquare[4] == nSquare[7] && nSquare[1] != null) winner = nSquare[1];
   else if (nSquare[2] == nSquare[5] && nSquare[5] == nSquare[8] && nSquare[2] != null) winner = nSquare[2];
   //check diangonals [0, 4, 8] and [2, 4, 6]
   else if (nSquare[0] == nSquare[4] && nSquare[4] == nSquare[8] && nSquare[0] != null) winner = nSquare[0];
   else if (nSquare[2] == nSquare[4] && nSquare[4] == nSquare[6] && nSquare[2] != null) winner = nSquare[2];


   if (winner != "")
     return  winner + " WON!";

}

export default function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [numberOfTurns, setNumberOfTurns] = useState(0);
  const [numOfClicksPerSquare, setNumberOfClicksPerSquare] = useState(new Array(9).fill(null))
  const [winner, setWinner] = useState("");

  function handleClick (i) {
    const nextSquares = squares.slice();
    const numOfSquares = numOfClicksPerSquare.slice();




    if (numOfSquares.find(n => n == i) == undefined) {

    if(numberOfTurns % 2 == 0) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
   
     
    
      numOfSquares.push(i);
      setNumberOfClicksPerSquare(numOfSquares);
      setNumberOfTurns(numberOfTurns + 1);
      setSquares(nextSquares);
      setWinner(calculateWinner(nextSquares));
      if(winner) {
        return;
      }
    }

  }

  return (
    <>
       <h1>{winner}</h1>
       <div className="board-row">
         <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
         <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
         <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
         <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
         <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
         <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>    
       <div className="board-row">
         <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
         <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
         <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>   
  );
}

