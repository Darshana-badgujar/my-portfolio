// import React, { useState } from 'react';

// function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       setStatus(data.message);
//       setForm({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//       <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
//       <button type="submit">Send</button>
//       <p>{status}</p>
//     </form>
//   );
// }

// export default ContactForm;


// import React, { useState } from 'react';
// import './ContactForm.css';

// function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('http://localhost:5000/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       setStatus(data.message);
//       setForm({ name: '', email: '', message: '' });
//     } catch (error) {
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <div className="contact-form-container">
//       <h2>Contact Me</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="5"
//           value={form.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Send Message</button>
//         {status && <p className="status-message">{status}</p>}
//       </form>
//     </div>
//   );
// }

// export default ContactForm;

import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>

        {status && <p className="status-message">{status}</p>}

        {status === 'Message sent successfully!' && (
          <div className="hearts-shower">
            {[...Array(20)].map((_, i) => {
              const left = Math.random() * 100; // percent from left
              const delay = Math.random() * 2; // seconds delay
              const duration = 3 + Math.random() * 2; // seconds duration
              const size = 20 + Math.random() * 15; // font size in px

              return (
                <span
                  key={i}
                  className="heart"
                  style={{
                    left: `${left}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    fontSize: `${size}px`,
                  }}
                >
                  🎈
                </span>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
