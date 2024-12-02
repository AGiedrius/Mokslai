import { NavLink } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/newBook" className="nav-link">
            New book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
