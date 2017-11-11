import { AppAction } from '../../../types/actions';
import { itemService } from '../services';
import { Dispatch } from 'redux';

export const LOAD_ITEMS = 'app/LOAD_ITEMS';
export const ITEMS_SYNCED = 'app/ITEMS_SYNCED';

export function loadItems() {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        const appState = getState();

        if (!appState.items.synced) {
            dispatch({
                type: ITEMS_SYNCED,
                payload: true
            });

            itemService.sync(items => {
                dispatch({
                    type: LOAD_ITEMS,
                    payload: items
                });
            });
        }
    };
}