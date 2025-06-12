import React, { useEffect, useState } from 'react';
import '../styles/MyAccount.css';

// const MyAccount = () => {
//   const [orders, setOrders] = useState([
//     {
//       id: 'ORD001',
//       createdAt: new Date().getTime() - 3600 * 1000 * 5, // مثال: أوردر من 5 ساعات
//       status: 'جاري المعالجة',
//       amount: 350,
//     },
//     {
//       id: 'ORD002',
//       createdAt: new Date().getTime() - 3600 * 1000 * 22, // من 22 ساعة
//       status: 'في الطريق',
//       amount: 200,
//     },
//   ]);

//   const calculateCountdown = (createdAt) => {
//     const deadline = createdAt + 24 * 60 * 60 * 1000;
//     const now = new Date().getTime();
//     const diff = deadline - now;
//     if (diff <= 0) return 'انتهى الوقت';

//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//     return `${hours} س ${minutes} د ${seconds} ث`;
//   };

//   const [countdowns, setCountdowns] = useState([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const updatedCountdowns = orders.map((order) =>
//         calculateCountdown(order.createdAt)
//       );
//       setCountdowns(updatedCountdowns);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [orders]);

//   return (
//     <div className="account-container">
//       <h2>مرحبًا بك في حسابك</h2>
//       <h3>طلباتك:</h3>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>رقم الطلب</th>
//             <th>الحالة</th>
//             <th>المبلغ</th>
//             <th>العد التنازلي</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, idx) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.status}</td>
//               <td>{order.amount} ج.م</td>
//               <td>{countdowns[idx]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyAccount;





const MyAccount = () => {
  const [user, setUser] = useState({
    name: 'Ahmed Hany',
    email: 'ahmed@email.com',
    phone: '01000000000',
    profileImage: null, // الصورة الشخصية
  });

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
      createdAt: new Date().getTime() - 3600 * 1000 * 5,
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
    setUser({ ...formData });
    setEditMode(false);
  };

  return (
    <div className="account-container">
      <h2> Account profile</h2>

      <div className="profile-section">
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
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>E-mail:</strong> {user.email}</p>
          <p><strong>Phone Number :</strong> {user.phone}</p>
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
          <div className="order-card" key={order.id}>
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
