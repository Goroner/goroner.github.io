import { AppAction, AppLoadingAction } from '../../../types/actions';

import { LOADING_STATE } from '../actions/loading-state';

const initialState = {
    skills: 'NOT_LOADED',
    projects: 'NOT_LOADED'
};

export default (state = initialState, action: AppLoadingAction) => {
    switch (action.type) {
        case LOADING_STATE:
            return { ...state, [action.prop]: action.loadingState }
    };

    return state;
}
