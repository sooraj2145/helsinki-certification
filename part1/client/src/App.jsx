import React, { useState } from "react";

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises{" "}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

const FeedbackButton = ({ onClick, feedback }) => {
  return <button onClick={onClick}>{feedback}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={good + neutral + bad} />
      <StatisticLine
        text="Average"
        value={((good - bad) / (good + neutral + bad || 1)).toFixed(2)}
      />
      <StatisticLine
        text="Positive"
        value={`${((good / (good + neutral + bad)) * 100 || 0).toFixed(2)} %`}
      />
      {good + neutral + bad === 0 ? <p>No feedback given</p> : null}
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const [selected, setSelected] = useState(0);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const handleAnecdoteClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleAnecdoteVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };
  return (
    <>
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
      <hr />
      <div>
        <h2>Give Feedback</h2>
        <div className="feedback-buttons">
          <FeedbackButton onClick={handleGood} feedback="Good" />
          <FeedbackButton onClick={handleNeutral} feedback="Neutral" />
          <FeedbackButton onClick={handleBad} feedback="Bad" />
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
      <hr />
      <div>
        <h2>Anecdote of the Day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has <strong>{votes[selected]}</strong> votes</p>
        <div className="anecdote-buttons">
          <button
            onClick={() => {
              handleAnecdoteVote();
            }}
          >
            Vote
          </button>
          <button onClick={handleAnecdoteClick}>Next Anecdote</button>
        </div>
        <div>
          <h2>Anecdotes with most votes:</h2>
          {anecdotes[votes.indexOf(Math.max(...votes))] || "No votes yet"}
          <p>
            has <strong>{Math.max(...votes)}</strong> votes
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default App;
