import { Link } from "react-router-dom";

function Header() {
    return (
      <header className="p-4 flex justify-between items-center border-b border-gray-600">
        <h3 className="font-heading ">Pathfinder</h3>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/roles" className="hover:text-blue-400">SCRUM Roles</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">Interview Questions</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  
