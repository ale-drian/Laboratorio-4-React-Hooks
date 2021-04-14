
const Statistics = ({good, neutral, bad, statisticsResult}) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {statisticsResult.total}</li>
        <li>Average: {statisticsResult.average}</li>
        <li>Positive: {statisticsResult.positive} %</li>
      </ul>
    </div>
  )
}

export default Statistics;