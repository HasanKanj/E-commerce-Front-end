import React from 'react'
import './navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';

function Navbar() {
  // this var will refer to nav tag
  const navRef = useRef();

  //it called when click on buttons
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }


  return (
<>
<div id="menu_wrapper" class="menu_wrapper">
  <ul class="menu_list">
    <li class="list" name="item">
      <Link to="/" class="home">Home</Link>

    </li>
   
    <li class="list" name="item">        
    <Link to="/Cars" onclick="return 0" name="expand" >Our Cars &#9660;</Link>
      <ul name="sub_menu" class="submenu_list">
        <li class="sub_list"> <Link to="/fuelCars" >Fuel Cars</Link></li>
        <li class="sub_list"> <Link to="/electricCars" >Electric Cars</Link></li>
      </ul>
    </li>
    <li class="list" name="item">
      <Link to="/AboutUs" >About Us</Link>

    </li>
    <li class="list" name="item">
    <Link to="/ContactUs" name="single" >Contact Us</Link>
    </li>
    
    <li class="list" name="item">
    <Link to="/Login" onclick="return 0" name="expand" >Login  &#9660;</Link>
      <ul name="sub_menu" class="submenu_list">
        <li class="sub_list sign-up"><Link to='/Register'>Don't Have an Account? Register Here! &#9660; </Link></li>
      </ul>
    </li>
  </ul>
</div>
</>  
    )
}

export default Navbar;

