/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Router from "./Router";
import Search from "./Search";

export default function Navbar({ fetchAnime }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Router />
      <Search fetchAnime={fetchAnime} />
    </nav>
  );
}
