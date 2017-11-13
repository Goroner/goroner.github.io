import DbRef from '../utils/db';
import ProjectsService from '../../scripts/store/services/projects';

describe('ProjectsService', () => {
    it('sync should activate callback when new projects are passed from the db', (done) => {
        const dbRef = new DbRef([
            {
                name: 'Project X',
                description: 'Desc One',
                technologies: ['js', 'css', 'html'],
                startDate: Date.now()
            },
            {
                name: 'Project Y',
                description: 'Desc Two',
                technologies: ['js', 'css', 'html'],
                startDate: new Date()
            },
            {
                name: 'Project Z',
                description: 'Desc Three',
                technologies: ['js', 'css', 'html'],
                startDate: new Date()
            }
        ]);

        const projectsService = new ProjectsService(dbRef);

        const expected: Project[] = [
            {
                name: 'Project X',
                description: 'Desc One',
                technologies: ['js', 'css', 'html'],
                startDate: Date.now()
            },
            {
                name: 'Project Y',
                description: 'Desc Two',
                technologies: ['js', 'css', 'html'],
                startDate: new Date()
            },
            {
                name: 'Project Z',
                description: 'Desc Three',
                technologies: ['js', 'css', 'html'],
                startDate: new Date()
            }
        ] as Project[];

        projectsService.sync(actual => {
            expect(actual).toEqual(expected);
            done();
        });
    });
});
