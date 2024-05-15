/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({ fetchAnime }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search fetchAnime={fetchAnime} />
    </nav>
  );
}
