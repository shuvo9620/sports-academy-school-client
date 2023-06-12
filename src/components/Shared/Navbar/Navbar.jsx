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
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to='/' className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>
        <div className="space-x-4">
          <Link
            to='/'
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to='/instructors'
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition duration-300"
          >
            Instructors
          </Link>
          <Link
            to='/classes'
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition duration-300"
          >
            Classes
          </Link>
          {user && (
            <Link
              to='/dashboard'
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition duration-300"
            >
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
                className="btn btn-neutral text-white hover:bg-green-700 transition duration-300"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary text-white hover:bg-rose-500 transition duration-300">
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
