import "./App.css";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs';
import Cars from './Components/Cars/Cars';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Register from './Components/Auth/Register';
function App() {
  return <div className="App">
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs /> } />
        <Route path="/Cars" element={<Cars />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
  </div>;

}

export default App;

