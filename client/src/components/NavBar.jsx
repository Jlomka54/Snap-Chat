import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  const isAuth = false;
  return (
    <div className="flex py-4 justify-between items-center">
      <span className=" flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm"></span>

      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-xs text-white active nav-link"
                  : "text-xs text-gray-400 hover:text-white nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/posts"}
              className={({ isActive }) =>
                isActive
                  ? "text-xs text-white active nav-link"
                  : "text-xs text-gray-400 hover:text-white nav-link"
              }
            >
              My posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/new"}
              className={({ isActive }) =>
                isActive
                  ? "text-xs text-white active nav-link"
                  : "text-xs text-gray-400 hover:text-white nav-link"
              }
            >
              Add post
            </NavLink>
          </li>
        </ul>
      )}

      <div>
        <button
          type="button"
          className="flex justify-center items-center bg-gray-600 tesxt-xs text-white rounded-sm px-4 py-2"
        >
          {isAuth ? (
            <Link to={"/logout"}>Logout</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </button>
      </div>
    </div>
  );
};
