import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => { }).catch(error => console.error(error));
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-white text-lg font-semibold ml-2">Sports Academy</span>
        </div>
        <div>
          <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            Home
          </Link>
          <Link to='about' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            About
          </Link>
        </div>

        <div className="flex items-center ml-4">
          {user ? (
            <>
              <img
                className="h-8 w-8 rounded-full"
                src={user.photoURL}
                title={user.displayName}
              />
              <button
                onClick={handleLogOut}
                className="ml-4 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-500">
                Login
              </button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
