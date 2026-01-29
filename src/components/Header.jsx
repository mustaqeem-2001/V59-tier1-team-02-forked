
function Header() {
    return (
      <header className="p-4 flex justify-between items-center border-b border-gray-600">
        <h3 className="font-heading ">Pathfinder</h3>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="/" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">SCRUM Roles</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">Interview Questions</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  