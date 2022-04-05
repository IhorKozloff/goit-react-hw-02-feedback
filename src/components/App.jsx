import { FeedBack } from 'components/FeedBack/Feed-Back'

const feedback = new FeedBack;


export const App = () => {
  return (
    <div>
      {feedback.render()}
    </div>
  );
};
