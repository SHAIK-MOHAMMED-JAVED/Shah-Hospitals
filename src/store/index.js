import { createStore } from 'vuex';

import authModule from './auth/index.js';
import adminModule from './adminOperations/index.js';
import userModule from './userOperations/index.js';

const store = createStore({
    modules: {
        auth: authModule,
        admin: adminModule,
        user: userModule
    }
});

export default store;