import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'

function render(props = {}) {
  const { container, routerBase } = props

  const root = ReactDOM.createRoot(container ? container.getElementById('root') : document.getElementById('root'))
  root.render(
    <Router basename={window.__POWERED_BY_QIANKUN__ ? routerBase : '/'}>
      <App />
    </Router>
  )
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
