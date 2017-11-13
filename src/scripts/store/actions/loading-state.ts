import { AppLoadingAction } from "types/actions";

export const LOADING_STATE = 'app/LOADING_STATE';

export function loadingStart(prop: string): AppLoadingAction {
    return {
        type: LOADING_STATE,
        prop,
        loadingState: 'LOADING'
    };
}

export function loadingFinish(prop: string): AppLoadingAction {
    return {
        type: LOADING_STATE,
        prop,
        loadingState: 'LOADED'
    };
}
