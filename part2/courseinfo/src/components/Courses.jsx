const Header = ({ text }) =>  <h1>{text}</h1>

const Title = ({ text }) =>  <h2>{text}</h2>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part}/>)

const Total = ({ parts }) => {
  const total = parts.reduce((accum, part) => accum += part.exercises, 0)
  return(
    <strong>total of {total} exercises</strong>
  )
}

const Course = (props) => {
  return (
    <div>
      <Title text={ props.course.name }/>
      <Content parts={ props.course.parts }/>
      <Total parts={ props.course.parts }/>
    </div>
  )
}

const Courses = (props) => {
  return(
    <div>
      <Header text="Web development curriculum"></Header>
      {props.courses.map(course => <Course key={course.id} course={course}></Course>)}
    </div>
  )
}

export default Courses