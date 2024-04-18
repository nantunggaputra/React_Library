import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Body from "./Body";
import ClassComponents from "./ClassComponents";
import FunctiopnalComponents from "./FunctionalComponents";
import Chatbox from "./Chatbox";
import Product from "./Product";
import Products from "./Products";

const eBookData = [
  {
    name: "eBook HTML from Zero to Hero",
    url: "https://simpleicons.org/icons/html5.svg",
    price: 75000,
    discount: 4,
  },
  {
    name: "eBook CSS from Zero to Hero",
    url: "https://simpleicons.org/icons/css3.svg",
    price: 90000,
    discount: 20,
  },
  {
    name: "eBook JavaScript from Zero to Hero",
    url: "https://simpleicons.org/icons/javascript.svg",
    price: 100000,
    discount: 12,
  },
  {
    name: "eBook React from Zero to Hero",
    url: "https://simpleicons.org/icons/react.svg",
    price: 100000,
  },
];
const messages = [
  "Anyone here?",
  "Hi, welcome to the chat. You can build this feature using React state.",
];
function Messages(props) {
  const messages = props.messages;
  return (
    <>
      {messages.length > 0 && (
        <h6>You have {messages.length} messages in your conversation.</h6>
      )}
    </>
  );
}
function App() {
  const fontTimes = {
    fontFamily: "Helvetica, Arial, 'Times New Roman'",
  };
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
        <Messages messages={messages} />
        <Chatbox />
        <h2>PDF Front-End Development</h2>
        <Products />
        {eBookData.map((pdf, id) => (
          <div className="product" style={fontTimes}>
            <Product
              name={pdf.name}
              url={pdf.url}
              price={pdf.price}
              discount={pdf.discount}
              key={id}
            />
          </div>
        ))}
        {/* <Product
          name="eBook HTML from Zero to Hero"
          url="https://simpleicons.org/icons/html5.svg"
          price="75000"
          discount="4"
        />
        <Product
          name="eBook CSS from Zero to Hero"
          url="https://simpleicons.org/icons/css3.svg"
          price="90000"
          discount="20"
        />
        <Product
          name="eBook JavaScript from Zero to Hero"
          url="https://simpleicons.org/icons/javascript.svg"
          price="100000"
          discount="12"
        />
        <Product
          name="eBook React from Zero to Hero"
          url="https://simpleicons.org/icons/react.svg"
          price="100000"
        /> */}
      </header>
    </div>
  );
}

export default App;
