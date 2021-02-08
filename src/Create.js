import react from 'react';
import {GoogleLogin} from 'react-google-login';

const clientId='1012409363374-sbmscj467kv654sbik6j4frnq2ob6p1l.apps.googleusercontent.com';

function Login(){
    const onSuccess=(res)=>{
        console.log('[Login Success] currentUser:',res.profileObj);
    };
    
    return(
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Sign up with Google"
            onSuccess={onSuccess}
            cookiePolicy={ 'single_host_origin' }
            style={{marginTop:'100px'}}
            isSignedIn={true}
        />
        </div>
    );
}

export default Login;