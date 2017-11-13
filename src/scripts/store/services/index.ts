import { database } from 'firebase';
import { initializeApp } from 'firebase';
import SkillsService from './skills';
import ProjectsService from './projects';


initializeApp(APP_CONFIG.firebase);

const db = database();
const skillsService = new SkillsService(db.ref('skills'));
const projectsService = new ProjectsService(db.ref('projects'));

export { skillsService, projectsService };
