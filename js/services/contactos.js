var contactosService = (function () {
    return {
        listarContactos() {
            return new Promise((resolve, reject) => {
                axios.get('http://127.0.0.1:3000/v1/contactos')
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },
        guardarContacto(contacto) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:3000/v1/contactos', contacto)
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },
        actualizarContacto(idContacto, contacto) {
            return new Promise((resolve, reject) => {
                axios.put('http://127.0.0.1:3000/v1/contactos/' + idContacto, contacto)
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },
        eliminarContacto(idContacto) {
            return new Promise((resolve, reject) => {
                axios.delete('http://127.0.0.1:3000/v1/contactos/' + idContacto)
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        }
    }
})();