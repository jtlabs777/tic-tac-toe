
export default function calculateWinner(nSquare) {
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