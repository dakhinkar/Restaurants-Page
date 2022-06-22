import "./App.css";
import React from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/NavBar/Home';
import About from './Components/NavBar/About';
import ContactUs from './Components/NavBar/Contactus';
import Login from './Components/NavBar/Login';
import SignUp from './Components/NavBar/SignUp';
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import Footer from './Components/Footer/Footer';




function App() {

  return (
    <div>
        <Router>
          <NavBarComponent/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} /> 
          </Routes>
          <Footer/>
        </Router>
    </div>
  );

}

export default App;
