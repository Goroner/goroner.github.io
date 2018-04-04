import { AppAction } from "types/actions";

export const LOADING_STATE = 'app/LOADING_STATE';

export function loadingStart(prop: string): AppAction {
    const action: AppAction = { type: LOADING_STATE };

    if (prop) {
        action.payload = {
            prop,
            loadingState: 'LOADING'
        };
    }

    return action;
}

export function loadingFinish(prop: string): AppAction {
    const action: AppAction = { type: LOADING_STATE };

    if (prop) {
        action.payload = {
            prop,
            loadingState: 'LOADED'
        };
    }

    return action;
}
