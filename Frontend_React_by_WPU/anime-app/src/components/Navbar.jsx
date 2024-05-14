/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Search from "./Search";

export default function Navbar({ animes }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search animes={animes} />
    </nav>
  );
}
