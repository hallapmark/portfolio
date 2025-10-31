import { Link } from "react-router-dom"
import "./Courses.css"
import { useState } from "react"

// enum approximation
const CourseKeys = Object.freeze({
	Udemy: "udemy",
	Coursera: "coursera",
	Codecademy: "codecademy",
	Udacity: "udacity"
})

function Courses() {

  const [kursus, uuendaKursus] = useState("Valimata");
  
  return (
    <>
      <div className="courses-back-container">
        <Link to="/">
          <button>Tagasi</button>
        </Link>
      </div>
        <button 
        className={`kursus ${kursus === CourseKeys.Udemy ? 'aktiivne' : undefined}`}
        onClick={() => uuendaKursus(CourseKeys.Udemy)}>Udemy</button>
        <button
        className={`kursus ${kursus === CourseKeys.Coursera ? 'aktiivne' : undefined}`}
        onClick={() => uuendaKursus(CourseKeys.Coursera)}>Coursera</button>
        <button
        className={`kursus ${kursus === CourseKeys.Codecademy ? 'aktiivne' : undefined}`}
        onClick={() => uuendaKursus(CourseKeys.Codecademy)}>Codecademy</button>
        <button
        className={`kursus ${kursus === CourseKeys.Udacity ? 'aktiivne' : undefined}`}
        onClick={() => uuendaKursus(CourseKeys.Udacity)}>Udacity</button>
        {kursus === CourseKeys.Udemy && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === CourseKeys.Coursera && <div>Siin on kirjeldus (loend) Coursera.org läbitud kursustest</div>}
        {kursus === CourseKeys.Codecademy && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === CourseKeys.Udacity && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
    </>
  )
}

export default Courses