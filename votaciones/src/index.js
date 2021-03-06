import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button';
import Statistics from './components/Statistics';
import './index.css';

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
    <div className="container p-10">
      <h1 className="font-bold text-4xl">Give Feedback</h1>
      <Button handle={handleGood} text="Good"/>
      <Button handle={handleNeutral} text="Neutral"/>
      <Button handle={handleBad} text="Bad"/>
      <br />
      <br />
      <h3 className="font-semibold text-3xl">Statistics</h3>
      <br />
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