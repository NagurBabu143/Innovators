import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <p>
        We are dedicated to providing high-quality services and solutions to meet
        your needs. Explore our offerings and discover how we can help you achieve
        your goals.
      </p>

      
      <div className="home-cards">
        <div className="card">
          <img src="/images/mission.jpg" alt="Our Mission" className="card-img" />
          <h3>Our Mission</h3>
          <p>
            To provide innovative and effective solutions that drive success and create 
            long-lasting value for our clients.
          </p>
        </div>

        <div className="card">
          <img src="/images/vision.jpg" alt="Our Vision" className="card-img" />
          <h3>Our Vision</h3>
          <p>
            To be a global leader in digital transformation and business excellence 
            by delivering top-notch services.
          </p>
        </div>

        <div className="card">
          <img src="/images/values.jpg" alt="Core Values" className="card-img" />
          <h3>Core Values</h3>
          <p>Integrity, Innovation, Customer Focus, and Excellence in every service we offer.</p>
        </div>
      </div>

      
      <div className="home-sections">
        <div className="section">
          <img src="/images/team.jpg" alt="Who We Are" className="section-img" />
          <h3>Who We Are</h3>
          <p>
            We are a team of professionals with expertise in various domains, committed
            to delivering the best results for our clients.
          </p>
        </div>

        <div className="section">
          <img src="/images/services.jpg" alt="What We Offer" className="section-img" />
          <h3>What We Offer</h3>
          <p>
            Our services range from web development, digital marketing, IT consulting,
            and much more. We tailor our solutions to meet your specific requirements.
          </p>
        </div>

        <div className="section">
          <img src="/images/whyus.jpg" alt="Why Choose Us?" className="section-img" />
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Experienced Team</li>
            <li>✅ High-Quality Services</li>
            <li>✅ Customer Satisfaction</li>
            <li>✅ Affordable Pricing</li>
            <li>✅ 24/7 Support</li>
          </ul>
        </div>
      </div>

      
      <div className="cta">
        <p>Ready to get started? Contact us today!</p>
        <button className="contact-btn">Get in Touch</button>
      </div>
    </div>
  );
};

export default Home;
