import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage/GuestPage';
import LoginPage from './LoginPage/LoginPage';

function App() {

  const [loginPageLoad, setLoginPageLoad] = useState(false);

  const loginButtonClickHandler = () => {
      setLoginPageLoad(true);
  };

  return (
    <div>
      {!loginPageLoad && <GuestPage onClick={loginButtonClickHandler} />}
      {loginPageLoad && <LoginPage/> }
    </div>
  );
}

export default App;
