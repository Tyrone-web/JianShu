import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import { GlobalStyled } from './style'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyled></GlobalStyled>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

