const Hello = (props) => { 
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello name="Jose" age="20"/>
      <Hello name="Jorge" age={20 + 10}/>
    </div>
  )
}

export default App
