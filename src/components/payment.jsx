import React, { useState } from "react";
import "../styles/payment.css";



/*
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
    setFormData({ ...formData, [name]: value });

    // إزالة الخطأ بمجرد بدء الكتابة
    if (value.trim() !== "") {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // التحقق من إدخال جميع الحقول
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Booking Successful!");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <small className="error-message">Please fill out this field</small>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <small className="error-message">Please fill out this field</small>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <small className="error-message">Please fill out this field</small>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "error" : ""}
          />
          {errors.address && <small className="error-message">Please fill out this field</small>}
        </div>

        <div className="form-group">
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? "error" : ""}
          />
          {errors.date && <small className="error-message">Please fill out this field</small>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="cardNumber"
            placeholder="Credit Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className={errors.cardNumber ? "error" : ""}
          />
          {errors.cardNumber && <small className="error-message">Please fill out this field</small>}
        </div>

        <button type="submit" className="booking-button">Booking</button>
      </form>
    </div>
  );
};


*/
//export default Payment;







// const PaymentForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     receivingDate: "",
//     creditCard: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     Object.keys(formData).forEach((field) => {
//       if (!formData[field]) {
//         newErrors[field] = "Please fill out this field";
//       }
//     });
//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <form className="payment-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className={errors.name ? "error" : ""}
//         />
//         {errors.name && <span className="error-message">{errors.name}</span>}
//       </div>
//       <div className="form-group">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className={errors.email ? "error" : ""}
//         />
//         {errors.email && <span className="error-message">{errors.email}</span>}
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className={errors.phone ? "error" : ""}
//         />
//         {errors.phone && <span className="error-message">{errors.phone}</span>}
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className={errors.address ? "error" : ""}
//         />
//         {errors.address && <span className="error-message">{errors.address}</span>}
//       </div>
//       <div className="form-group">
//         <input
//           type="datetime-local"
//           name="receivingDate"
//           value={formData.receivingDate}
//           onChange={handleChange}
//           className={errors.receivingDate ? "error" : ""}
//         />
//         {errors.receivingDate && (
//           <span className="error-message">{errors.receivingDate}</span>
//         )}
//       </div>
//       <div className="form-group">
//         <input
//           type="text"
//           name="creditCard"
//           placeholder="Credit Card Number"
//           value={formData.creditCard}
//           onChange={handleChange}
//           className={errors.creditCard ? "error" : ""}
//         />
//         {errors.creditCard && (
//           <span className="error-message">{errors.creditCard}</span>
//         )}
//       </div>
//       <button type="submit" className="booking-button">Booking</button>
//     </form>
//   );
// };



// export default PaymentForm;
