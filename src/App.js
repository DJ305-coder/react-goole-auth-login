import './App.css';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <div className="App">
     <GoogleLogin
        clientId="176788460466-n9i9tp8jqfu79bjeprvbirfhqsrt90e5.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
