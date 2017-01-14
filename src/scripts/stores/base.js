import firebase from 'firebase';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher';

firebase.initializeApp({
    apiKey: "AIzaSyDHaknyumPa_a2wOHFVbC8SYMe-So1q-zk",
    authDomain: "mitevs-github-io-7ec93.firebaseapp.com",
    databaseURL: "https://mitevs-github-io-7ec93.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "192006046099"
});

class BaseStore extends EventEmitter {
    constructor(config) {
        super();    
        this.db = firebase.database();
        this._registerActionListeners(config);
        this._registerDispatcherListener();
    }

    addChangeListener(listener) {
        this.on('change', listener);
    }

    addErrorListener(listener) {
        this.on('error', listener);
    }

    removeChangeListener(listener) {
        this.removeListener('change', listener);
    }

    removeErrorListener(listener) {
        this.removeListener('error', listener);
    }

    _registerActionListeners(config) {
        this.listenersMap = {};

        if (config) {
            Object.keys(config).forEach(key => {
                let listeners = this.listenersMap[key] = this.listenersMap[key] || [];
                listeners.push(config[key]);
            }); 
        }
    }

    _registerDispatcherListener() {
        AppDispatcher.register(this._handleAction.bind(this));
    }

    _handleAction(action) {
        var listeners = this.listenersMap[action.type] || [];

        listeners.forEach(handler => {
            this[handler](action.data);
        });
    }
}

export default BaseStore;