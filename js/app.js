var store = new Vuex.Store({
    state: {
        count: 0,
        number: 2
    },
    mutations: {
        increment(state) {
            state.count++;
            console.log(state.count);
        },
        saludar(state) {
            return state.number;
        }
    }
});

const routes = [
    { path: '/pagina1', component: Pagina1 },
    { path: '/pagina2', component: Pagina2 }
];

const router = new VueRouter({
    routes: routes
});

var app = new Vue({
    el: '#app',
    store: store,
    router: router,
    data: {
        message: 'Hello Vue!'
    }
});

store.commit('increment');
var x = store.state.number;
console.log(x);
router.replace('/pagina1');
