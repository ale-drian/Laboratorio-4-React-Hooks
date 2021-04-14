import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Anecdote = ({text, votes, color}) => {
  return (
    <div className={`text-xl border-4 border-${color}-600 p-2 rounded-lg`}>
      <p >{text}</p>
      <p>Has {votes} votes.</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(props.anecdotes[selected].votes);
  const [indexMax, setIndexMax] = useState(0);

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
    setIndexMax(mostVoted());
  }

  const mostVoted = () => {
    let arrayVotes = anecdotes.map(x => x.votes);
    let voteMax = Math.max(...arrayVotes);
    let indexMax = arrayVotes.indexOf(voteMax);
    return indexMax;
  }

  return (
    <div className="container p-10 lg:w-2/4 md:w-3/4 sm:w-full">
      <h2 className="font-bold text-4xl">Anecdote of the day</h2>
      <Anecdote text={props.anecdotes[selected].text} votes={votes} color="green"/>
      <button className="px-6 py-2 mr-2 mb-5 mt-2 bg-red-700 text-white font-medium text-xl rounded-md hover:bg-red-500" 
              onClick={handleVoted}>Vote</button>
      <button className="px-6 py-2 mb-5 mt-2 bg-blue-900 text-white font-medium text-xl rounded-md hover:bg-blue-500" 
              onClick={handleSelected}>Next Anecdote</button>
      <h2 className="font-bold text-4xl">Anecdote with most votes</h2>
      <Anecdote text={props.anecdotes[indexMax].text} votes={props.anecdotes[indexMax].votes} color="yellow"/>
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