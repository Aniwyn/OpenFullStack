const Header = ({ course }) =>  <h1>{course}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part}/>)


const Total = (props) => {
  return(
    <>
      <h1>{ props.course }</h1>
      <p>Number of exercises { props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</p>
    </>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={ props.course.name }/>
      <Content parts={ props.course.parts }/>
      {/* <Total parts={ props.course.parts }/> */}
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
    ],
  }

  return <Course course={course} />
}

export default App