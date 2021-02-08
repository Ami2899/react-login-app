import './App.css';
import Login from './Login';
import react from 'react';
import {Link } from "react-router-dom";


function App1() {
  return (
    <div className="login-register">
      <div className="google-signin">
      Log in to collaborate on "Movies v2"
      <br/><br/><Login /><br/>
      </div>

      <div className="login">
      <br/>or<br/><br/>
        <form action='' id='loginform'><Loginform/></form>
      </div>

      <div className="forgot-panel">
      <Link to="/App2">Forgot password?</Link>
      <br/><br/>No account? <Link to="/App">Create one </Link>
      <br/><br/>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>

    </div>
  );
}
function Loginform(){
  return(
    <form>
      <label for='email'></label>
      <input type='text' placeholder='Email' id='useremail'/><br/>
      <label for='password'></label><br/>
      <input type='password' placeholder='Password' id='password'/><br/>
      <input type='submit' value='Log in' className='submit'/>
    </form>
  )
}
export default App1;
