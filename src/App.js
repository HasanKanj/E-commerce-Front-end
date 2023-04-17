import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Auth/Register';
import CarsScreen from "./Components/Cars/Cars";
import CarDetails from "./Components/Cars/CarDetails";
import AdminCarsScreen from "./Components/AdminUsers/AdmincarsSection";
import AdminNewCar from "./Components/AdminUsers/AdminnewCar";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cars" element={<Container><CarsScreen /></Container>} />
        <Route path='/product/:id' element={<Container><CarDetails /></Container>} />
        <Route path='/Admin/cars' element={<AdminCarsScreen />} />
        <Route path='/Admin/newcar' element={<Container><AdminNewCar /></Container>} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

