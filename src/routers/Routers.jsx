import "../App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import CarsScreen from "../Components/AdminUsers/AdmincarsSection";
import Login from "../Components/Login/Login.jsx";
import CarDetails from "../Components/Cars/CarDetails";
import AdminCarsScreen from "../Components/AdminUsers/AdmincarsSection";
import CarListing from "../Components/Cars/CarListing";
import AdminNewCar from "../Components/AdminUsers/AdminnewCar";
import ContactUsAdmin from "../Components/AdminUsers/contactUs-admin";
import ClientMessages from "../Components/AdminUsers/client-messages";
import AboutUsAdmin from "../Components/AdminUsers/AboutUs-admin";
import TestimonialAdmin from "../Components/AdminUsers/TestimonialAdmin";
import AdminHome from "../Components/AdminUsers/Admin-home";
import ScrillToTop from "../Components/Home/ScrolltoTop/Scroll";
const Routers = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cars" element={<CarListing />} />
        <Route path="/Cars/:category" element={<CarListing />} />
        <Route
          path="/product/:name"
          element={
            <Container>
              <CarDetails />
            </Container>
          }
        />
        <Route path="/Admin/cars" element={<AdminCarsScreen />} />
        <Route
          path="/Admin/newcar"
          element={
            <Container>
              <AdminNewCar />
            </Container>
          }
        />

        <Route path="/Admin/Home" element={<AdminHome />} />
        <Route path="/Admin/AboutUs" element={<AboutUsAdmin />} />
        <Route path="/ContactUsAdmin" element={<ContactUsAdmin />} />
        <Route path="/ClientMessages" element={<ClientMessages />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <ScrillToTop />
    </div>
  );
};

export default Routers;
