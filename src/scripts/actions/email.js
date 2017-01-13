import appDispatcher from '../dispatcher';

var emailActions = {
    sendEmail: function(data, source = 'VIEW_ACTION') {
        appDispatcher.dispatch({
            source: source,
            type: 'SEND_EMAIL',
            data: data
        });
    }
}

export default emailActions;