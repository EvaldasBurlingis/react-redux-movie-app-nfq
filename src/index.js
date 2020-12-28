import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { rootReducer } from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(Thunk)
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
