import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import logo from '../../../assets/images/logo/logo.png';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => { }).catch(error => console.error(error));
  };

  return (
    <nav className="bg-gray-700 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to='/' className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
        <div>
          <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            Home
          </Link>
          <Link to='instructors' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            Instructors
          </Link>
          <Link to='classes' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            Classes
          </Link>
          {user && (
            <Link to='/dashboard' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              Dashboard
            </Link>
          )}
        </div>

        <div className="flex items-center ml-4">
          {user ? (
            <>
              <img
                className="h-8 w-8 rounded-full"
                src={user.photoURL}
                alt="Profile Picture"
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
