import React, { useState } from 'react';
import '../Admin/ContactUsAdmin.css';

// import Aos from 'aos';
// import 'aos/dist/aos.css';


// import React, { useState } from 'react';
// import '../styles/ContactUs_admin.css';


// const   ContactUs_admin = () => {
//   const [contacts, setContacts] = useState([
//     {
//       id: 1,
//       firstName: "John",
//       secondName: "Doe",
//       email: "john.doe@example.com",
//       message: "I am interested in your services.",
//       profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
//     },
//     {
//       id: 2,
//       firstName: "Jane",
//       secondName: "Smith",
//       email: "jane.smith@example.com",
//       message: "I have a question about pricing.",
//       profileImage: "https://randomuser.me/api/portraits/women/1.jpg"
//     }
//   ]);

//   const handleDelete = (id) => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   const handleReply = (email) => {
//     alert(`Replying to: ${email}`);
//   };

//   return (
//     <section id="ContactUs">
//       <div className="contact_contain">
//         <div className="contact_fraame">
//           <h1 className="tit_contact_us">Contact Us</h1>
//           <hr className="cont_diviider" />

//           {contacts.map(contact => (
//             <div className="carddd" key={contact.id}>
//               <div className="contact-info">
//                 <img src={contact.profileImage} alt="Profile" className="contact-image" />
//                 <div className="contact-details">
//                   <p><strong>Name:</strong> {contact.firstName} {contact.secondName}</p>
//                   <p><strong>Email:</strong> {contact.email}</p>
//                   <p><strong>Message:</strong> {contact.message}</p>
//                 </div>
//               </div>
//               <div className="contact-actions">
//                 <button className="reply-button" onClick={() => handleReply(contact.email)}>Reply</button>
//                 <button className="delete-button" onClick={() => handleDelete(contact.id)}>Delete</button>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs_admin;

// import React, { useState } from 'react';
// import '../styles/ContactUs_admin.css';

const ContactUs_admin = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "John",
      secondName: "Doe",
      email: "john.doe@example.com",
      message: "I am interested in your services.",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      firstName: "Jane",
      secondName: "Smith",
      email: "jane.smith@example.com",
      message: "I have a question about pricing.",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg"
    }
  ]);

  const [replyingToId, setReplyingToId] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleReply = (id) => {
    setReplyingToId(id);
    setReplyMessage('');
  };

  const handleSendReply = (email) => {
    alert(`Reply sent to ${email}:\n\n${replyMessage}`);
    setReplyingToId(null);
    setReplyMessage('');
  };

  return (
    <section id="ContactUs">
      <div className="contact_contain">
        <div className="contact_fraame">
          <h1 className="tit_contact_us">Contact Us</h1>
          <hr className="cont_diviider" />

          {contacts.map(contact => (
            <div className="carddd" key={contact.id}>
              <div className="contact-info">
                <img src={contact.profileImage} alt="Profile" className="contact-image" />
                <div className="contact-details">
                  <p><strong>Name:</strong> {contact.firstName} {contact.secondName}</p>
                  <p><strong>Email:</strong> {contact.email}</p>
                  <p><strong>Message:</strong> {contact.message}</p>
                </div>
              </div>

              <div className="contact-actions">
                <button className="reply-button" onClick={() => handleReply(contact.id)}>Reply</button>
                <button className="delete-button" onClick={() => handleDelete(contact.id)}>Delete</button>
              </div>

              {replyingToId === contact.id && (
                <div className="reply-box">
                  <textarea
                    placeholder={`Replying to ${contact.email}`}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="reply-textarea"
                  ></textarea>
                  <button
                    className="send-reply-button"
                    onClick={() => handleSendReply(contact.email)}
                  >
                    Send Reply
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactUs_admin;
