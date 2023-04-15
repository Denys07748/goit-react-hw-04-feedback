import { useEffect, useState } from 'react';
import css from './App.module.css';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  const[total, setTotal] = useState(0);
  const[percent, setPercent] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercent(Math.round(100 * (good/total)));
  }, [good, neutral, bad, total]);

  const handleIncrementFeedback = (setOption) => {
    return setOption(state => state + 1);
  };

    return (
      <div className={css.container}>
        <Section title='Pleace leave feedback'>
          <FeedbackOptions
            options={[['good', setGood], ['neutral', setNeutral], ['bad', setBad]]}
            onLeaveFeedback={handleIncrementFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          ) : (<Notification message='There is no feedback'/>)}
        </Section>
      </div>
    );
};

export default App;
