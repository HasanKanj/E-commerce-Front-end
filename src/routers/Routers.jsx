import "../App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AboutUs from '../Components/AboutUs/AboutUs';
import ContactUs from '../Components/ContactUs/ContactUs';
import Login from '../Components/Login/Login';
import Home from '../Components/Home/Home';
import Register from '../Components/Auth/Register';
import CarDetails from "../Components/Cars/CarDetails";
import AdminCarsScreen from "../Components/AdminUsers/AdmincarsSection";
import CarListing from "../Components/Cars/CarListing";
import AdminNewCar from "../Components/AdminUsers/AdminnewCar";

const Routers = () => {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<Container><AboutUs /></Container>} />
        <Route path="/Cars" element={<CarListing />} />
        <Route path='/product/:id' element={<Container><CarDetails /></Container>} />
        <Route path='/Admin/cars' element={<AdminCarsScreen />} />
        <Route path='/Admin/newcar' element={<Container><AdminNewCar /></Container>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Routers;

