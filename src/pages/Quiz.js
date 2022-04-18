import { useState } from 'react';

import QuizScreen from "../components/QuizScreen";
import QuizScreen2 from "../components/QuizScreen2";
import JoinScreen from "../components/JoinScreen";

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      {/* <Navbar/> */}
      <div className="quiz-container">
        {
          isQuizStarted ? (
            <QuizScreen retry={() => setIsQuizStarted(false)}/>
          ) : (
            <JoinScreen start={() => setIsQuizStarted(true)}/>
          )
        }
      </div>
    </>
  );
}

export default Quiz;