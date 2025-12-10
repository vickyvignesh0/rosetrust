import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // We will use lucide-react or react-icons
// If you don't have lucide-react, run: npm install lucide-react
// OR use simple text for now if you prefer not to install more packages.

// Let's use standard text/CSS for the icon to keep it simple for now without extra installs:
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-rose-600">Rose Trust</span>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-600 transition font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition font-medium">Projects</a>
            <a href="#" className="text-gray-700 hover:text-rose-600 transition font-medium">Contact</a>
            <button className="bg-rose-600 text-white px-5 py-2 rounded-full hover:bg-rose-700 transition">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? (
                <span className="text-2xl font-bold">X</span> // Close Icon
              ) : (
                <span className="text-2xl font-bold">☰</span> // Hamburger Icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-md">About Us</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-md">Projects</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-600 rounded-md">Contact</a>
            <button className="w-full mt-2 bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;