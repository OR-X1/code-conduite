import { LinearProgress } from "@mui/material";
import { useState,useEffect,useRef } from "react";
import { flushSync } from "react-dom";


function Question({question,totalQuestions,setAnswer,setCurrentQuestionIndex , currentQuestionIndex}) {

    
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedIndex , setSelectedIndex]=useState(0)
    const progressBar = useRef(null);
    const [progress , setProgress] = useState(100);

    const gotoNextQuestion = ()=> {
        setCurrentQuestionIndex(currentQuestionIndex+1)
        setProgress(100);
        // if(timer.current){
        //     clearTimeout(timer.current);
        // }
        flushSync(()=>{
            setAnswer(selectedOption);
        });
         setSelectedOption(null);
    }
    

    //decrement progress each 1 second set Interval for 5 seconds
    useEffect(()=>{
        console.log("question : " +question);
        let interval = setInterval(()=>{
            setProgress(progress=>{
                if(progress>0){
                    return progress-20;
                }
                else{
                    setCurrentQuestionIndex(currentQuestionIndex+1)
                    setProgress(100);
        // if(timer.current){
        //     clearTimeout(timer.current);
        // }
        // flushSync(()=>{
        //     setAnswer(selectedOption);
        // });
         setSelectedOption(null); 
                    return 0
                }
            })
        },1000);
        return ()=>{
            clearInterval(interval);
        }
    },[]);


    // useEffect(()=>{
    //     const nextQuestion = setTimeout(()=>{
    //         if(selectedOption){
    //             gotoNextQuestion();
    //         }
    //     },2000)
    //     return ()=>{
    //         clearTimeout(nextQuestion);
    //     }
    // },[selectedOption]);

   
    // useEffect(()=>{
    //     progressBar?.current.classList.remove("active");
    //     console.log(progressBar.current);
    //     setTimeout(()=>{
    //         progressBar?.current.classList.add("active");
    //     },1000);
    //     setTimeout((gotoNextQuestion,10*1000));
    //     return gotoNextQuestion;
    // },[ progressBar]);

    return (
      <div className="question">
          <div className="progress-bar" ref={progressBar}></div>
          <LinearProgress 
            variant="determinate"
            value={progress}
          />
          <div className="question-count">
              <b>{currentQuestionIndex+1}</b>
              of
              <b>{totalQuestions}</b>
          </div>
          <div className="main">
              <div className="title">
                  <span>Question:</span>
                  <p>{question[currentQuestionIndex].title}</p>
              </div>
              <div className="title">
                  <img className="image" src={question[currentQuestionIndex].image} alt=""/>
              </div>
              <div className="options">
                  {
                      question[currentQuestionIndex].options.map((option,index)=>{
                          return (
                              <div
                                className={index === selectedOption ? "option active" : "option"}
                                key={index}
                                onClick={()=>setSelectedOption(index)} 
                              >
                                  {option}
                              </div>
                          );
                      })
                  }
              </div>

              <div>
                  <button onClick={()=>gotoNextQuestion()}>Next</button>
              </div>
          </div>
      </div>
    );
  } 
  
  export default Question;