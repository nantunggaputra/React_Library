import React from "react";

const Text = () => <u>This text is made in Functional Components</u>;

function IsUnderstand(props) {
  const isUnderstand = props.isUnderstand;
  if (isUnderstand) {
    return <YayUnderstand />;
  }
  return <NayUnderstand />;
}

function Understand() {
  const ok = (question, b) => {
    console.log(b.type);
    alert(question);
  };
  return (
    <>
      <IsUnderstand isUnderstand={true} />
      <button onClick={(event) => ok("Do you understand?", event)}>OK</button>
    </>
  );
}

function YayUnderstand() {
  return <i>Congratulations!</i>;
}

function NayUnderstand() {
  return <i>Try Again!</i>;
}

function FunctiopnalComponents() {
  return (
    <>
      <p>
        <Text />
      </p>
      <Understand />
    </>
  );
}

export default FunctiopnalComponents;
