import { AppAction } from '../../../types/actions';
import { LOADING_STATE } from '../actions/loading-state';

const initialState = {
    skills: 'NOT_LOADED',
    projects: 'NOT_LOADED'
};

/**
 * Checks if the action contains all the necessary data for the reducer to be able to create the next state
 * 
 * @param action
 */
function actionCanBeReduced(action: AppAction) {
    return action && action.type && action.payload && action.payload.prop && action.payload.loadingState;
}

export default (state = initialState, action: AppAction) => {
    if (actionCanBeReduced(action)) {
        switch (action.type) {
            case LOADING_STATE:
                return { ...state, [action.payload.prop]: action.payload.loadingState }
        };
    }

    return state;
}
