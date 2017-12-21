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

declare interface TimeEvent {
    type: string;
    from: Date;
    to: Date;
}

declare interface Project extends TimeEvent {
    name: string;
    description: string;
    technologies: string[];
    url?: URL;
}

declare interface Experience extends TimeEvent {
    title: string;
    company: string;
    description: string;
}

declare interface Education extends TimeEvent {
    title: string;
    institution: string;
    description: string;
}

declare const DEV_MODE: boolean;
declare const APP_CONFIG: AppConfig;
