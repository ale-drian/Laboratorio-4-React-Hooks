import Statistic from './Statistic';

const Statistics = ({good, neutral, bad, statisticsResult}) => {
  return (
    <div className="md:w-1/4">
        <table class="border-4 border-yellow-600 table-auto md:w-full">
            <thead>
                <tr className="bg-yellow-200">
                    <th class="border-4 border-yellow-600 md:w-2/5  border-4">Votes</th>
                    <th class="border-4 border-yellow-600">Total</th>
                </tr>
            </thead>
            <tbody>
                <Statistic text="Good" value={good} color="yellow"/>
                <Statistic text="Neutral" value={neutral} color="yellow"/>
                <Statistic text="Bad" value={bad} color="yellow"/>
            </tbody>
        </table>
        <br/>
        <table class="border-4 border-green-800 table-auto md:w-full">
            <thead>
                <tr className="bg-green-200">
                    <th class="border-4 border-green-600 md:w-2/5">Property</th>
                    <th class="border-4 border-green-600">Value</th>
                </tr>
            </thead>
            <tbody>
                <Statistic text="Total" value={statisticsResult.total} color="green"/>
                <Statistic text="Average" value={statisticsResult.average} color="green"/>
                <Statistic text="Positive" value={statisticsResult.positive} symbol="%" color="green"/>
            </tbody>
        </table>
    </div>
  )
}

export default Statistics;