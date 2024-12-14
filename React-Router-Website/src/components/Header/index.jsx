import { Link } from "react-router";

function Header() {
  return (
    <div>
      <h1>Header</h1>
          <button><Link to="/">Home page</Link></button>
          <button><Link to="/clicker">Clicker page</Link></button>
    </div>
  );
}

export default Header;
