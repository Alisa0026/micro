
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import action from './action'
import './public-path'
let root = null

function render(props = {}) {
  const { container, routerBase } = props

  root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.querySelector('#root'))

  root.render(
    <Router basename={window.__POWERED_BY_QIANKUN__ ? routerBase : '/'}>
      <App />
    </Router>
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}


// 然后加入生命周期即可
export async function bootstrap() {
  console.log("ReactMicroApp 子应用 bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("ReactMicroApp 子应用 mount", props);
  action.setActions(props)
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("ReactMicroApp 子应用 unmount");
  root && root.unmount()
  // ReactDOM.unmountComponentAtNode(document.getElementById("root"));
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
