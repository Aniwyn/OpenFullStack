import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistic = ({ good, neutral, bad, total }) => {
  if (total === 0) return(<p>No feedback given</p>)
  return(
      <table>
        <tbody>
          <StatisticLine name="good" value={good}></StatisticLine>
          <StatisticLine name="neutral" value={neutral}></StatisticLine>
          <StatisticLine name="bad" value={bad}></StatisticLine>
          <StatisticLine name="all" value={total}></StatisticLine>
          <StatisticLine name="average" value={(good - bad) / total}></StatisticLine>
          <StatisticLine name="positive" value={(good * 100 / total) + " %"}></StatisticLine>
        </tbody>
      </table>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  )
}

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
      <Statistic good={good} neutral={neutral} bad={bad} total={total}></Statistic>
    </div>
  )
}

export default App