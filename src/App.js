import './App.css';
import Create from './Create';
import react from 'react';
import {Link } from "react-router-dom";
import App2 from "./App2"

function App() {
  return (
    <div className="login-register">
      <div className="google-signin">
      Create an account to collaborate on "Movies v2"
      <br/><br/><Create /><br/>
      </div>

      <div className="login">
      <br/>or<br/><br/>
        <form action='' id='loginform'><Loginform/></form>
      </div>

      <div className="forgot-panel">
      Already have an account? <Link to="/App1">Log in</Link>
        <br/><br/>This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>

    </div>
  );
}
function Loginform(){
  return(
    <form onSubmit={App2}>
      <label for='email'></label>
      <input type='text' placeholder='Email' id='useremail'/><br/>
      <label for='password'></label><br/>
      <input type='password' placeholder='Password' id='password'/><br/>
      <input type='submit' value='Create account' className='submit'/>
    </form>
  )
}
export default App;
