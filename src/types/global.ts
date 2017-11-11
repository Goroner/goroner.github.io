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
    items: {
        synced: boolean;
        data: Item[]
    } 
}

declare interface Item {
    name: string;
    config: { [key: string]: string };
}

declare const DEV_MODE: boolean;