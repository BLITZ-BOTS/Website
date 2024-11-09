import { useState, useEffect, useRef } from "react";
import { useUser } from "../../Auth/UserContext";
import GradientButton from "../Button/Gradient";
import { FaBars, FaDiscord, FaGithub, FaUpload, FaSignOutAlt } from "react-icons/fa";
import { supabase } from "../../Auth/client";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useUser();

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
  };

  const handlePublish = () => {
    window.location.href = "/publish";
  };

  return (
    <div className="w-[95vw] flex items-center justify-between mx-auto p-4 relative">
      <div className="flex items-center space-x-3 flex-shrink-0">
        <img src="icon.png" alt="Icon" className="h-20 w-20 object-cover rounded-md" />
        <div className="h-10 border-l border-white opacity-30 mx-3"></div>
        <span className="text-4xl font-extrabold text-white">BLITZ</span>
      </div>

      <div>
        <FaBars onClick={toggleMenu} className="text-2xl text-white cursor-pointer" />
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-secondary-background p-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button onClick={toggleMenu} className="text-white text-xl font-semibold mb-6">
          ✕
        </button>

        <div className="flex flex-col space-y-4">
          <a
            href="/"
            className="font-semibold text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="/dashboard"
            className="font-semibold text-white opacity-70 hover:opacity-100 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          >
            DASHBOARD
          </a>

          <div className="my-4 border-t border-white opacity-20"></div>

          {!user ? (
            <GradientButton redirect="/auth/login">
              <div className="flex items-center justify-center space-x-2">
                <FaDiscord className="text-xl" />
                <span>Login with Discord</span>
              </div>
            </GradientButton>
          ) : (
            <div>
              <div
                className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-gray-700"
                onClick={toggleDropdown}
              >
                <img
                  src={user?.user_metadata.avatar_url}
                  alt={user?.user_metadata.full_name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-white">{user?.user_metadata.full_name}</span>
              </div>

              <div
                ref={dropdownRef}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropdownOpen ? "h-auto opacity-100 mt-2" : "h-0 opacity-0 mt-0"
                }`}
                style={{
                  height: dropdownOpen ? "auto" : "0",
                  opacity: dropdownOpen ? "1" : "0",
                }}
              >
                <button
                  onClick={handlePublish}
                  className="flex items-center w-full text-white font-semibold py-2 rounded-md bg-transparent hover:bg-gray-200/20 transition-all duration-300 mb-2 px-3"
                >
                  <FaUpload className="mr-2" />
                  Publish
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-white font-semibold py-2 rounded-md bg-red-600 hover:bg-red-500 transition-all duration-300 px-3"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          )}

          <div className="my-4 border-t border-white opacity-20"></div>

          <div className="flex space-x-4">
            <a
              href="https://discord.blitz-bots.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded bg-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              <FaDiscord className="text-white text-xl" />
            </a>
            <a
              href="https://github.blitz-bots.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded bg-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              <FaGithub className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
