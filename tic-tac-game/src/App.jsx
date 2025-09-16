import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
export function Square({value, onSquareClick}){
  
  return <button onClick={onSquareClick}>{value}</button>
}


function App() {
  const [click, setClick] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNex] = useState(true);
  function calculateWinner(click){  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i=0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if(click[a] && click[a] === click[b] && click[a] === click[c]){
      return click[a];
    };
    return null;
  } 

};
const winner = calculateWinner(click);
let status;
if(winner){
  status = "Winner " + winner 
}else{
    status = "Next player is: " +(xIsNext ? "X" : "O" )}

 function handleClick(i){
    if(click[i] ||calculateWinner(click)) return;
    const nextSquare = click.slice();
    xIsNext ? nextSquare[i] = 'X' : nextSquare[i] = 'O';
    setClick(nextSquare);
    setXIsNex(!xIsNext);
  };
  function reset(){
    const newArray = click.slice();
    setClick(newArray.fill(null));
    setXIsNex(true);}
      

    return (
    <>
    <div className="status">{status}</div>
    <div className="row-1">
      <Square value={click[0]} onSquareClick={()=>handleClick(0)} />
      <Square value={click[1]} onSquareClick={()=>handleClick(1)} />
      <Square value={click[2]} onSquareClick={()=>handleClick(2)} />
    </div>
    <div className="row-2">
      <Square value={click[3]} onSquareClick={()=>handleClick(3)} />
      <Square value={click[4]} onSquareClick={()=>handleClick(4)} />
      <Square value={click[5]} onSquareClick={()=>handleClick(5)} />
    </div>
      <div className="row-3">
      <Square value={click[6]} onSquareClick={()=>handleClick(6)} />
      <Square value={click[7]} onSquareClick={()=>handleClick(7)} />
      <Square value={click[8]} onSquareClick={()=>handleClick(8)} />
    </div>
    <button className='reset' onClick={reset}>Reset</button>
    </>
  )


 }



export default App
