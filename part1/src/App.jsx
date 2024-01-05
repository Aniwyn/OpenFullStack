const Header = (prpos) => {
  return(
    <>
      <h1>{prpos.course}</h1>
      
    </>
  )
}

const Content = (prpos) => {
  return(
    <>
      <p>
        {prpos.part1} {prpos.exercises1}
      </p>
      <p>
        {prpos.part2} {prpos.exercises2}
      </p>
      <p>
        {prpos.part3} {prpos.exercises3}
      </p>
    </>
  )
}

const Total = () => {
  return(
    <>
      <h1>{prpos.course}</h1>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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