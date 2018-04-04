import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import DbRef from '../../utils/db';
import { loadingStart, loadingFinish } from '../../../src/scripts/store/actions/loading-state';
import { loadProjects, LOAD_PROJECTS } from '../../../src/scripts/store/actions/projects';
import ProjectsService from '../../../src/scripts/store/services/projects';
import { LOADING_STATE } from '../../../src/scripts/store/actions/loading-state';

const mockStore = configureStore([thunk]);
const date = new Date();

describe('Action Creator: Projects', () => {
    describe('Action: loadProjects', () => {
        function getMockedService(): ProjectsService {
            const dbRef = new DbRef([
                {
                    name: 'Project X',
                    description: 'Desc One',
                    technologies: ['js', 'css', 'html'],
                    startDate: date
                },
                {
                    name: 'Project Y',
                    description: 'Desc Two',
                    technologies: ['js', 'css', 'html'],
                    startDate: date
                }
            ]);

            return new ProjectsService(dbRef);
        }

        function getInitialState(loadingState = {}): AppState {
            return {
                skills: [],
                projects: [],
                loadingState: { ...{ skills: 'NOT_LOADED', projects: 'NOT_LOADED' }, ...loadingState }
            };
        }

        it('should invoke the projects loading flow using store dispatch to drive it', async (done) => {
            // mock service and store to perform isolated test
            const service = getMockedService();
            const store = mockStore(getInitialState());
            spyOn(service, 'sync').and.callThrough();

            // dispatch flow action
            await store.dispatch(loadProjects(service));

            // 0. We expect 3 actions to be dispatched from this flow
            const actions = store.getActions();
            expect(actions.length).toEqual(3);

            // 1. dispatch loadingStart action to notify that projects loading started 
            expect(actions[0]).toEqual(loadingStart('projects'));

            // 2. call sync on the projects service to get the projects data 
            expect(service.sync).toHaveBeenCalled();

            // 3. dispatch load projects action to pass payload to the reducers
            expect(actions[1]).toEqual({
                type: LOAD_PROJECTS,
                payload: [
                    {
                        name: 'Project X',
                        description: 'Desc One',
                        technologies: ['js', 'css', 'html'],
                        startDate: date
                    },
                    {
                        name: 'Project Y',
                        description: 'Desc Two',
                        technologies: ['js', 'css', 'html'],
                        startDate: date
                    }
                ]
            });

            // 4. dispatch loadingFinish action to notify that projects loading finished
            expect(actions[2]).toEqual(loadingFinish('projects'));
            done();
        });

        it('should not call projects service sync if already synced', async (done) => {
            const service = getMockedService();
            // mark projects as loaded in the state
            const store = mockStore(getInitialState({ projects: 'LOADED' }));
            spyOn(service, 'sync').and.callThrough();
            await store.dispatch(loadProjects(service));

            const actions = store.getActions();

            expect(actions.length).toEqual(0);
            expect(service.sync).not.toHaveBeenCalled();
            done();
        });
    });
});
