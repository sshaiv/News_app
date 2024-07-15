import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Ensure correct path
 // Ensure correct path
import SignUp from './Components/SignUp'; // Ensure correct path
import NewsBoard from './Components/NewsBoard';

const App = () => {
  return (
    <Router>
      <div>
       
        <Routes>
          
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
