import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {}

// global instance
export default new AppDispatcher();