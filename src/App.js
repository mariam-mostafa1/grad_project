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
import ContactUs_admin from "./components/ContactUs_admin.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./components/payment.jsx";
import Services from "./components/Services.jsx";
import Services_admin from "./components/Services_admin.jsx";
import Services_admin2 from "./components/Services_admin2.jsx";
import Services2 from "./components/Services2.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import "./App.css";
import Questions_admin from "./components/Questions_admin.jsx";
import MySubmit from "./components/MySubmit.jsx";


function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <>
  
 <Navbar></Navbar>   
 <Home></Home>
 <AboutUs></AboutUs>
 <Feedback></Feedback>
 <HowWorks></HowWorks>
 <AboutServices></AboutServices>
 <SignIn></SignIn>
 <SignUp></SignUp>
<Services></Services> 
<Services_admin></Services_admin>
<Services2></Services2>  
<Services_admin2></Services_admin2>  
<Payment></Payment>

  


<ContactUs></ContactUs>
 <ContactUs_admin></ContactUs_admin>
<Questions></Questions>
<Questions_admin></Questions_admin>
     
     <Footer></Footer>
     {/* <MySubmit></MySubmit> */}
  
      

     
     


    </>
  );
}

export default App;


