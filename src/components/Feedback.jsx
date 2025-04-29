import { useState, useEffect, useRef } from "react";
import '../styles/feedback.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [input, setInput] = useState({ name: "", text: "" });
  const feedbackContainerRef = useRef(null);

  // Load feedbacks from Local Storage when component mounts
  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  // Save feedbacks to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  // Generate a random profile image
  const getRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    return `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
  };

  // Handle input change
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name.trim() || !input.text.trim()) return;

    const newFeedback = {
      name: input.name,
      text: input.text,
      img: getRandomAvatar(),
    };

    const updatedFeedbacks = [...feedbacks, newFeedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));

    setInput({ name: "", text: "" }); // Clear form
  };

  // Scroll function for horizontal movement
  const scrollFeedback = (direction) => {
    if (feedbackContainerRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      feedbackContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(()=>{
      Aos.init({duration:1000})
    }, [])

  return (
    <section id="Feedback">
    <div className="feedback-container">
      <h2 data-aos="fade-up" className="feedback-title">OUR CLIENTS FEEDBACKS</h2>

      <div data-aos="fade-up" className="feedback-wrapper">
        {/* Left Arrow */}
        {feedbacks.length > 6 && (
          <button className="arrow left" onClick={() => scrollFeedback("left")}>
            &#9664;
          </button>
        )}

        {/* Feedback List (Scrollable) */}
        <div className="feedback-list" ref={feedbackContainerRef}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className="feedback-item">
              <img src={feedback.img} alt={feedback.name} className="feedback-avatar" />
              <div className="feedback-content">
                <p className="feedback-name">{feedback.name}</p>
                <p className="feedback-text">{feedback.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {feedbacks.length > 4 && (
          <button className="arrow right" onClick={() => scrollFeedback("right")}>
            &#9654;
          </button>
        )}
      </div>

      {/* Feedback Form */}
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name" data-aos="fade-up" className="feedback-label">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Enter your name..."
          data-aos="fade-up" className="feedback-input"
        />

        <label htmlFor="feedback" data-aos="fade-up" className="feedback-label">Your Feedback</label>
        <input
          type="text"
          id="feedback"
          name="text"
          value={input.text}
          onChange={handleChange}
          placeholder="Your opinion..."
          data-aos="fade-up" className="feedback-input"
        />

        <button type="submit" data-aos="fade-up" className="feedback-button">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default Feedback;





