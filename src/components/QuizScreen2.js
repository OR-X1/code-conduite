import { useEffect, useState } from "react";
import Questionlist from "./Questionlist.json";
import QuizResult from "./QuizResult";
import Question from "./Question";

function   QuizScreen({retry}) {

    const [Questionlist, setQuestionlist] = useState([]);


    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var graphql = JSON.stringify({
  query: "query Questions($getCategoryByIdId: ID!) {\r\n  getCategoryById(id: $getCategoryByIdId) {\r\n    questions {\r\n      id\r\n      title\r\n      description\r\n      image\r\n      category\r\n      answer1\r\n      answer2\r\n      answer3\r\n      answer4\r\n      correctAnswer\r\n    }\r\n  }\r\n}",
  variables: {"getCategoryByIdId":"6256b08298dd960b55e97bad"}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

useEffect(() => {
  fetch("https://code-conduite.herokuapp.com/gql/getCategoryById", requestOptions)
  .then(response => response.json())
  // .then(result => console.log(setQuestionlist(result.data.getCategoryById.questions)))
  .then(result => console.log(result.data.getCategoryById.questions))
  .catch(error => console.log('error', error));
    
},[]);

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