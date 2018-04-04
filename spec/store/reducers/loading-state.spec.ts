import loadingStateReducer from '../../../src/scripts/store/reducers/loading-state';
import { LOADING_STATE } from '../../../src/scripts/store/actions/loading-state';

describe('Loading State Reducer', () => {
    it('should return initial state if action is not passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, null);

        // value and reference check 
        expect(currentState).toBe(nextState);
    });

    it('should not modify the state if unknown action is passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, {
            type: 'TEST_ACTION',
            payload: {
                prop: 'skills',
                loadingState: 'LOADING'
            }
        });

        // value and reference check
        expect(nextState).toBe(currentState);
    });

    it('should not modify the state if known action with missing payload is passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, {
            type: LOADING_STATE
        });

        // value and reference check
        expect(nextState).toBe(currentState);
    });

    it('should not modify the state if known action with payload that has no prop is passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, {
            type: LOADING_STATE,
            payload: {
                loadingState: 'LOADING'
            }
        });

        // value and reference check
        expect(nextState).toBe(currentState);
    });

    it('should not modify the state if known action with payload that has no loadingState is passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, {
            type: LOADING_STATE,
            payload: {
                prop: 'skills'
            }
        });

        // value and reference check
        expect(nextState).toBe(currentState);
    });

    it('should correctly modify the state if the action is recognized and correct payload is passed', () => {
        const currentState = {
            skills: 'NOT_LOADED',
            projects: 'NOT_LOADED'
        };

        const nextState = loadingStateReducer(currentState, {
            type: LOADING_STATE,
            payload: {
                prop: 'skills',
                loadingState: 'LOADING'
            }
        });

        // immutability check
        expect(currentState).not.toBe(nextState);

        // value check
        expect(nextState).toEqual({
            skills: 'LOADING',
            projects: 'NOT_LOADED'
        });
    });
});
