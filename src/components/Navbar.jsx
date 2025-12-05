import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClasses =
    "hover:text-[#023430] transition-colors duration-200";

  const activeClass = "text-[#023430] font-bold text-xl";

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-[#023430] text-3xl font-bold">GRH Global</div><div class></div>

      {/* Navigation Links */}
      <ul className="flex gap-6 list-none font-semibold text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClass : ""}`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? activeClass : ""}`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <button className="bg-[#023430] text-white px-4 py-2 rounded hover:bg-[#01281f] transition-colors duration-200">
          Chat
        </button>
        <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
          <option>English</option>
          <option>中文</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
