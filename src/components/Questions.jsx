import React, { useState } from "react";
import "../styles/Questions.css";






const questionsData = [
 { question: 'What types of laundry services do you offer?', answer: 'What types of laundry services do you offer?' },
    { question: 'How do I schedule a pickup and delivery?', answer: 'You can schedule a pickup and delivery directly through our website or mobile app. Just select a time slot, provide your address, and we will take care of the rest.' },
    { question: 'How long does it take to get my clothes back?', answer: 'Turnaround time is typically 24 to 48 hours, depending on the service and your location. We also offer express service for same-day or next-day delivery.' },
    { question: 'What if I have special instructions for my clothes?', answer: 'No problem! During the online booking, you can add notes or special instructions like preferred detergent, temperature settings, or stain concerns.' },
    { question: 'Are my clothes safe and insured?', answer: 'Yes, we take great care with your items and use professional-grade equipment and detergents. In the rare case of damage or loss, we offer compensation according to our customer policy.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit/debit cards, digital wallets, and sometimes cash on delivery depending on the area.' },
    { question: 'Do I need to separate my clothes before pickup?', answer: 'No, it is not necessary. Our team will sort items based on color and fabric type before washing. However, if you have items that need special care, it’s best to label them or add a note during booking.' },
];

const Questions = () => {
  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const visibleQuestions = showMore ? questionsData : questionsData.slice(0, 4);

  const handleToggleShowMore = () => {
    setShowMore(prev => !prev);
    setOpenIndex(null);
  };

  const handleToggleQuestion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="Questions">
    <div className="questions-container">
      <div className="head_ques">Frequently Asked Questions</div>
      <ul>
        {visibleQuestions.map((item, index) => (
          <li key={index} className="question-item">
            <div className="question-header" onClick={() => handleToggleQuestion(index)}>
                 <h3>{item.question}</h3>

                {/* <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}></span> */}
               
            </div>
            <div className={`answer-wrapper ${openIndex === index ? 'open' : ''}`}>
              <p className="answer">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="toggle-btn" onClick={handleToggleShowMore}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>
    </section>
  );
};

export default Questions;