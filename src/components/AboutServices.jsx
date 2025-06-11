import React, { useEffect } from "react";
import "../styles/aboutservices.css";
import {
  FaTshirt, FaPumpSoap, FaShoePrints, FaCog,
  FaRecycle, FaHome, FaGift, FaShoppingBag
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const servicesData = [
  { icon: <FaTshirt />, title: "Clean & Dry Cleaning", description: "Washing, Drying, or any of them. In as little as 48 hours, using our high-quality dry cleaning services, have your freshly clean clothes back in your wardrobe & ready to use." },
  { icon: <FaPumpSoap />, title: "Stains Removal", description: "Specialists in removing different stains & marks. You can always try to remove them by yourself, however, some spots need more delicate touch, from an expert." },
  { icon: <FaShoePrints />, title: "Shoes & Bags Treatment", description: "Provide cleaning services for bags, footwear, leather accessories, delivering the best quality and the most prestigious outcome." },
  { icon: <FaCog />, title: "Adjustments and Repairs", description: "Adjustments and Repairs (cut, bend, shorten, narrow or modify, ...)." },
  { icon: <FaRecycle />, title: "Recycling and Resale", description:"Modify & recycle products for sale. Try to buy." },
  { icon: <FaHome />, title: "Household Fabric Care", description: "Cleaning and maintaining non-garment items." },
  { icon: <FaShoppingBag />, title: "Clothing Rental Service", description: "Rent formal or special occasion clothes through the app." },
  { icon: <FaGift />, title: "Gift Cards and Gifting", description:"You can buy gift cards for laundry services, ideal for gifting friends and family." },
];

const AboutServices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-services-section">
      <h2 className="main-title" data-aos="fade-up">ABOUT SERVICES</h2>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" data-aos="fade-up" key={index}>
            <div className="card-content">
              <div className="icon">{service.icon}</div>
              <div className="text">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutServices;
