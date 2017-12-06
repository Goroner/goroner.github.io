import DbRef from '../../utils/db';
import ProjectsService from '../../../src/scripts/store/services/projects';

describe('Projects Service', () => {
    function prepareTestDb() {
        return new DbRef([
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
    }

    describe('sync', () => {
        it('should pass all projects when there are projects in the db', (done) => {
            const dbRef = prepareTestDb();
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

        it('should pass no projects when there is nothing in the db', (done) => {
            const dbRef = new DbRef([]);
            const projectsService = new ProjectsService(dbRef);

            projectsService.sync(actual => {
                expect(actual).toEqual([]);
                done();
            });
        });
    });
});
