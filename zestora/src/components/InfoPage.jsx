import { useState } from 'react';
import '../css/stylebtn.css';
import '../css/info.css';

const InfoPage = () => {
  const [activeSection, setActiveSection] = useState('about');

  const sections = {
    about: {
      title: "About Zestora",
      content: (
        <>
          <p>Zestora is a vibrant social media platform inspired by the rich storytelling traditions of Bhojpuri culture. Our mission is to connect people through shared stories, ideas, and passions. Whether you're posting updates, liking content, or following friends, Zestora brings a zestful vibe to your digital life.</p>
          <p>Founded in 2025, we aim to blend modern technology with cultural heritage, creating a space where everyone can find their voice.</p>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      content: (
        <>
          <p>At Zestora, your privacy is our priority. We collect only the data necessary to provide a seamless experience, such as your username, email, and posts. Your information is protected with industry-standard encryption and never shared with third parties without consent.</p>
          <p>You control your data. Adjust privacy settings to manage who sees your posts and profile. For details, contact our support team.</p>
        </>
      )
    },
    contact: {
      title: "Contact Us",
      content: (
        <>
          <p>Have questions or feedback? Reach out to us!</p>
          <ul>
            <li>Email: <a href="mailto:support@zestora.com">support@zestora.com</a></li>
            <li>Phone: +91-123-456-7890</li>
            <li>Address: Zestora HQ, Patna, Bihar, India</li>
          </ul>
          <div className="cform">
            <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" required></textarea>
            <button type="submit" className="btn">Send</button>
          </form>
          </div>
        </>
      )
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Form submitted!');
  };

  return (
    <div className="info-container">

      <nav className="tabs">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`tab ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
      <main>
        <section id={activeSection} className="section active">
          <h2>{sections[activeSection].title}</h2>
          {activeSection === 'contact' ? (
            <div onSubmit={handleSubmit}>
              {sections[activeSection].content}
            </div>
          ) : (
            sections[activeSection].content
          )}
        </section>
      </main>
      
    </div>
  );
};

export default InfoPage;