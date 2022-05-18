import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { doLogin } from './service/userStore.js';
import { storeToken } from './security/tokenManager.js';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

function App() {

  const [usr, setUsr] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const navigate = useNavigate();
  const onChangeUsr = event => setUsr(event.target.value);
  const onChangePwd = event => setPwd(event.target.value);

  const onLogin = event => {
    event.preventDefault();
    doLogin(usr,pwd)
    .then(data => {
      storeToken(data.jwt);
      navigate("/home");
    })
  }

  return (
    <div className="App">
      <h1>Login</h1>
       <form >
          <input className="input" onChange={onChangeUsr}  type="text" name="email" id="email" placeholder='enter email...' />
          <input className="input" onChange={onChangePwd}  type="password" name="pwd" id="pwd" />
          <button className="button is-primary" onClick={onLogin}>Login</button>
        </form>
    </div>
  );
}

export default App;
