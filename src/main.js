    import { createApp } from 'vue';

    import App from './App.vue';
    import router  from './router.js';
    import store from './store/index.js'

    import BaseCard from './components/UI/BaseCard.vue';
    import BaseButton from './components/UI/BaseButton.vue';
    import BaseDialog from './components/UI/BaseDialog.vue';
    import BaseSpinner from './components/UI/BaseSpinner.vue';

    const app = createApp(App);
    app.component('base-card', BaseCard);
    app.component('base-button', BaseButton);
    app.component('base-spinner', BaseSpinner);
    app.component('base-dialog', BaseDialog);
    app.use(router);
    app.use(store);

    app.mount('#app');
