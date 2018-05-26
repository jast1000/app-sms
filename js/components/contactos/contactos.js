var Contactos = Vue.component('contactos', {
    template: `
    <div class="contenedor-pagina">
        <tabla-contactos v-if="!store.state.creacionContacto"></tabla-contactos>
        <formulario-contacto v-if="store.state.creacionContacto"></formulario-contacto>
    </div>
    `
});