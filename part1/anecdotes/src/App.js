import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const sizeOfAnecdotes = anecdotes.length;
  const buttonText = ["vote", "next anecdote"];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0});
  const [mostvoted, setMostVote] = useState(0);

  const ranIndex = () => {
    return Math.floor(Math.random() * sizeOfAnecdotes);
  };

  const handleMostVote = () => {
    let value = 0;
    let k = 0;
    for (let key in votes){
      console.log("key",key, "value",votes[key]);
      if (votes[key] > value){
        value = votes[key];
        k = key;
      };
    };
    setMostVote(k);
    return k;
  };

  const nextAnecdote = () => {
    setSelected(ranIndex());
  };

  const upVote = () => {
    const newVotes = {...votes};
    newVotes[selected] = votes[selected] + 1;
    setVote(newVotes); 
    handleMostVote();
    console.log("最新：", anecdotes[mostvoted]);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={upVote} text={buttonText[0]}/>
      <Button onClick={nextAnecdote} text={buttonText[1]}/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostvoted]}</p>
    </div>
    
  )
};

export default App;