import "./App.css";
import React from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/NavBar/Home";
import About from "./Components/NavBar/About";
import ContactUs from "./Components/NavBar/Contactus";
import Login from "./Components/NavBar/Login/Login";
import SignUp from "./Components/NavBar/SignUp/SignUpWithValidation";
import NavBarComponent from "./Components/NavBar/NavBarComponent";
import Footer from "./Components/Footer/Footer";
import {
  Drinks,
  NonVeg,
  Sweets,
  Veg,
  MenuItems,
} from "./Components/Menu-Items/MenuItems";
import PageNotFound from "./Components/PageNotFound/PageNotFoud";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<MenuItems />} />
          <Route path="/menu/order-type/veg" element={<Veg />} />
          <Route path="/menu/order-type/non-veg" element={<NonVeg />} />
          <Route path="/menu/order-type/sweets" element={<Sweets />} />
          <Route path="/menu/order-type/drinks" element={<Drinks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
