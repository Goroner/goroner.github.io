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

declare type LoadingState = 'NOT_LOADED' | 'LOADING' | 'LOADED';

declare interface AppState {
    skills: Skill[];
    projects: Project[];
    loadingState: {
        skills: LoadingState;
        projects: LoadingState;
    }
}

declare interface Skill {
    name: string;
    level: number;
}

declare interface Project {
    name: string;
    description: string;
    technologies: string[];
    startDate: Date;
    endDate?: Date;
    url?: URL;
}

declare const DEV_MODE: boolean;
declare const APP_CONFIG: AppConfig;
