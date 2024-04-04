/* eslint-disable react/prop-types */
import { useState } from 'react'

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)
  function handleClick(i) {
    if (squares[i]) return
    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? "X" : "O"
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
}


export default Board
