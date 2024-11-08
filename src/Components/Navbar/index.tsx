import GradientButton from "../Button/Gradient";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-[95vw] flex items-center justify-between mx-auto p-4">
      {/* Left Image Section */}
      <div className="flex-shrink-0">
        <img
          src="icon.png"
          alt="Icon"
          className="h-20 w-20 object-cover rounded-md"
        />
      </div>

      {/* Right Links and Button Section */}
      <div className="flex space-x-4 items-center">
        <a
          href="/"
          className="font-semibold text-white-800 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          HOME
        </a>
        <a
          href="/dashboard"
          className="font-semibold text-white-800 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          DASHBOARD
        </a>
        <a
          href="https://discord.blitz-bots.com"
          className="font-semibold text-white-800 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          DISCORD
        </a>

        {/* Gradient Button */}
        <GradientButton redirect="/create">CREATE</GradientButton>

        {/* Circular User Icon with Transition Effects */}
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white bg-opacity-5 hover:bg-transparent hover:border hover:border-white transition-all duration-300 ease-in-out">
          <FaUser className="text-white-800" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
