function LogoWeeBoo() {
  return (
    <span role="img">
      <img src="WeeBoo.png" alt=" " />
    </span>
  );
}

export default function Logo() {
  return (
    <header id="home" className="logo">
      <LogoWeeBoo />
      <h1>
        W<span>ee</span>B<span>oo</span>
      </h1>
      <LogoWeeBoo />
    </header>
  );
}
