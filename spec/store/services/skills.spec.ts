import DbRef from '../../utils/db';
import SkillsService from '../../../src/scripts/store/services/skills';

describe('Skills Service', () => {
    describe('sync', () => {
        function prepareTestDb() {
            return new DbRef({
                js: 90,
                css: 90,
                html: 100
            });
        }

        it('should pass all skills when there are skills in the db', (done) => {
            const dbRef = prepareTestDb();
            const skillsService = new SkillsService(dbRef);

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


            skillsService.sync(actual => {
                expect(actual).toEqual(expected);
                done();
            });
        });

        it('should pass no skills when there are no skills in the db', (done) => {
            const dbRef = new DbRef([]);
            const skillsService = new SkillsService(dbRef);

            skillsService.sync(actual => {
                expect(actual).toEqual([]);
                done();
            });
        });
    });
});