import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </>
);


reportWebVitals();
