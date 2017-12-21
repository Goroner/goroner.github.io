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
                let level = skillsMap[skillName];
                
                if (level > 100) {
                    level = 100;
                }

                skillsArr.push({
                    name: skillName,
                    level
                });

                return skillsArr;
            }, []);

            callback(skills);
        });
    }
}
