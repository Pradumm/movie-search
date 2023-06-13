import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from "react-router-dom";
// import ContextProvide from './component/ContextProvide';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <ContextProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  // </ContextProvide >

);



