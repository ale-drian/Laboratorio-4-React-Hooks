import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <br/>
      <h3>Statistics</h3>
      <p>No feedback given</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)