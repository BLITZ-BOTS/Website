// App.tsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Auth/Login';

// Import the UserProvider from UserContext
import { UserProvider } from './Auth/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Define Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
