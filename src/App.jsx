import { Route, Routes } from 'react-router-dom'
import './App.css'
import Work from './pages/work'
import Hobbies from './pages/hobbies'
import Courses from './pages/courses'
import NotFound from './pages/Notfound'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Navbar />} />
        <Route path="work" element={ <Work />} />
        <Route path="hobbies" element={ <Hobbies />} />
        <Route path="courses" element={ <Courses />} />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

export default App
