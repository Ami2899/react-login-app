import './App.css';
import react from 'react';
import {Link } from "react-router-dom";


function App2() {
  return (
    <div className="login-email">
        <div className="des">Enter your email to reset password</div>
        <div className="sendmail">
        <form action='' id='smail'><Semail/></form>
        </div>
        <div className="cancel"><Link to="App1">Cancel</Link></div>
    </div>
  );
}
function Semail(){
    return(
        <form>
            <label for='email'></label>
            <input type='text' placeholder='Email' id='useremail'/><br/>
            <input type='submit' value="Reset Password" className='submit'/>  
        </form>
    )
}
export default App2;
