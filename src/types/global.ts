declare interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
}

declare interface AppConfig {
    version: string;
    firebase: FirebaseConfig;
}

declare interface AppState {
    test: string
}

declare const DEV_MODE: boolean;