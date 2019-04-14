import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'
import Main from './components/Main';
import store, {history} from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
      <Provider store = {store}>
               <Main/>
      </Provider>
     ,
    document.getElementById('app')
)


