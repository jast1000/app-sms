var Mensajes = Vue.component('mensajes', {
    template: `
        <div class="contenedor-pagina">
            <tabla-mensajes v-if="!store.state.envioMensaje"></tabla-mensajes>
            <formulario-mensaje v-if="store.state.envioMensaje"></formulario-mensaje>
        </div>
    `
});