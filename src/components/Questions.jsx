import React, { useState } from "react";
import "../styles/Questions.css";






const questionsData = [
  { question: 'ما هي React؟', answer: 'React هي مكتبة جافاسكريبت لبناء واجهات المستخدم.' },
  { question: 'كيف تعمل الـ state في React؟', answer: 'الـ state تُستخدم لإدارة البيانات القابلة للتغيير داخل الكومبوننت.' },
  { question: 'ما الفرق بين props و state؟', answer: 'props لتمرير البيانات من الأب إلى الابن، بينما state لإدارة البيانات داخل الكومبوننت نفسه.' },
  { question: 'ما هو JSX؟', answer: 'JSX هي صيغة شبيهة بـ HTML تُستخدم لكتابة عناصر React.' },
  { question: 'ما هي الـ hooks؟', answer: 'hooks هي دوال تُتيح لك استخدام state ومزايا React الأخرى بدون كتابة class.' },
  { question: 'كيف يتم استخدام useEffect؟', answer: 'يُستخدم useEffect لتنفيذ side effects مثل جلب البيانات أو تحديث الـ DOM.' },
  { question: 'ما هو Virtual DOM؟', answer: 'Virtual DOM هو نسخة افتراضية من الـ DOM الحقيقي لتحديثه بكفاءة أكبر.' },
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
      <h2>الأسئلة الشائعة</h2>
      <ul>
        {visibleQuestions.map((item, index) => (
          <li key={index} className="question-item">
            <div className="question-header" onClick={() => handleToggleQuestion(index)}>
              <h3>{item.question}</h3>
              <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}></span>
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