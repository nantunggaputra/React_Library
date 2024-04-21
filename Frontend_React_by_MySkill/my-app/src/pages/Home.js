import logo from "../logo.svg";
import Title from "../Title";
import Body from "../Body";
import ClassComponents from "../ClassComponents";
import FunctiopnalComponents from "../FunctionalComponents";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <Body />
        <ClassComponents />
        <FunctiopnalComponents />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
