// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles  
import reportWebVitals from './reportWebVitals';

// Set the current lesson you want to load
const myProgress = 40; // CHANGE THIS NUMBER TO LOAD A DIFFERENT FILE
const CurrentLesson = require(`./MyNewsApp/myAppsProgress_${myProgress}/App`).default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentLesson />
  </React.StrictMode>
);

reportWebVitals();