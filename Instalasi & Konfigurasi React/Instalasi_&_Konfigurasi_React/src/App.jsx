/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";

function App({ author }) {
  const projects = [
    "Tic Tac Toe",
    "Shopping List",
    "Box Office Movie",
    "JS Framework Portfolio",
  ];
  const [likes, setLikes] = useState(1);
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <Header />
      <img
        className="profile-photo"
        src="https://nantunggaputra.github.io/HTML/dist/img/nantunggaputra-background.png"
        alt="Nantungga Putra"
      />
      <p>Belajar React untuk PEMULA</p>
      <button
        onClick={() => {
          alert("Nantungga Putra");
        }}
      >
        WHO IS HE?
      </button>
      <br />
      <p>
        <i>Selamat belajar, {author ? author : "Nantungga Putra"}</i>
      </p>
      <hr></hr>
      <h4>Project Portfolio</h4>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button onClick={handleClick}>LIKE ({likes})</button>
      <br />
    </div>
  );
}

export default App;
