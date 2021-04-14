import Statistic from './Statistic';

const Statistics = ({good, neutral, bad, statisticsResult}) => {
  return (
    <div>
        <Statistic text="Good" value={good}/>
        <Statistic text="Neutral" value={neutral}/>
        <Statistic text="Bad" value={bad}/>
        <Statistic text="Total" value={statisticsResult.total}/>
        <Statistic text="Average" value={statisticsResult.average}/>
        <Statistic text="Positive" value={statisticsResult.positive} symbol="%"/>
    </div>
  )
}

export default Statistics;