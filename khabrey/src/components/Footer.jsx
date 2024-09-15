import React from 'react';
import '../styles/Footer.css'; // Link to the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:info@khabrey.com">info@khabrey.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Address: 123 News St, Media City, MC 12345</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/dadhichi_pandya" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dadhichi-pandya-74bb842a4/" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Khabrey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
