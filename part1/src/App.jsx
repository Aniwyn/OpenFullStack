const Header = (prpos) => {
  return(
    <>
      <h1>{prpos.course}</h1>
      
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (prpos) => {
  return(
    <>
      <Part part={ prpos.part1 } exercise={ prpos.exercises1 }/>
      <Part part={ prpos.part2 } exercise={ prpos.exercises2 }/>
      <Part part={ prpos.part3 } exercise={ prpos.exercises3 }/>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={ course }/>
      <Content part1={ part1 } exercises1={ exercises1 } part2={ part2 } exercises2={ exercises2 } part3={ part3 } exercises3={ exercises3 }/>
      <Total exercises1={ exercises1 } exercises2={ exercises2 } exercises3={ exercises3 }/>
    </div>
  )
}

export default App