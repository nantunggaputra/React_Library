/* eslint-disable react/prop-types */
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import Router from "./Router";
import Search from "./Search";

export default function Navbar({ fetchAnime }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <HamburgerMenu />
      <Router />
      <Search fetchAnime={fetchAnime} />
    </nav>
  );
}
