import React, { useState } from 'react';
import '../styles/Services.css';


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
      <div className="service-caard" onClick={() => setIsPopupOpen(true)}>
        <img src={image} alt={title} className="service-caard-image" />
        <div className="service-caard-content">
          <h3 className="service-caard-title">{title}</h3>
          <p className="price">{price} EGP</p>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="popup-content">
            <button className="close-popup" onClick={() => setIsPopupOpen(false)}>X</button>

            <h2 className="popup-title">{title}</h2>
            <img src={image} alt={title} className="popup-image" />

            <div className="custom-select">
              {services.map((service, index) => (
                <label key={index} className="custom-option">
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

            <div className="quantity-selector">
              <button
                className="quantity-btndecrement"
                onClick={() => onQuantityChange(Math.max(quantity - 1, 0))}
              >
                -
              </button>
              <span className="quantity-number">{quantity}</span>
              <button
                className="quantity-btnincrement"
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

  const Services = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 4;
  
    const cardData = [
      // نفس البيانات اللي عندك بالظبط
      {
              image: '/images/t-shirt.jpg',
              title: 'T-shirt',
              price: 100,
              ID: 1,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/Pants.jpg',
              title: 'Pants',
              price: 120,
              ID: 2,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/jacket.jpg',
              title: 'Jacket',
              price: 100,
              ID: 3,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/Skirt.jpg',
              title: 'Skirt',
              price: 120,
              ID: 4,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/Sweater.jpg',
              title: 'Sweater',
              price: 100,
              ID: 5,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/Dress.jpg',
              title: 'Dress',
              price: 120,
              ID: 6,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/suit.jpg',
              title: 'Suit',
              price: 110,
              ID: 7,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {
              image: '/images/coat.jpg',
              title: 'Coat',
              price: 130,
              ID: 8,
              services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
            },
            {image: '/images/Pyjama.jpg',
                        title: 'Pyjama',
                        price: 100,
              ID: 9,
                        services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                    },
                    {
                        image: '/images/bags.jpg',
                        title: 'Bags',
                        price: 120,
              ID: 10,
                        services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                    },
                    {
                      image: '/images/Shoes.jpg',
                      title: 'Shoes',
                      price: 100,
              ID: 11,
                      services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                  },
                  {
                      image: '/images/belts.jpg',
                      title: 'Belts',
                      price: 120,
                            ID: 12,
                      services: ['Cleaning & Dry Cleaning', 'Cleaning', 'Dry Cleaning', 'Stains Removal', 'Adjustments & Repairs'],
                  },
      // ... الباقي زيه
    ];
  
    // حالة لحفظ بيانات كل كارت
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
      <div className="serv_contaiinn">
        <div className="clothes-text">
      C.L.O.T.H.E.S
    </div>
        <div className="services_containeeer">
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
  
        <div className="slider-buttons">
          <button className='previous-btn'
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
          >
            previous
          </button>
          <button className='next-btn'
            onClick={() =>
              setCurrentPage((prev) =>
                (prev + 1) * cardsPerPage < cardData.length ? prev + 1 : prev
              )
            }
            disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
          >
            next
          </button>
        </div>
      </div>
    );
  };
  
  export default Services;