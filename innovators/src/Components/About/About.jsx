import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Innovators Tech</strong>, where we turn ideas into reality! We specialize
        in cutting-edge technology solutions that help businesses thrive in the digital era.
      </p>

      
      <div className="about-section">
        <h2>🏢 Our Journey</h2>
        <p>
          Founded in 2015, Innovators Tech started as a small team of passionate developers and has
          grown into a leading tech company delivering innovative solutions worldwide. Over the
          years, we have successfully completed 500+ projects across different industries.
        </p>
      </div>

     
      <div className="about-section">
        <h2>💡 What We Do</h2>
        <ul>
          <li>✅ Custom Web Development</li>
          <li>✅ Mobile App Development</li>
          <li>✅ UI/UX Design & Prototyping</li>
          <li>✅ SEO & Digital Marketing</li>
          <li>✅ E-commerce & CMS Solutions</li>
          <li>✅ Cloud-Based Business Solutions</li>
        </ul>
      </div>

     
      <div className="about-section gallery">
        <h2>📸 Our Work</h2>
        <div className="image-gallery">
          <img src="/images/project1.jpg" alt="Project 1" />
          <img src="/images/project2.jpg" alt="Project 2" />
          <img src="/images/project3.jpg" alt="Project 3" />
          <img src="/images/project4.jpg" alt="Project 4" />
        </div>
      </div>

      
      <div className="about-section team">
        <h2>👨‍💼 Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="CEO" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="CTO" />
            <h3>Sarah Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Designer" />
            <h3>Michael Lee</h3>
            <p>Lead UI/UX Designer</p>
          </div>
        </div>
      </div>

      
      <div className="about-section testimonials">
        <h2>🌟 What Our Clients Say</h2>
        <div className="testimonial">
          <p>
            "Innovators Tech transformed our business with a stunning website and top-notch mobile
            app. Highly recommended!" - <strong>Emily Carter</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Their attention to detail and customer support are excellent. We’ve seen a 40% increase
            in engagement since working with them!" - <strong>David Wilson</strong>
          </p>
        </div>
      </div>

      
      <div className="about-section contact">
        <h2>📞 Get in Touch</h2>
        <p>Email: <a href="mailto:contact@innovatorstech.com">HR@innovatorstech.com</a></p>
        <p>Phone: +923-456-7890</p>
        <p>Address: 123 Tech Street, Innovation City, USA</p>
      </div>
    </div>
  );
};

export default About;
