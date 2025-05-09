import React, { useState } from "react";
import "../styles/Questions_admin.css";

const Questions_admin = () => {
  const [questions, setQuestions] = useState([
    { question: 'What types of laundry services do you offer?', answer: 'What types of laundry services do you offer?' },
    { question: 'How do I schedule a pickup and delivery?', answer: 'You can schedule a pickup and delivery directly through our website or mobile app. Just select a time slot, provide your address, and we will take care of the rest.' },
    { question: 'How long does it take to get my clothes back?', answer: 'Turnaround time is typically 24 to 48 hours, depending on the service and your location. We also offer express service for same-day or next-day delivery.' },
    { question: 'What if I have special instructions for my clothes?', answer: 'No problem! During the online booking, you can add notes or special instructions like preferred detergent, temperature settings, or stain concerns.' },
    { question: 'Are my clothes safe and insured?', answer: 'Yes, we take great care with your items and use professional-grade equipment and detergents. In the rare case of damage or loss, we offer compensation according to our customer policy.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit/debit cards, digital wallets, and sometimes cash on delivery depending on the area.' },
    { question: 'Do I need to separate my clothes before pickup?', answer: 'No, it’s not necessary. Our team will sort items based on color and fabric type before washing. However, if you have items that need special care, it is best to label them or add a note during booking.' },
  ]);

  const [showMore, setShowMore] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');

  const visibleQuestions = showMore ? questions : questions.slice(0, 4);

  const handleToggleShowMore = () => {
    setShowMore(prev => !prev);
    setOpenIndex(null);
  };

  const handleToggleQuestion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    setEditIndex(null);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };

  const handleDelete = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
    setOpenIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditQuestion(questions[index].question);
    setEditAnswer(questions[index].answer);
  };

  const handleSaveEdit = (index) => {
    const updated = [...questions];
    updated[index] = { question: editQuestion, answer: editAnswer };
    setQuestions(updated);
    setEditIndex(null);
    setOpenIndex(null);
  };

  return (
    <div className="questions-container">
      <div className="head_ques">Frequently Asked Questions</div>

      <div className="crud-controls">
        <input
          type="text"
          placeholder="أدخل السؤال"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="crud-input"
        />
        <input
          type="text"
          placeholder="أدخل الإجابة"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="crud-input"
        />
        <button className="crud-btn add-btn" onClick={handleAddQuestion}>إضافة</button>
      </div>

      <ul>
        {visibleQuestions.map((item, index) => (
          <li key={index} className="question-item">
            <div className="question-header" onClick={() => handleToggleQuestion(index)}>
              <h3>{item.question}</h3>
              {/* <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}></span> */}
            </div>
            <div className={`answer-wrapper ${openIndex === index ? 'open' : ''}`}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editQuestion}
                    onChange={(e) => setEditQuestion(e.target.value)}
                    className="crud-input"
                  />
                  <input
                    type="text"
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    className="crud-input"
                  />
                  <button className="crud-btn edit-btn" onClick={() => handleSaveEdit(index)}>حفظ</button>
                </>
              ) : (
                <>
                  <p className="answer">{item.answer}</p>
                  <button className="crud-btn edit-btn" onClick={() => handleEdit(index)}>تعديل</button>
                  <button className="crud-btn delete-btn" onClick={() => handleDelete(index)}>حذف</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button className="toggle-btn" onClick={handleToggleShowMore}>
        {showMore ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default Questions_admin;