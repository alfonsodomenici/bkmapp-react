import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Home } from './Home';
import reportWebVitals from './reportWebVitals';

const routs = (
  < BrowserRouter >
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </ BrowserRouter >
);

//ReactDOM.render(routs, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(routs, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
