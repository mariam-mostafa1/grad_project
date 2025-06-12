import React, { useEffect, useState } from 'react';
import '../styles/MyAccount.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyAccount = () => {
  const [user, setUser] = useState({
    name: 'Ahmed Hany',
    email: 'ahmed@email.com',
    phone: '01000000000',
    profileImage: null,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const [orders, setOrders] = useState([
    {
      id: 1,
      product: 'تيشيرت أبيض',
      createdAt: new Date().getTime(),
    },
    {
      id: 2,
      product: 'بنطلون جينز',
      createdAt: new Date().getTime() - 3600 * 4798 * 5,
    },
  ]);

  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimers = {};
      orders.forEach((order) => {
        const now = new Date().getTime();
        const deadline = order.createdAt + 24 * 3600 * 1000;
        const remaining = deadline - now;

        newTimers[order.id] =
          remaining > 0
            ? {
                hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((remaining / (1000 * 60)) % 60),
                seconds: Math.floor((remaining / 1000) % 60),
              }
            : null;
      });

      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(interval);
  }, [orders]);

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setFormData({ ...user });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSave = () => {
    const phoneRegex = /^01\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("phone number must start with '01' and it is 11 numbers");
      return;
    }

    setUser({ ...formData });
    setEditMode(false);
  };

  return (
    <div className="account-container">
      <h2 className="account-header"> Account profile</h2>

      <div className="profile-section" data-aos="fade-down">
        <img
          src={
            formData.profileImage ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&rounded=true&size=120`
          }
          alt="Profile images "
          className="profile-image"
        />

        {editMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="upload-input"
          />
        )}
      </div>

      {!editMode ? (
        <div className="useer-info" data-aos="fade-up">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
          <p><strong>Phone :</strong> {user.phone}</p>
          <button onClick={handleEditToggle} className="edit-btn"> Update Account</button>
        </div>
      ) : (
        <div className="edit-form">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone Number :
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={handleEditToggle} className="cancel-btn">Cancel</button>
        </div>
      )}

      <h3> Booked services</h3>
      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id} data-aos="zoom-in">
            <p><strong>Service:</strong> {order.product}</p>
            {timers[order.id] ? (
              <p>
                <strong> End at:</strong>{' '}
                {timers[order.id].hours}h : {timers[order.id].minutes}m : {timers[order.id].seconds}s
              </p>
            ) : (
              <p className="expired"> Time ended</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
