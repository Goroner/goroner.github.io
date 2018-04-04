import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DbRef from '../../utils/db';
import { loadingStart, loadingFinish } from '../../../src/scripts/store/actions/loading-state';
import { LOADING_STATE } from '../../../src/scripts/store/actions/loading-state';
import { loadSkills, LOAD_SKILLS } from '../../../src/scripts/store/actions/skills';
import SkillsService from '../../../src/scripts/store/services/skills';

const mockStore = configureStore([thunk]);

describe('Action Creator: Skills', () => {
    describe('Action: loadSkills', () => {
        function getMockedService(): SkillsService {
            const dbRef = new DbRef({
                js: 90,
                html: 80,
                css: 90
            });

            return new SkillsService(dbRef);
        }

        function getInitialState(loadingState = {}): AppState {
            return {
                skills: [],
                projects: [],
                loadingState: { ...{ skills: 'NOT_LOADED', projects: 'NOT_LOADED' }, ...loadingState }
            };
        }

        it('should invoke the skills loading flow using store dispatch to drive it', async (done) => {
            const service = getMockedService();
            const store = mockStore(getInitialState());
            spyOn(service, 'sync').and.callThrough();

            // dispatch flow action
            await store.dispatch(loadSkills(service));

            // 0. We expect 3 actions to be dispatched from this flow
            const actions = store.getActions();
            expect(actions.length).toEqual(3);

            // 1. dispatch loadingStart action to notify that projects loading started 
            expect(actions[0]).toEqual(loadingStart('skills'));

            // 2. call sync on the projects service to get the projects data 
            expect(service.sync).toHaveBeenCalled();

            // 3. dispatch load projects action to pass payload to the reducers
            expect(actions[1]).toEqual({
                type: LOAD_SKILLS,
                payload: [
                    {
                        name: 'js',
                        level: 90
                    },
                    {
                        name: 'html',
                        level: 80
                    },
                    {
                        name: 'css',
                        level: 90
                    }
                ]
            });

            // 4. dispatch loadingFinish action to notify that projects loading finished
            expect(actions[2]).toEqual(loadingFinish('skills'));
            done();
        });

        it('should not call skills service sync if already synced', async (done) => {
            const service = getMockedService();
            // mark projects as loaded in the state
            const store = mockStore(getInitialState({ skills: 'LOADED' }));
            spyOn(service, 'sync').and.callThrough();
            await store.dispatch(loadSkills(service));

            const actions = store.getActions();

            expect(actions.length).toEqual(0);
            expect(service.sync).not.toHaveBeenCalled();
            done();
        });
    });
});