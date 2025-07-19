import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/hackathons", label: "Hackathons" },
    { to: "/blogs", label: "Blogs" },
    { to: "/resume", label: "Resume" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="w-full flex justify-center items-center relative">
        {/* Desktop nav */}
        <div className="hidden sm:flex space-x-1 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 mt-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <div key={link.to} className="relative flex flex-col items-center">
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-red-600"></div>
                )}
                <Link
                  to={link.to}
                  className={`px-6 py-2 font-medium transition-all duration-300 focus:outline-none rounded-full whitespace-nowrap ${
                    isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  tabIndex={0}
                  style={{ boxShadow: 'none' }}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>
        {/* Mobile nav */}
        <div className="flex sm:hidden w-full justify-between items-center px-4 py-2">
          <span className="font-bold text-lg">Om</span>
          <button
            className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
        {/* Dropdown menu */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md rounded-b-2xl shadow-lg flex flex-col items-center py-4 animate-fade-in z-50 sm:hidden">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <div key={link.to} className="relative flex flex-col items-center w-full">
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-red-600"></div>
                  )}
                  <Link
                    to={link.to}
                    className={`w-full text-center py-3 font-medium transition-all duration-200 focus:outline-none rounded-full text-lg ${
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                    style={{ boxShadow: 'none' }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;