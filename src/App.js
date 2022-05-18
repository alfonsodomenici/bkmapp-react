import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { doLogin } from './service/userStore.js';
import { storeToken } from './security/tokenManager.js';
import { useNavigate } from 'react-router-dom';

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
       <form >
          <input onChange={onChangeUsr}  type="text" name="email" id="email" placeholder='enter email...' />
          <input onChange={onChangePwd}  type="password" name="pwd" id="pwd" />
          <button onClick={onLogin}>Login</button>
        </form>
    </div>
  );
}

export default App;
