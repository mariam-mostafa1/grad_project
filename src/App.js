import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Feedback from "./components/Feedback.jsx";
import HowWorks from "./components/HowWorks.jsx";
import AboutServices from "./components/AboutServices.jsx";
import Questions from "./components/Questions.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./components/payment.jsx";
import Services from "./components/Services.jsx";
import Services2 from "./components/Services2.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
// import Services3 from "./components/Services3.jsx";
import "./App.css";
import Questions from "./components/Questions.jsx";


function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <>
  
    
<Services></Services> 
<Services2></Services2>    
<Payment></Payment>

  
<ContactUs></ContactUs>
 
<Questions></Questions>
     
     <Footer></Footer>


     
     


    </>
  );
}

export default App;


