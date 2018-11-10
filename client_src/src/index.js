import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

export default function login() 
{
  const credentials = {
      email: "anil@anil.com",
      password: "anil123"
  }
  axios.post('http://localhost:3000/api/Users/login', credentials).then(response => {
      console.log("Login Response");
      console.log(response);
      localStorage.setItem('accToken', response.data.id);
  })
}

login();

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
