import React from 'react';
import ReactDOM from 'react-dom/client';

import { MainContextContextProvider } from "./context/MainContext"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextContextProvider>
      <App />
    </MainContextContextProvider>
  </React.StrictMode>
);



