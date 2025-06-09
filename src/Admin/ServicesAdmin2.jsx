import React, { useState } from 'react';
import '../Admin/ServicesAdmin.css';

const ServiceCard = ({ card, onEdit, onDelete, servicesList, onUpdateServicesList }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [localCard, setLocalCard] = useState({ ...card });
  const [newService, setNewService] = useState('');

  const handleCheckboxChange = (service) => {
    setLocalCard((prev) => {
      const updatedServices = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalCard((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onEdit(localCard);
    setIsPopupOpen(false);
  };

  const handleAddService = () => {
    if (newService && !servicesList.includes(newService)) {
      onUpdateServicesList([...servicesList, newService]);
      setNewService('');
    }
  };

  const handleDeleteService = (serviceToDelete) => {
    const updatedServicesList = servicesList.filter(s => s !== serviceToDelete);
    onUpdateServicesList(updatedServicesList);
    setLocalCard(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== serviceToDelete)
    }));
  };

  return (
    <>
      <div className="service-caard" onClick={() => setIsPopupOpen(true)}>
        {/* {card.image && <img src={card.image} alt={card.title} />} */}
        {card.image && <img src={card.image} alt={card.title} className="card-image" />}
        <h3 className="service-caard-title">{card.title}</h3>
        <p className="price">{card.price} EGP</p>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content">
            <button className="close-popup" onClick={() => setIsPopupOpen(false)}>X</button>

            <input
              type="text"
              value={localCard.title}
              onChange={(e) => setLocalCard({ ...localCard, title: e.target.value })}
              placeholder="Title"
            />
            <input
              type="number"
              value={localCard.price}
              onChange={(e) => setLocalCard({ ...localCard, price: +e.target.value })}
              placeholder="Price"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {localCard.image && <img src={localCard.image} alt="Preview" className="preview-image" />}

            <div className="custom-select">
              {servicesList.map((service, i) => (
                <div key={i} className="custom-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={localCard.services.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                    />
                    {service}
                  </label>
                  <button onClick={() => handleDeleteService(service)} className="delete-service-btn">X</button>
                </div>
              ))}
              <div className="add-service">
                <input
                  type="text"
                  placeholder="Add new service"
                  value={newService}
                  onChange={(e) => setNewService(e.target.value)}
                />
                <button onClick={handleAddService}>Add</button>
              </div>
            </div>

            <div className="popup-actions">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => { onDelete(card.ID); setIsPopupOpen(false); }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Services_admin2 = () => {
  const [cards, setCards] = useState([
     {
            image: '/images/Curtains.jpg',
            title: 'Curtains',
            price: 100,
            ID: 1,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        {
            image: '/images/Sofa.jpg',
            title: 'Sofa',
            price: 120,
            ID: 2,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
        {
            image: '/images/Carpet.jpg',
            title: 'Carpet',
            price: 100,
            ID: 3,
            services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
        },
  ]);

  const [nextId, setNextId] = useState(5);

  const [servicesList, setServicesList] = useState([
    'Cleaning & Dry Cleaning',
    'Cleaning',
    'Dry Cleaning',
    'Stains Removal',
    'Adjustments & Repairs',
  ]);

  const handleAddCard = () => {
    const newCard = {
      ID: nextId,
      title: 'New Item',
      price: 0,
      image: '',
      services: []
    };
    setCards([...cards, newCard]);
    setNextId(nextId + 1);
  };

  const handleEditCard = (updatedCard) => {
    setCards((prev) => prev.map(c => c.ID === updatedCard.ID ? updatedCard : c));
  };

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter(c => c.ID !== id));
  };

  return (
    <div className="serv_contaiinn">
        <div className="household-text">
                H.O.U.S.E.H.O.L.D
            </div>
      <button className="add-card-btn" onClick={handleAddCard}>Add New Item</button>
      <div className="services_containeeer">
        {cards.map((card) => (
          <ServiceCard
            key={card.ID}
            card={card}
            servicesList={servicesList}
            onUpdateServicesList={setServicesList}
            onEdit={handleEditCard}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Services_admin2;