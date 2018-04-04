import { database } from 'firebase';

export default class ProjectsService {
    private dbRef: database.Reference;

    constructor(dbRef) {
        this.dbRef = dbRef;
    }

    sync(callback: (projects: Project[]) => void) {
        this.dbRef.on('value', (snapshot: any) => {
            const projects = snapshot.val() || [];
            callback(projects);
        });
    }
}
