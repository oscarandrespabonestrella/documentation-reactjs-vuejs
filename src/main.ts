import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

import "bootstrap/dist/js/bootstrap.js"
import 'prismjs';


import "./index.scss";


createApp(App).use(router).mount('#app')
