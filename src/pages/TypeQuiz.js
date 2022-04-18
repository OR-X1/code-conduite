import { useState } from 'react';
import { Link } from 'react-router-dom';



function TypeQuiz() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-6">
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/quiz" className="btn btn-dark btn-lg px-4 me-md-2">Get started</Link>
              <Link to="/login" className="btn btn-outline-secondary btn-lg px-4">Go to dashboard</Link>
              
            </div>
          </div>
        </div>
      </div>
  );
}

export default TypeQuiz;