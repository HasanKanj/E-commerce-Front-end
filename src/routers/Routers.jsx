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
import ContactUsAdmin from '../Components/AdminUsers/contactUs-admin';
import ClientMessages from '../Components/AdminUsers/client-messages';
const Routers = () => {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cars" element={<CarListing />} />
        <Route path='/product/:name' element={<Container><CarDetails /></Container>} />
        <Route path='/Admin/cars' element={<AdminCarsScreen />} />
        <Route path='/Admin/newcar' element={<Container><AdminNewCar /></Container>} />
        <Route path="/ContactUsAdmin" element={<ContactUsAdmin />} />
        <Route path="/ClientMessages" element={<ClientMessages />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );  
}

export default Routers;

