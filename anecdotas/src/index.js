import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(props.anecdotes[selected].votes);

  const randomWithMax = (max) => { 
    return Math.floor(Math.random() * (max));
  }

  const handleSelected = () => {
    let indexRandom = randomWithMax(anecdotes.length);
    setSelected(indexRandom);
    setVotes(props.anecdotes[indexRandom].votes)
  }
  const handleVoted = () => {
    anecdotes[selected].votes+=1;
    setVotes(votes+1)
  }

  return (
    <div>
      <p>{props.anecdotes[selected].text}</p>
      <p>Has {votes} votes.</p>
      <button onClick={handleVoted}>Vote</button>
      <button onClick={handleSelected}>Next Anecdote</button>
    </div>
  )
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)