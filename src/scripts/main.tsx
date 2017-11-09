import '../styles/main';

import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './reducers';

let store;

if (DEV_MODE) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    store = createStore(reducers, composeWithDevTools());
} else {
    store = createStore(reducers);
}

render(<Provider store={store}><App /></Provider>, document.querySelector('.app'));
