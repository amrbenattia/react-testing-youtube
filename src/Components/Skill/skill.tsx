import { useEffect, useState } from 'react'
import { skills } from './Skill.types'

const Skills = (props: skills) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // change isLoggedIn to true after 1500ms component renders
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1500)
  }, [])

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
export default Skills
