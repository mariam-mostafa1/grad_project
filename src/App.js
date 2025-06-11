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
import FeedbackAdmin from "./Admin/FeedbackAdmin.jsx";
import ContactUsAdmin from "./Admin/ContactUsAdmin.jsx";
import ServicesAdmin from "./Admin/ServicesAdmin.jsx";
import ServicesAdmin2 from "./Admin/ServicesAdmin2.jsx";
import QuestionsAdmin from "./Admin/QuestionsAdmin.jsx";
import BookingAdmin from "./Admin/BookingAdmin.jsx";
import ProgressAdmin from "./Admin/ProgressAdmin.jsx";
import "./App.css";


function AdminLayout() {
  return (
    <div>
        <FeedbackAdmin />
        <QuestionsAdmin />
        <ContactUsAdmin />
        <ServicesAdmin />
        <ServicesAdmin2 />
        <BookingAdmin />
        <ProgressAdmin />
      
    </div>
  );
}

function App() {

  const location = useLocation();
  const hideNavbar = location.pathname.toLowerCase().startsWith('/admin') ||
  location.pathname.toLowerCase() === '/signup' ||
  location.pathname.toLowerCase() === '/signin';

  return (

    <>
    {!hideNavbar && <Navbar />}
    <Routes>
      <Route
        path="/"
        element={
          <>
          
            <Home></Home>   
            <AboutUs></AboutUs>   
            <Feedback></Feedback> 
            <HowWorks></HowWorks>    
            <AboutServices></AboutServices>  
            <Questions></Questions>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Services2" element={<Services2 />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/admin" element={<AdminLayout />}>
          {/* <Route index element={<Navigate to="services" />} /> */}
          
           </Route>
    </Routes>
  </>
  

  );
}

export default App;



