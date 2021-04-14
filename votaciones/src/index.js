import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [statisticsResult, setStatisticsResult] = useState({total: 0, average: 0, positive: 0});

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
    setStatisticsResult(stadisctics_calculate(newGood, neutral, bad));
  };
  const handleNeutral = () => {
    let newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setStatisticsResult(stadisctics_calculate(good, newNeutral, bad));
  };
  const handleBad = () => {
    let newBad = bad + 1;
    setBad(newBad);
    setStatisticsResult(stadisctics_calculate(good, neutral, newBad));
  };
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <br />
      <h3>Statistics</h3>
      {
        statisticsResult.total != 0
        ?
        <Statistics good={good} neutral={neutral} bad={bad} statisticsResult={statisticsResult}/>
        :
        <p>No feedback given</p>
      }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)