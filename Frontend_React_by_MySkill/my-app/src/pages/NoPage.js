import { useState, useEffect } from "react";

function Page404() {
  const [noPage, setNoPage] = useState("404");
  // eslint-disable-next-line no-unused-vars
  const [forUser, setForUser] = useState({
    planA: "Refresh the page",
    planB: "Check for spelling in the URL",
    planC: "Clear your browser's cache",
    planD: "Change the DNS servers",
    planE: "Contact the website administrator",
  });
  const forDeveloper = () => {
    setForUser((previousState) => {
      return {
        ...previousState,
        planA: "Create a custom 404 Error Page",
        planB: "Create redirects",
        planC: "Fixed link",
        planD: "",
        planE: "",
      };
    });
  };
  return (
    <>
      <h4 style={{ color: "#ff0000" }}>{noPage}</h4>
      <button type="button" onClick={() => setNoPage("Page Not Found")}>
        ↻
      </button>
      <h5>How to fix Page Not Found</h5>
      <small>
        <i>{forUser.planA}</i>
      </small>
      <small>
        <i>{forUser.planB}</i>
      </small>
      <small>
        <i>{forUser.planC}</i>
      </small>
      <small>
        <i>{forUser.planD}</i>
      </small>
      <small>
        <i>{forUser.planE}</i>
      </small>
      <button type="button" onClick={forDeveloper}>
        for Developer
      </button>
    </>
  );
}

function Timers() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   });
  // });
  // // update count once
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []);
  // update calculation based on count
  useEffect(() => {
    setCalculation(() => count * 404);
  }, [count]);
  // return <p>{count}</p>;
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <small>Count : {count}</small>
      <small>Calculation : {calculation}</small>
    </>
  );
}

function Form() {
  const [problem404, setProblem404] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProblem404((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(problem404);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        <small>Enter your name : </small>
      </label>
      <input
        type="text"
        name="username"
        value={problem404.username || ""}
        onChange={handleChange}
        required
      />
      <br />
      <label>
        <small>Enter your problem : </small>
      </label>
      <input
        type="text"
        name="problem"
        value={problem404.problem || ""}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="message"
        value={problem404.message || ""}
        onChange={handleChange}
        placeholder="Your Message..."
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

function NoPage() {
  return (
    <div className="All-page">
      <Page404 />
      <Timers />
      <Form />
    </div>
  );
}

export default NoPage;
