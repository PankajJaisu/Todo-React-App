import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SecondApp2 from './SecondApp'
import reportWebVitals from './reportWebVitals';

const first_app = ReactDOM.createRoot(document.getElementById('first_app'));
first_app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
