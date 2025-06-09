import React from "react";
import "./BookingAdmin.css";

const BookingAdmin = () => {
  const users = [
    {
      name: "Sara Gamal",
      email: "sara_146@gmail.com",
      phone: "01046283527",
      address: "16 Ahmed Oraby st. Haram",
      dateTime: "23/2/2025 20:00",
      image: "https://i.pravatar.cc/60?img=30",
      services: [
        "Dress : clean & Dry clean ...1",
        "Shoes : Cleaning ...1",
        "Skirt : Dry cleaning ...2",
      ],
    },
    {
      name: "Mazen",
      email: "maze_n65@gmail.com",
      phone: "01046168526",
      address: "16 Roman st. Helwan",
      dateTime: "23/2/2025 18:00",
      image: "https://i.pravatar.cc/60?img=5",
      services: [
        "Suit : Adjustment Repairs ...1",
        "Shoes : Cleaning ...1",
        "Jacket : Stain Removes ...1",
      ],
    },
  ];

  return (
    <div className="booking-admin-container">
      <h1>Booking</h1>
      <button className="today-button">Today</button>

      {users.map((user, index) => (
        <div className="booking-card" key={index}>
          <div className="user-info">
            <img src={user.image} alt="User" className="avatar" />
            <div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.address}</p>
              <p>{user.dateTime}</p>
            </div>
          </div>
          <div className="services">
            {user.services.map((service, i) => (
              <p key={i}>{service}</p>
            ))}
          </div>
        </div>
      ))}

      <button className="see-more-button">see more</button>
    </div>
  );
};

export default BookingAdmin;

