export default function Header() {
  return (
    <header>
      <div className="head">
        <div className="head-menu">
          <div className="left-menu">
            <img src="WeeBoo.png" alt="WeeBoo" />
          </div>
          <div className="center-menu">
            <a>App</a>
            <a>Website</a>
            <a>Landing Page</a>
          </div>
          <div className="right-menu">
            <button>
              <a>Login</a>
            </button>
            <button>
              <a>Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
