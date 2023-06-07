
const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-white text-lg font-semibold ml-2">Sports Academy</span>
        </div>
        <div className="flex items-center justify-center flex-1">
          <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
            About
          </a>
        </div>
        <img src="/path/to/user-photo.png" alt="User" className="h-8 w-8 rounded-full ml-4" />
      </div>
    </nav>
  );
};

export default Navbar;
