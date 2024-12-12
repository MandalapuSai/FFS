import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//  Disable Inspect Element globally
// document.addEventListener("contextmenu", (event) => event.preventDefault());
// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "F12" || 
//     (event.ctrlKey && event.shiftKey && ["I", "C", "J", "U"].includes(event.key))
//   ) {
//     event.preventDefault();
//   }
// });

// Disable console globally
// console.log = function () {};
// console.error = function () {};
// console.warn = function () {};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
