import Payment from "./components/payment.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Services from "./components/Services.jsx";
import Services2 from "./components/Services2.jsx";
// import Services3 from "./components/Services3.jsx";
import "./App.css";
import Questions from "./components/Questions.jsx";
import Questions_admin from "./components/Questions_admin.jsx";
import Services_admin from "./components/Services_admin.jsx";



function App() {
  return (
    <>
  
    
<Services></Services> 
<Services_admin></Services_admin>
<Services2></Services2>    
<Payment></Payment>

  
<ContactUs></ContactUs>
 
<Questions></Questions>

<Questions_admin></Questions_admin>
     
     <Footer></Footer>


     
     


    </>
  );
}

export default App;
