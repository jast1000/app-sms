const routes = [
    { path: '/bienvenida', component: Bienvenida },
    { path: '/mensajes', component: Mensajes },
    { path: '/contactos', component: Contactos }
];

const router = new VueRouter({
    routes: routes
});