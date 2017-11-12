import { AppAction } from 'types/actions';
import { LOAD_ITEMS, ITEMS_SYNCED } from '../actions/items';
import { Reducer } from 'redux';

const initialState = {
    synced: false,
    items: []
};

export default (state = initialState, action: AppAction) => {
    switch (action.type) {
        case LOAD_ITEMS:
            return { ...state, data: action.payload };
        case ITEMS_SYNCED: {
            return {...state, synced: action.payload };
        }
    }

    return state;
};