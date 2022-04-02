import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//compose позволяет добавить доп элементы хранилища, applyMiddleware допфункционал 
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'
//устанавливаем для асинхронного подтягивания данных в приложение из внешнего API
import thunk from "redux-thunk";
import { spamfilter } from './redux/spamfilter';


//создаем инстанс хранилища
let store = createStore(rootReducer,
  applyMiddleware(
    thunk,
    spamfilter
  )
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
