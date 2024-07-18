/* eslint-disable react/prop-types */
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavbarMenu from "./NavbarMenu";
import Search from "./Search";

export default function Navbar({ fetchAnime }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <HamburgerMenu />
      <NavbarMenu />
      <Search fetchAnime={fetchAnime} />
    </nav>
  );
}
