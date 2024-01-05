import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = (props) => <p>{props.name} {props.value}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGoodScore = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }
  const increaseNeutralScore = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const increaseBadScore = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <Header text="give feedback"></Header>
      <Button handleClick={increaseGoodScore} text="good"></Button>
      <Button handleClick={increaseNeutralScore} text="neutral"></Button>
      <Button handleClick={increaseBadScore} text="bad"></Button>

      <Header text="statistics"></Header>
      <Statistic name="good" value={good}></Statistic>
      <Statistic name="neutral" value={neutral}></Statistic>
      <Statistic name="bad" value={bad}></Statistic>
      <Statistic name="all" value={total}></Statistic>
      <Statistic name="average" value={(good - bad) / total}></Statistic>
      <Statistic name="positive" value={(good * 100 / total) + " %"}></Statistic>
    </div>
  )
}

export default App