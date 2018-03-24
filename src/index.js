import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>
  , document.getElementById('root'));
registerServiceWorker();
