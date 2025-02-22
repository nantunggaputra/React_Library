import "./App.css";
import "./AppMobile.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function WeeBoo() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/updates": "WeeBoo | My Anime Landing Page 0.1 Beta | Updates",
      "/updates/": "WeeBoo | My Anime Landing Page 0.1 Beta | Updates",
      "/help": "WeeBoo | My Anime Landing Page 0.1 Beta | Help",
      "/help/": "WeeBoo | My Anime Landing Page 0.1 Beta | Help",
    };

    const defaultTitle = "WeeBoo | My Anime Landing Page 0.1 Beta";
    const newTitle = titles[location.pathname] || defaultTitle;
    document.title = newTitle;
  }, [location]);

  return (
    <>
      <Header />
      <main id="ui">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/updates" component={Updates} />
          <Route exact path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <WeeBoo />
    </BrowserRouter>
  );
}

export default App;
