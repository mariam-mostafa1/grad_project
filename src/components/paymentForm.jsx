
import React, { useState } from "react";
import "../styles/payment.css";



const PaymentForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      receivingDate: "",
      creditCard: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      Object.keys(formData).forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "Please fill out this field";
        }
      });
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully!");
      }
    };
  
    return (
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
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
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
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
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="receivingDate"
            value={formData.receivingDate}
            onChange={handleChange}
            className={errors.receivingDate ? "error" : ""}
          />
          {errors.receivingDate && (
            <span className="error-message">{errors.receivingDate}</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="creditCard"
            placeholder="Credit Card Number"
            value={formData.creditCard}
            onChange={handleChange}
            className={errors.creditCard ? "error" : ""}
          />
          {errors.creditCard && (
            <span className="error-message">{errors.creditCard}</span>
          )}
        </div>
        <button type="submit" className="booking-button">Booking</button>
      </form>
    );
  };
  
  
  
  export default PaymentForm; 
  









// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "./Payment.css"; // ملف CSS لتنسيق النموذج

// const PaymentForm = () => {
//   // تكوين Formik وإعداد التحقق
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//       receivingDate: "",
//       creditCard: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//       phone: Yup.string().required("Required"),
//       address: Yup.string().required("Required"),
//       receivingDate: Yup.string().required("Required"),
//       creditCard: Yup.string(),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2)); // طباعة البيانات المدخلة
//     },
//   });

//   return (
//     <div className="form-container">
//       <form onSubmit={formik.handleSubmit}>
//         <div className="input-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name..."
//             {...formik.getFieldProps("name")}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="E-Mail..."
//             {...formik.getFieldProps("email")}
//           />
//         </div>

//         <div className="input-group">
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             {...formik.getFieldProps("phone")}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address..."
//             {...formik.getFieldProps("address")}
//           />
//         </div>

//         <div className="input-group">
//           <input
//             type="text"
//             name="receivingDate"
//             placeholder="Receiving Date 00:00"
//             {...formik.getFieldProps("receivingDate")}
//           />
//           <input
//             type="text"
//             name="creditCard"
//             placeholder="Credit Card Number"
//             {...formik.getFieldProps("creditCard")}
//           />
//         </div>

//         <small>Optional, if you pay cash don't fill it</small>

//         <button type="submit">Booking</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;



