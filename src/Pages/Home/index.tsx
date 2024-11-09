import { useEffect, useState } from 'react';
import { FaRocket, FaTachometerAlt, FaServer, FaUsers } from 'react-icons/fa'; // Example icons from react-icons

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay the animation for 500ms after the component mounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen px-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:h-screen overflow-hidden pt-0">
      {/* Main Title Section */}
      <div
        className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center lg:text-left space-y-4 w-full max-w-3xl transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } mt-0`}
      >
        <h1 className="leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitz-gradient-left to-blitz-gradient-right">
            Your
          </span>
          <br />
          Way To
          <br />
          Customize
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blitz-gradient-left to-blitz-gradient-right">
            Discord Bots
          </span>
        </h1>
      </div>

      {/* Button Section with Links */}
      <div className="lg:w-2/3 grid grid-cols-2 gap-4 items-center justify-center mt-4 lg:mt-0">
        {/* Getting Started Button */}
        <a
          href="https://docs.blitz-bots.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-6 w-full h-48 text-white rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } bg-gradient-to-r from-blitz-gradient-left to-blitz-gradient-right hover:scale-105 hover:shadow-xl`}
        >
          <span className="text-2xl"><FaRocket /></span>
          <p className="text-xl font-semibold">Getting Started</p>
        </a>

        {/* Dashboard Button */}
        <a
          href="/dashboard"
          className={`p-6 w-full h-48 text-white rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } bg-secondary-background hover:scale-105 hover:shadow-xl`}
        >
          <span className="text-2xl"><FaTachometerAlt /></span>
          <p className="text-xl font-semibold">Dashboard</p>
        </a>

        {/* Hosting Button */}
        <a
          href="https://pella.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-6 w-full h-48 text-white rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } bg-secondary-background hover:scale-105 hover:shadow-xl`}
        >
          <span className="text-2xl"><FaServer /></span>
          <p className="text-xl font-semibold">Hosting</p>
        </a>

        {/* Community Button */}
        <a
          href="https://discord.blitz-bots.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-6 w-full h-48 text-white rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } bg-secondary-background hover:scale-105 hover:shadow-xl`}
        >
          <span className="text-2xl"><FaUsers /></span>
          <p className="text-xl font-semibold">Community</p>
        </a>
      </div>
    </div>
  );
}
