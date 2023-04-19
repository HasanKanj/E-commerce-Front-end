import "../App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AboutUs from '../Components/AboutUs/AboutUs';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/Login/Login';
import Home from '../Components/Home/Home';
import Register from '../Components/Auth/Register';
import CarsScreen from "../Components/Cars/Cars";
const Routers = () => {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cars" element={<Container><CarsScreen /></Container>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Routers;

