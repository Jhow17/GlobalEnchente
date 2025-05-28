import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './routes/Login';
import Error from './routes/Error'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />        
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;