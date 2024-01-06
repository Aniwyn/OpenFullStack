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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return <Courses courses={courses} />
}

export default App