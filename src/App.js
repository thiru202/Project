import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Project/Home';
import About from './Project/About';
import Contact from './Project/Contact';

import Nav from './Project/Nav';
import Problems from './Project/Problems';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Problems" element={<Problems/>}/>
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
