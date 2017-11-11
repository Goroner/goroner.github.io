import { database } from 'firebase';
import { AppAction } from 'types/actions';

export default class ItemService {
    sync(callback: (items: Item[]) => void) {
        database().ref('items').on('value', (snapshot: any) => {
            const items = snapshot.val() || [];
            callback(items);
        });
    }
}