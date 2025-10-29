import { Link } from "react-router-dom"
import './Work.css'

function Work() {
  return (
    <>
      <div className="back-container">
        <Link to="/">
          <button>Tagasi</button>
        </Link>
      </div>
      <div>Töölehe sisu</div>
    </>
  )
}

export default Work