import { Film, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import SearchInput from "../search";
import { useState } from "react";

function NavBar() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput); // Toggle search input visibility
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 md:px-10 py-2 md:py-4">
      <div>
        <div>
          <Link
            to="/"
            className="text-lg font-bold text-gray-300  hover:text-gray-200 transition-all ease-in-out flex items-center gap-2"
          >
            {" "}
            <Film /> MOVI
          </Link>
        </div>
      </div>

      <ul className="main-nav flex gap-4">
        <li>
          <Link
            to="/"
            className="text-sm text-blue-500 hover:underline hover:text-blue-500 transition-all ease-in-out"
          >
            Popular Movies
          </Link>
        </li>
        <li>
          <a
            onClick={handleSearchClick}
            className="text-sm text-gray-300 hover:underline hover:text-blue-500 transition-all ease-in-out"
            href="#"
          >
            Search
          </a>
        </li>{" "}
        <li>
        {showSearchInput && <SearchInput />}
        </li>

      </ul>

      <div className="flex justify-between items-center">
        <div>{/* <Moon /> */}</div>
      </div>
    </nav>
  );
}

export default NavBar;
