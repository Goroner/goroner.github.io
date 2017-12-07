import { AppAction } from '../../../types/actions';
import { loadingStart, loadingFinish, LOADING_STATE } from '../actions/loading-state';
import { Dispatch } from 'redux';

export const LOAD_PROJECTS = 'app/LOAD_PROJECTS';

export function loadProjects(service) {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        const { loadingState } = getState();

        if (loadingState.projects !== 'LOADED') {
            dispatch(loadingStart('projects'));

            service.sync(projects => {
                dispatch({
                    type: LOAD_PROJECTS,
                    payload: projects
                });

                dispatch(loadingFinish('projects'));
            });
        }
    };
}
