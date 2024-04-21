import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Conversation from "./pages/Conversation";
import PDF from "./pages/PDF";
import NoPage from "./pages/NoPage";

// move to pages
function App() {
  // move to pages
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Conversation" element={<Conversation />}></Route>
          <Route path="PDF" element={<PDF />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
