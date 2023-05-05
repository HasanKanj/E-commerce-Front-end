import "../App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import ContactUs from "../Components/ContactUs/ContactUs";
import Home from "../Components/Home/Home";
import CarDetails from "../Components/Cars/CarDetails";
import CarListing from "../Components/Cars/CarListing";
import ContactUsAdmin from "../Components/AdminUsers/contactUs-admin";
import AdminHome from "../Components/AdminUsers/Admin-home";
import ScrollToTop from "../Components/Home/ScrolltoTop/Scroll";
import Page404 from "../Components/Home/404 Page/Page404";
import ClientMessages from '../Components/AdminUsers/client-messages';
import ReservationsAdmin from "../Components/AdminUsers/Reservations/ReservationsAdmin";


const Routers = () => {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/*" element={<Page404/>} />

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

        <Route path="/Admin/Home" element={<AdminHome />} />
        <Route path="/ContactUsAdmin" element={<ContactUsAdmin />} />
        <Route path="/clientmessages" element={<Container> <ClientMessages /></Container>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Reservations" element={<Container> <ReservationsAdmin /></Container>}></Route>
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default Routers;
