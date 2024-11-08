import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'


import Navbar from './Components/Navbar';

import Home from './Pages/Home';
function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Define Routes */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
