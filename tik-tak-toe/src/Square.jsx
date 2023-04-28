import ClickSound from './sound/clickSound.mp3';
import useSound from 'use-sound';;

export default function Square({value, onSquareClick}) {


    const [playActive] = useSound(
      ClickSound,
      { volume: 0.75 }
    );
  
  
    return (
    <>
       
      <button onMouseDown={playActive} className="square border border-5 border-white text-bg-dark" id="sqrButton" onClick={onSquareClick}>
      {value}
  
    </button>
    </>
  
    
    );
  }