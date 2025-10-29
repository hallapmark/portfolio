import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/">
        <img className="main-picture" src="/profile_pic.jpg" alt="" />
      </Link>
      <h1 className="portfolio-heading-1">
        Hi, I'm <span>Mark.</span>
      </h1>
      <h1 className="portfolio-heading-2">I am a full-stack web developer.</h1>
      <div className="rectangle"></div>
      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="/office_desk.jpg" alt="" />
          {/* Photo by Alpha En: https://www.pexels.com/photo/modern-minimalist-home-office-desk-setup-31726551/ */}
          <p>Work</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Wandern_002_2008_08_31.jpg"
            alt=""
          />
          <p>Hobbies</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="/coffee.jpg" alt="" />
          <p>Courses</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
