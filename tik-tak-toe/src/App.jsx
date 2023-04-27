import { useState } from "react";

function Square({value, onSquareClick}) {


  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

function calculateWinner(nSquare) {
   //check rows, [0, 1 , 2] [3, 4, 5] [ 6, 7 ,8]
   let theWinner = "";

   if (nSquare[0] == nSquare[1] && nSquare[1] == nSquare[2] && nSquare[0] != null) theWinner = nSquare[0];
   else if (nSquare[3] == nSquare[4] && nSquare[4] == nSquare[5] && nSquare[3] != null) theWinner = nSquare[3];
   else if (nSquare[6] == nSquare[7] && nSquare[7] == nSquare[8] && nSquare[6] != null) theWinner = nSquare[6];
  
   
 //check columns [0, 3, 6] [1, 4, 7] [2, 5, 8]
   else if (nSquare[0] == nSquare[3] && nSquare[3] == nSquare[6] && nSquare[0] != null) theWinner = nSquare[0];
   else if (nSquare[1] == nSquare[4] && nSquare[4] == nSquare[7] && nSquare[1] != null) theWinner = nSquare[1];
   else if (nSquare[2] == nSquare[5] && nSquare[5] == nSquare[8] && nSquare[2] != null) theWinner = nSquare[2];
   //check diangonals [0, 4, 8] and [2, 4, 6]
   else if (nSquare[0] == nSquare[4] && nSquare[4] == nSquare[8] && nSquare[0] != null) theWinner = nSquare[0];
   else if (nSquare[2] == nSquare[4] && nSquare[4] == nSquare[6] && nSquare[2] != null) theWinner = nSquare[2];


   if (theWinner != "")
     return  theWinner;
   
    return null;
}

export default function Board() {
  const [squares, setSquares] = useState(new Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const [numOfClicksPerSquare, setNumberOfClicksPerSquare] = useState(new Array(9).fill(null))
  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick (i) {
    const nextSquares = squares.slice();
    const numOfSquares = numOfClicksPerSquare.slice();


    if(squares[i]) return; //logic to prevent square from being clicked

    if(xIsNext) {
     
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
   
    
    
      numOfSquares.push(i);
      setNumberOfClicksPerSquare(numOfSquares);
      setxIsNext(!xIsNext);
      setSquares(nextSquares);

      if(winner) {
        return;
      }
    

  }

  return (
    <>
       <h1>{status}</h1>
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

