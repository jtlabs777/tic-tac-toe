import Square from "./Square";

export default function BoardRow({index, squares, handleClick}) {
    
    
  return (
    <>
      <div className="board-row align-self-center squareWrap">
        <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
        <Square value={squares[index+1]} onSquareClick={() => handleClick(index+1)} />
        <Square value={squares[index+2]} onSquareClick={() => handleClick(index+2)} />
      </div>
    </>
  );
}
