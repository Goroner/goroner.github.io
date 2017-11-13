import { AppAction } from 'types/actions';
import { LOAD_PROJECTS } from '../actions/projects';

const initialState = [];

export default (state = initialState, action: AppAction) => {
    switch (action.type) {
        case LOAD_PROJECTS:
            return action.payload;
    }

    return state;
};