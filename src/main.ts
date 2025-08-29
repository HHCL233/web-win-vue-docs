import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import Home from './home.vue'
import Installation from './installation.vue'

const app = createApp(App);
const home = createApp(Home);
const installation = createApp(Installation);

app.use(router);

app.mount("#app");
home.mount("#home");
installation.mount("#installation");