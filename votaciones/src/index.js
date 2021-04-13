import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stadisctics, setStadisctics] = useState({total: 0, average: 0, positive: 0});

  const stadisctics_calculate = (good, neutral, bad) => {
    let total = good + neutral + bad;
    let average = (good - bad) / total;
    let positive = good / total * 100;
    return {
      total: total,
      average: average,
      positive: positive
    }
  };

  const handleGood = () => {
    let newGood = good + 1;
    setGood(newGood);
    setStadisctics(stadisctics_calculate(newGood, neutral, bad));
  };
  const handleNeutral = () => {
    let newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setStadisctics(stadisctics_calculate(good, newNeutral, bad));
  };
  const handleBad = () => {
    let newBad = bad + 1;
    setBad(newBad);
    setStadisctics(stadisctics_calculate(good, neutral, newBad));
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <br />
      <h3>Statistics</h3>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {stadisctics.total}</li>
        <li>Average: {stadisctics.average}</li>
        <li>Positive: {stadisctics.positive} %</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)