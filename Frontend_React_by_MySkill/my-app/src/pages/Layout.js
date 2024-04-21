import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">🏦</Link>
          </li>
          <li>
            <Link to="/Conversation">📩</Link>
          </li>
          <li>
            <Link to="/PDF">👜</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
