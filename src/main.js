import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import scss from './assets/scss/main.scss';

createApp(App).use(store, scss).mount('#app');
