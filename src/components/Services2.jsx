import React, { useState } from 'react';
// import '../styles/Services.css'; 
import '../styles/Services2.css'; 



const ServiceCard = ({
  image,
  title,
  price,
  services = [],
  quantity,
  selectedServices,
  onQuantityChange,
  onServicesChange,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSelect = (service) => {
    if (selectedServices.includes(service)) {
      onServicesChange(selectedServices.filter(item => item !== service));
    } else {
      onServicesChange([...selectedServices, service]);
    }
  };

  return (
    <>
      <div className="service-caaard" onClick={() => setIsPopupOpen(true)}>
        <img src={image} alt={title} className="service-caaard-image" />
        <div className="service-caaard-content">
          <h3 className="service-caaard-title">{title}</h3>
          <p className="price">{price} EGP</p>
        </div>
      </div>

      {isPopupOpen && (
        <div className="poopup-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="poopup-content">
            <button className="close-poopup" onClick={() => setIsPopupOpen(false)}>X</button>

            <h2 className="poopup-title">{title}</h2>
            <img src={image} alt={title} className="poopup-image" />


            <div className="custoom-select">
              {services.map((service, index) => (
                <label key={index} className="custoom-option">
                  <input
                    type="checkbox"
                    value={service}
                    checked={selectedServices.includes(service)}
                    onChange={() => handleSelect(service)}
                  />
                  {service}
                </label>
              ))}
            </div>

            <div className="quantiity-selectoor">
              <button
                className="quantiity-btndecrement"
                onClick={() => onQuantityChange(Math.max(quantity - 1, 0))}
              >
                -
              </button>
              <span className="quantiity-number">{quantity}</span>
              <button
                className="quantiity-btnincrement"
                onClick={() => onQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Services2 = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 4;

    const cardData = [
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
    ];

    const [cardStates, setCardStates] = useState({});

    const handleQuantityChange = (id, quantity) => {
        setCardStates((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                quantity,
                selectedServices: prev[id]?.selectedServices || [],
            },
        }));
    };

    const handleServicesChange = (id, selectedServices) => {
        setCardStates((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                selectedServices,
                quantity: prev[id]?.quantity || 0,
            },
        }));
    };

    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = cardData.slice(startIndex, endIndex);

    return (
        <div className="serv_contaiiinn">
            <div className="household-text">
                H.O.U.S.E.H.O.L.D
            </div>
            <div className="services_containeeeer">
                {currentCards.map((card) => (
                    <ServiceCard
                        key={card.ID}
                        {...card}
                        quantity={cardStates[card.ID]?.quantity || 0}
                        selectedServices={cardStates[card.ID]?.selectedServices || []}
                        onQuantityChange={(q) => handleQuantityChange(card.ID, q)}
                        onServicesChange={(s) => handleServicesChange(card.ID, s)}
                    />
                ))}
            </div>

            <div className="slider-buttoons">
                {/* يمكنك إضافة أزرار التنقل هنا إذا كنت تريد */}
            </div>
        </div>
    );
};

export default Services2;