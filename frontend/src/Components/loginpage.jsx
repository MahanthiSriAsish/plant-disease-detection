import Login from '../pages/Login.jsx';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId= "527292517145-s2fpiloqpvm1h5avi383tq5u4l0mmjsa.apps.googleusercontent.com";

function Loginpage() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId:{clientId},
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });
  return ( 
    <div className="App">
      <Login />
    </div>
  );
}

export default Loginpage;