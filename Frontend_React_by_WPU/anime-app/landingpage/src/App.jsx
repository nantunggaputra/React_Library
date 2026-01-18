import "./App.css";
import "./AppMobile.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Demo from "./pages/Demo";
import Header from "./components/Header";
import Footer from "./components/Footer";

function WeeBoo() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/updates": "WeeBoo | My Anime Landing Page 0.6 Beta | Updates",
      "/updates/": "WeeBoo | My Anime Landing Page 0.6 Beta | Updates",
      "/help": "WeeBoo | My Anime Landing Page 0.6 Beta | Help",
      "/help/": "WeeBoo | My Anime Landing Page 0.6 Beta | Help",
      "/demo": "WeeBoo | My Anime Landing Page 0.6 Beta | Demo",
      "/demo/": "WeeBoo | My Anime Landing Page 0.6 Beta | Demo",
    };

    const defaultTitle = "WeeBoo | My Anime Landing Page 0.6 Beta";
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
          <Route exact path="/demo" component={Demo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/landingpage">
      <WeeBoo />
    </Router>
  );
}

export default App;
