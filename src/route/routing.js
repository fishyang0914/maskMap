import home from '../components/Home';
import about from '../components/About';
import contact from '../components/Contact';
import map from '../components/map';

export default {
    routes: [
        { path: '/home',             name: 'home',         component: home },
        { path: '/about',        name: 'about',        component: about },
        { path: '/contact',      name: 'contact',      component: contact },
        { path: '/',          name: 'map',          component: map },
    ]
}
