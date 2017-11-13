import DbRef from '../utils/db';
import SkillsService from '../../scripts/store/services/skills';

describe('SkillsService', () => {
    it('sync should activate callback when new skills are passed from the db', (done) => {
        // fake db, looks similar to what we have in firebase
        const dbRef = new DbRef({
            js: 90,
            css: 90,
            html: 100
        });

        // the service should be able to get the data and transform it in list of Skill objects
        const expected = [
            {
                name: 'js',
                level: 90
            },
            {
                name: 'css',
                level: 90
            },
            {
                name: 'html',
                level: 100
            }
        ];

        const skillService = new SkillsService(dbRef);

        skillService.sync((actual) => {
            expect(actual).toEqual(expected);
            done();
        });
    });
});