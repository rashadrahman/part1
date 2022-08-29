import { useState } from "react";

const Statistics = (props) => {
  const good = props.good,
    bad = props.bad,
    neutral = props.neutral,
    total = good + bad + neutral,
    score = good - bad;

  if (total === 0) {
    return <div>No Reviews Yet!</div>;
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>Neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>Bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{score / total}</td>
            </tr>
            <tr>
              <td>Percentage</td>
              <td>{(good / total) * 100}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleBadClick = () => setBad(bad + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);

  return (
    <div>
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={handleGoodClick} text="Good :D" />
      <Button handleClick={handleNeutralClick} text="Neutral :|" />
      <Button handleClick={handleBadClick} text="Bad :(" />
      <h1>STATISTICS</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
