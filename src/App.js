import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function App() {  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '176788460466-n9i9tp8jqfu79bjeprvbirfhqsrt90e5.apps.googleusercontent.com',
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);


  // **you can access the token like this**
  // const accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken);

  const onSuccess = response => {
    console.log('SUCCESS', response);
  };
  const onFailure = response => {
    console.log('FAILED', response);
  };
  const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
  };

  return (
    <div>
      <GoogleLogin
        clientId='176788460466-n9i9tp8jqfu79bjeprvbirfhqsrt90e5.apps.googleusercontent.com'
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <GoogleLogout
        clientId='176788460466-n9i9tp8jqfu79bjeprvbirfhqsrt90e5.apps.googleusercontent.com'
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
}

export default App;
