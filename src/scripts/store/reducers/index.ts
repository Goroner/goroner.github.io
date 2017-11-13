import { combineReducers } from 'redux';
import loadingStateReducer from './loading-state';
import skillsReducer from './skills';
import projectsReducer from './projects';

export default combineReducers<AppState>({
    loadingState: loadingStateReducer,
    skills: skillsReducer,
    projects: projectsReducer
});
