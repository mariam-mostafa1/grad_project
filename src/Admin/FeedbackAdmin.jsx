import React, { useState, useEffect } from 'react';
import './FeedbackAdmin.css';

const dummyFeedbacks = [
  {
    id: 1,
    name: 'Joly Gaga',
    comment: 'I’m so happy with the results! Thank you for the great service.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Maged Khalil',
    comment: 'Thanks for making laundry day so easy and hassle-free!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'Wael Aser',
    comment: 'I’m so grateful for your timely service and attention to detail!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Lily M.',
    comment: 'I’ll definitely be back! Thank you for the excellent service!',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'Wael Aser',
    comment: 'I’m so grateful for your timely service and attention to detail!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 6,
    name: 'Lily M.',
    comment: 'I’ll definitely be back! Thank you for the excellent service!',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

function FeedbackAdmin() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setFeedbacks(dummyFeedbacks);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this feedback?');
    if (confirmDelete) {
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
    }
  };

  return (
    <div className="feedback-admin">
      <h2>OUR CLIENTS FEEDBACK</h2>
      <div className="feedback-grid">
        {feedbacks.map((fb) => (
          <div key={fb.id} className="feedback-card">
            <img src={fb.image} alt={fb.name} className="avatar" />
            <div className="feedback-text">
              <strong>{fb.name}</strong>
              <p>{fb.comment}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDelete(fb.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackAdmin;


