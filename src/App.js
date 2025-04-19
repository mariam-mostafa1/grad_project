// import React, { useEffect } from "react";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Feedback from "./components/Feedback";
import HowWorks from "./components/HowWorks";
import Services from "./components/Services";
import Payment from "./components/payment";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/SignUp' || location.pathname === '/SignIn';
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <Feedback />
              <HowWorks />
              <Services />
            </>
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>    


       <br></br>
       <br></br>
       <br></br>
       <br></br>


     <Payment></Payment>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

<ContactUs></ContactUs>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
     <Footer></Footer>




    </>
  );
}

export default App;
