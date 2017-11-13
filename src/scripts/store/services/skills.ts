import { database } from 'firebase';

export default class SkillsService {
    private dbRef: database.Reference;

    constructor(dbRef) {
        this.dbRef = dbRef;
    }

    sync(callback: (skills: Skill[]) => void) {
        this.dbRef.on('value', (snapshot: any) => {
            const skillsMap = snapshot.val() || {};

            const skills = Object.keys(skillsMap).reduce((skillsArr: Skill[], skillName: string) => {
                skillsArr.push({
                    name: skillName,
                    level: skillsMap[skillName]
                });

                return skillsArr;
            }, []);

            callback(skills);
        });
    }
}
