function QuizResult({result,retry}) {

    return (
      <div className="result-screen">
          <h2>Result : {result.percentage}%</h2>
          <p>Selected {result.correct} correct options out of {result.total} questions.</p>
          <button onClick={retry}>Retry</button>
      </div>
    );
  } 
  
  export default QuizResult;