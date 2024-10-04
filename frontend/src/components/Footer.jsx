import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  return (
    <footer className="container">
      <hr />
      <div className="content">
        {/* Wrapping the logo with a link */}
        <div>
          <Link to="/">
            <img src="/lama.png" alt="logo" className="logo-img" />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/appointment"}>Appointment</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
        </div>

        {/* Business hours */}
        <div>
          <h4>Hours</h4>
          <ul>
            {hours.map((element) => (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact section with clickable phone, email, and location */}
        <div>
          <h4>Contact</h4>
          <div>
            <FaPhone className="contact-icon" />
            <a href="tel:+918306077257" className="contact-info">+91 83060 77257</a>
          </div>
          <div>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:ylavish07@gmail.com" aria-label="Mail" target="_blank" rel="noopener noreferrer" className="contact-info">
              ylavish07@gmail.com
            </a>
          </div>
          <div>
            <FaMapMarkedAlt className="contact-icon" />
            <a
              href="https://www.google.com/maps/place/Raipur,+Chhattisgarh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info"
            >
              Raipur, Chhattisgarh, India
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
