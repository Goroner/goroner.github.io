import { AppAction } from '../../../types/actions';
import { loadingStart, loadingFinish, LOADING_STATE } from '../actions/loading-state';
import { Dispatch } from 'redux';

export const LOAD_SKILLS = 'app/LOAD_SKILLS';

export function loadSkills(service) {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        const { loadingState } = getState();

        if (loadingState.skills !== 'LOADED') {
            dispatch(loadingStart('skills'));

            service.sync(skills => {
                dispatch({
                    type: LOAD_SKILLS,
                    payload: skills
                });

                dispatch(loadingFinish('skills'));
            });
        }
    };
}