import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Registrazione from '../views/Registrazione.vue';
import ElencoGare from '../views/ElencoGare.vue';
import DettaglioGara from '../views/DettaglioGara.vue';
import GarePerMese from '../views/GarePerMese.vue';
import PollsView from '../views/PollsView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/registrazione', component: Registrazione },
  { path: '/elenco-gare', component: ElencoGare },
  { path: '/gare/:id', component: DettaglioGara },
  { path: '/sondaggi', component: PollsView },
  {
    path: '/gare-mese/:month',
    name: 'GarePerMese',
    component: GarePerMese,
    props: true, // Passa il parametro "month" come prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

