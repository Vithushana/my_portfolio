import profileImage from '../assets/profile.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate <strong>Frontend & Backend Developer</strong> currently working as a <strong>Trainee at SenzMate IoT Intelligence</strong>. I enjoy building complete web experiences—from UI to database.
          </p>
          <p>
            I'm pursuing my <strong>3rd year, 2nd semester</strong> in <strong>Information Technology at SLIIT</strong>. I believe in continuous learning and hands-on experience, which I actively reflect in my projects on <a href="https://github.com/Vithushana" target="_blank" rel="noreferrer">GitHub</a>.
          </p>
          <div className="about-skills">
            <h3 className='fe'>Key Skills:</h3>
            <ul>
              <li><span className='fe'>Frontend: </span>HTML, CSS, JavaScript, React, Angular</li>
              <li> <span className='fe'>Backend: </span>Dijango(Python), SpringBoot(Java), MongoDB, MYSQL</li>
              <li><span className='fe'>Tools: </span>Git, GitHub, Postman, Figma, AsureBoard, Selenium IDE</li>
              <li><span className='fe'>Others: </span>REST API, Firebase, LLModel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
