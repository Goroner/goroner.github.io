import '../styles/main';

import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './components/app';
import reducers from './store/reducers';
import { projectsService, skillsService } from './store/services';
import { loadSkills } from './store/actions/skills';
import { loadProjects } from './store/actions/projects';

let store: Store<AppState>;

if (DEV_MODE) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    store = createStore(reducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
} else {
    store = createStore(reducers,
        applyMiddleware(thunkMiddleware)
    );
}

store.dispatch(loadSkills(skillsService));
store.dispatch(loadProjects(projectsService));

render(<Provider store={store}><App /></Provider>, document.querySelector('main'));
