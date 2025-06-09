import React, { useState } from 'react';

const MySubmit = ({ submittedItems, onUpdateItem, onConfirm }) => {
  // submittedItems = [{ id, title, quantity, selectedServices, price }, ...]
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 0) return;
    onUpdateItem(id, { quantity: newQuantity });
  };

  const handleServiceToggle = (id, service) => {
    const item = submittedItems.find(item => item.id === id);
    if (!item) return;

    let newServices;
    if (item.selectedServices.includes(service)) {
      newServices = item.selectedServices.filter(s => s !== service);
    } else {
      newServices = [...item.selectedServices, service];
    }
    onUpdateItem(id, { selectedServices: newServices });
  };

  return (
    <div className="mysubmit-container">
      <h2>Your Selected Items</h2>
      {submittedItems.length === 0 && <p>No items selected yet.</p>}
      {submittedItems.map(item => (
        <div key={item.id} className="mysubmit-item">
          <h3>{item.title} (Price: {item.price} EGP)</h3>

          <div>
            <strong>Quantity:</strong>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          </div>

          <div>
            <strong>Services:</strong>
            {item.services.map((service, idx) => (
              <label key={idx} style={{ marginLeft: 10 }}>
                <input
                  type="checkbox"
                  checked={item.selectedServices.includes(service)}
                  onChange={() => handleServiceToggle(item.id, service)}
                />
                {service}
              </label>
            ))}
          </div>
        </div>
      ))}

      {submittedItems.length > 0 && (
        <button onClick={onConfirm} className="confirm-btn">
          Confirm and Submit
        </button>
      )}
    </div>
  );
};

export default MySubmit;
