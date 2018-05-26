var state = {
    creacionContacto: false,
    envioMensaje: false,
    contactos: null,
    contacto: null,
    mensajes: null
};

var crearContacto = function (state) {
    state.creacionContacto = true;
};

var cancelarCreacionContacto = function (state) {
    state.creacionContacto = false;
};

var crearMensaje = function (state) {
    state.envioMensaje = true;
};

var cancelarCreacionMensaje = function (state) {
    state.envioMensaje = false;
};

var setContactos = function (state, contactos) {
    state.contactos = contactos;
};

var setContacto = function(state, contacto) {
    state.contacto = contacto;
};

var setMensajes = function(state, mensajes) {
    state.mensajes = mensajes;
}

var store = new Vuex.Store({
    state: state,
    mutations: {
        crearContacto,
        cancelarCreacionContacto,
        crearMensaje,
        cancelarCreacionMensaje,
        setContactos,
        setContacto,
        setMensajes
    }
});