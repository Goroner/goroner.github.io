import { AppAction } from 'types/actions';
import { LOAD_SKILLS } from '../actions/skills';

const initialState = [];

export default (state = initialState, action: AppAction) => {
    switch (action.type) {
        case LOAD_SKILLS:
            return action.payload;
    }

    return state;
};
