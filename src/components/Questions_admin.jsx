import React, { useState } from "react";
import "../styles/Questions_admin.css";

const Questions_admin = () => {
  const [questions, setQuestions] = useState([
    { question: 'ما هي React؟', answer: 'React هي مكتبة جافاسكريبت لبناء واجهات المستخدم.' },
    { question: 'كيف تعمل الـ state في React؟', answer: 'الـ state تُستخدم لإدارة البيانات القابلة للتغيير داخل الكومبوننت.' },
    { question: 'ما الفرق بين props و state؟', answer: 'props لتمرير البيانات من الأب إلى الابن، بينما state لإدارة البيانات داخل الكومبوننت نفسه.' },
    { question: 'ما هو JSX؟', answer: 'JSX هي صيغة شبيهة بـ HTML تُستخدم لكتابة عناصر React.' },
    { question: 'ما هي الـ hooks؟', answer: 'hooks هي دوال تُتيح لك استخدام state ومزايا React الأخرى بدون كتابة class.' },
    { question: 'كيف يتم استخدام useEffect؟', answer: 'يُستخدم useEffect لتنفيذ side effects مثل جلب البيانات أو تحديث الـ DOM.' },
    { question: 'ما هو Virtual DOM؟', answer: 'Virtual DOM هو نسخة افتراضية من الـ DOM الحقيقي لتحديثه بكفاءة أكبر.' },
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
      <div className="head_ques">Common Questions</div>

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
              <span className={`arrow ${openIndex === index ? 'up' : 'down'}`}></span>
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