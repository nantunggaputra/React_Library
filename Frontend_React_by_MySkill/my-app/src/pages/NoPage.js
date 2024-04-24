import { useState } from "react";

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

function NoPage() {
  return (
    <div className="All-page">
      <Page404 />
    </div>
  );
}

export default NoPage;
