import { initializeApp } from 'firebase';
import ItemService from './items';

declare const appConfig: AppConfig;
initializeApp(appConfig.firebase);

const itemService = new ItemService();

export { itemService };
