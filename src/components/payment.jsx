import React, { useState } from "react";
import "../styles/payment.css";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    cardNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // السماح فقط بالأرقام في حقل الهاتف
    if (name === "phone" && !/^\d*$/.test(value)) {
      return; // منع أي مدخل غير رقمي
    }
    if (name === "cardNumber" && !/^\d*$/.test(value)) {
      return; // منع أي مدخل غير رقمي
    }
  
    setFormData({ ...formData, [name]: value });
  
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newErrors = {};

  //   Object.keys(formData).forEach((key) => {
  //     if (formData[key].trim() === "") {
  //       newErrors[key] = "This field is required";
  //     }
  //   });

  //   if (!/^[0-9]{10,11}$/.test(formData.phone)) {
  //     newErrors.phone = "Phone number must be 10-11 digits";
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     alert("Booking Successful!");
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
  
    // التحقق من أن جميع الحقول ممتلئة
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required";
      }
    });
  
    // التحقق من صحة رقم الهاتف
    if (!/^\d{10,11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10-11 digits";
    }
    
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      alert("Booking Successful!");
    }
  };
  /************************************************************************** */

  return (
    <div className="payment-containn">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="fo0rm-griid">
          <div className="fo0rm_group">
         
          
            <input
              type="text"
              name="name"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
              // className={errors.name ? "error" : ""}
              className={errors.name ? "error input-icon" : "input-icon-name inp0t"}
            />
        

            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="fo0rm_group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              // className={errors.email ? "error" : ""}
              className={errors.email ? "error input-icon" : "input-icon-email inp0t"}

            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          {/* <div className="form-group" style={{ position: "relative" }}> */}
          <div className="fo0rm_group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error input-icon" : "input-icon-phone inp0t"}
            />
             {errors.phone && <p className="error-message">{errors.phone}</p>}

          </div>
          <div className="fo0rm_group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error input-icon" : "input-icon-address inp0t"}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>
          <div className="fo0rm_group">
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={errors.date ? "error input-icon" : "input-icon-date inp0t"}
            />
            {errors.date && <p className="error-message">{errors.date}</p>}
          </div>
          <div className="fo0rm_group">
            <input
              type="text"
              name="cardNumber"
              placeholder="Credit Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className={errors.cardNumber ? "error input-icon" : "input-icon-credit inp0t"}
            />
            {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
          </div>
          {/* زر الحجز موضوع في الصف الرابع بالعمود الثاني */}
          <div className="bottun-containn">
            <button type="submit" className="booking-button">
              Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;



