import { Link } from "react-router-dom"
import './Hobbies.css'

function Hobbies() {
  return (
    <>
      <div className="back-container">
        <Link to="/">
          <button>Tagasi</button>
        </Link>
      </div>
      <div>Hobide sisu</div>
    </>
  )
}

export default Hobbies