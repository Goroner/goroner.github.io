import { loadingStart, loadingFinish, LOADING_STATE } from '../../../src/scripts/store/actions/loading-state';

describe('Action Creator: Loading State', () => {
    describe('Action: loadingStart', () => {
        it('should create loading start action for specific prop', () => {
            const action = loadingStart('test');
            const { payload } = action;

            expect(action).toBeDefined();
            expect(payload).toBeDefined();
            expect(action.type).toEqual(LOADING_STATE);
            expect(payload.prop).toEqual('test');
            expect(payload.loadingState).toEqual('LOADING');
        });

        it('should create loading start action with no payload if no prop param', () => {
            const action = loadingStart('');
            const { payload } = action;

            expect(action).toBeDefined();
            expect(payload).toBeUndefined();
        });
    });

    describe('Action: loadingFinish', () => {
        it('should create loading finish action for specific prop', () => {
            const action = loadingFinish('test');
            const { payload } = action;

            expect(action).toBeDefined();
            expect(payload).toBeDefined();
            expect(action.type).toEqual(LOADING_STATE);
            expect(payload.prop).toEqual('test');
            expect(payload.loadingState).toEqual('LOADED');
        });

        it('should create loading finish action with no payload if no prop param', () => {
            const action = loadingFinish('');
            const { payload } = action;

            expect(action).toBeDefined();
            expect(payload).toBeUndefined();
        });
    });
});
