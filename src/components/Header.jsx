
function Header() {
    return (
      <header className="p-4 flex justify-between items-center border-b border-gray-600">
        <h3 className="font-heading ml-4">Pathfinder</h3>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="/" className="hover:text-blue-400 text-center block">Home</a>
            </li>
            <li>
              <a href="/roles" className="hover:text-blue-400 text-center block">SCRUM Roles</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  