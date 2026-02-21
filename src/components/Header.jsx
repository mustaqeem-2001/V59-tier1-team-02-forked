
const today = new Date();

const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate); // Outputs: 18/02/2026
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
            <li>
              <p className="hover:text-blue-400 text-center block formmattedDate">{formattedDate}</p>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  