import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={profile} alt="Profile" />
      </div>
      <p>Hello, I'm</p>
      <h1>Vithushana Nirmaleswaran</h1>
      <h2>Frontend Developer / Backend Developer</h2>
      <div className="hero-buttons">
        <button>Download CV</button>
        <button className="black">Contact Info</button>
      </div>
      <div className="hero-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </section>
  );
};

export default Hero;
