/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = `Winner ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = "Draw";
  } else {
    status = `Next Player ${xIsNext ? "X" : "O"}`;
  }
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/nantungga-putra-451779116/"
          target="_blank"
        >
          Nantungga Putra
        </a>{" "}
        | &copy;2024
      </p>
    </footer>
  );
}

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = "Game Start";
    }
    return (
      <li key={move}>
        <button className="game-travel" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ul>{moves}</ul>
      </div>
      <Footer />
    </div>
  );
}

function calculateWinner(squares) {
  const ticTacToe = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < ticTacToe.length; i++) {
    const tic = ticTacToe[i][0];
    const tac = ticTacToe[i][1];
    const toe = ticTacToe[i][2];
    if (
      squares[tic] &&
      squares[tic] == squares[tac] &&
      squares[tac] == squares[toe]
    ) {
      return squares[toe];
    }
  }
  return false;
}

export default Game;
