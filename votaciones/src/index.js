import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stadisctics, setStadisctics] = useState({});

  const stadisctics_ = (good, neutral, bad) => {
    let total = good + neutral + bad;
    let average = (good - bad) / total;
    let positive = good / total * 100;
    return {
      "total": total,
      "average": average,
      "positive": positive
    }
  };

  useEffect(() => {
    setGood(6);
    setNeutral(2);
    setBad(1);
    setStadisctics(stadisctics_(good, neutral, bad));
  });

  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
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