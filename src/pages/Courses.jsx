import { Link } from "react-router-dom"
import "./Courses.css"

function Courses() {
  return (
    <>
      <div className="back-container">
        <Link to="/">
          <button>Tagasi</button>
        </Link>
      </div>
      <div>Kursuste sisu</div>
    </>
  )
}

export default Courses