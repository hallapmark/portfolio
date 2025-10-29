import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Work from './pages/work'
import Hobbies from './pages/hobbies'
import Courses from './pages/courses'

function App() {

  return (
    <>
      <Link to="/">
        <img className="main-picture" src="../public/profile_pic.jpg" alt="" />
      </Link>
      <h1 className="portfolio-heading-1">Hi, I'm <span>Mark.</span></h1>
      <h1 className="portfolio-heading-2">I am a full-stack web developer.</h1>
      <div className ="rectangle"></div>
      <div className="navigation-pictures">
        <Link className="main-link" to="work">
          <img src="public/office_desk.jpg" alt="" />
          {/* Photo by Alpha En: https://www.pexels.com/photo/modern-minimalist-home-office-desk-setup-31726551/ */}
          <p>Work</p>
        </Link>
        <Link className="main-link" to="hobbies">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Wandern_002_2008_08_31.jpg" alt="" />
          <p>Hobbies</p>
        </Link>
        <Link className="main-link" to="courses">
          <img src="public/coffee.jpg" alt="" />
          <p>Courses</p>
        </Link>
      </div>

      <p align="center">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/fxsCwzsMOfU?si=BtFFhpK3qgxsiTxl" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </p>

      <Routes>
        <Route path="work" element={ <Work />} />
        <Route path="hobbies" element={ <Hobbies />} />
        <Route path="courses" element={ <Courses />} />
      </Routes>
    </>
  )
}

export default App
