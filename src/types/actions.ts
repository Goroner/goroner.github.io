import { Action } from 'redux';

export interface AppAction extends Action {
    payload?: any;
}

export interface AppLoadingAction extends Action {
    prop: string;
    loadingState: LoadingState;
}