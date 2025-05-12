import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Vithushana Nirmaleswaran</h1>
      <Scrollspy
        items={['about', 'experience', 'projects', 'contact']}
        currentClassName="active"
        componentTag="ul"
      >
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </Scrollspy>
    </nav>
  );
};

export default Navbar;
