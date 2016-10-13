import appDispatcher from '../dispatcher';

var itemActions = {
    addItem: function(data, source = 'VIEW_ACTION') {
        appDispatcher.dispatch({
            source: source,
            type: 'ADD_ITEM',
            data: data
        });
    }
}

export default itemActions;