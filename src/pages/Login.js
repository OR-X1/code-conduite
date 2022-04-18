import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  let navigate= useNavigate();


  // const history = useHistory()
  const [isloadingsubmit, setIsLoadingsubmit] = useState(false);
  
  const email = 'admin@gmail.com'
  const password = '1234'
  const [emailValue, setEmailValue] = useState(email)
  const [passwordValue, setPasswordValue] = useState(password)
  const [error, setError] = useState('')
  const handlelogin = e => {
    e.preventDefault();
    
      if (emailValue === email && passwordValue === password) {
          navigate('/dashboard')
      } else {
          setError('Email or password is incorrect')
      }
  }



    
    return (
      <div class="col-md-8   mx-auto col-lg-4 mt-5">
      <form onSubmit={handlelogin} class="p-4 p-md-5 border rounded-3 bg-light">
        <h2 class="mb-4 text-center">Login</h2>
        <div>
          <label class="form-label text-danger">{error}</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" value={emailValue}  onChange={e => setEmailValue(e.target.value)} placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="floatingPassword" value={passwordValue}  onChange={e => setPasswordValue(e.target.value)}  placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <span className="border-top"></span>
        <small class="text-muted">By clicking Sign in, you agree to the terms of use.</small>
      </form>
    </div>
    );
  } 
  
  export default Login;