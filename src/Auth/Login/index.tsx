import { useEffect } from "react";
import { supabase } from "../client"; // Import your Supabase client initialization

const Login = () => {

  useEffect(() => {
    // Trigger the Discord OAuth login automatically when the user visits this page
    const handleDiscordLogin = async () => {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
      });

      if (error) {
        console.error("Error logging in with Discord:", error.message);
      }
    };

    handleDiscordLogin();
  }, []); // This effect runs once when the component mounts

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-semibold text-white animate-pulse">
        Logging you in...
      </h1>
    </div>
  );
};

export default Login;
