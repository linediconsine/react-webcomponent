import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ReactComponent/App';
import reportWebVitals from './reportWebVitals';



class WebComponentWrapper extends HTMLElement {
  
  constructor() {
    super();
    // Do something more
  }

  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');
    root.appendChild(mountPoint);
    ReactDOM.render(<App/>, mountPoint);
  }
}

customElements.define('my-web-component', WebComponentWrapper);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
