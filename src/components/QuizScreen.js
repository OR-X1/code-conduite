import { useEffect, useState } from "react";
import Questionlist from "./Questionlist.json";
import QuizResult from "./QuizResult";
import Question from "./Question";

function QuizScreen({retry}) {


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(Questionlist.length));
    const isQuestionEnd = currentQuestionIndex === Questionlist.length;
    
    useEffect(() => {
        console.log("Questionlist.Length : "+Questionlist.length);
    },[]);
    
    function calculateResult(){
        let correct = 0;
        Questionlist.forEach((question, index) => {
            if(question.correctOptionIndex === markedAnswers[index]){
                correct++;
            }
        });
        return {
            total: Questionlist.length,
            correct: correct,
            percentage: Math.trunc((correct / Questionlist.length) * 100)
        }
    }

    // console.log(Questionlist[currentQuestionIndex]);
    
    return (
      <div className="quiz-screen">
          {
              isQuestionEnd ? (
                  <QuizResult
                    result={calculateResult()}
                    retry={retry}
                  />
              ) : (
                  <Question
                    question={Questionlist}
                    totalQuestions={Questionlist.length}
                    currentQuestionIndex={currentQuestionIndex}
                    // currentQuestion={currentQuestionIndex+1}
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    setAnswer={(index)=>{
                        setMarkedAnswers((arr)=>{
                            let newArr = [...arr];
                            newArr[currentQuestionIndex-1] = index;
                            return newArr;
                        });
                        setCurrentQuestionIndex(currentQuestionIndex+1);
                    }}
                    />
              )
          }
      </div>
    );
  } 
  
  export default QuizScreen;