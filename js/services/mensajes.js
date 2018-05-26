var mensajesService = (function () {
    return {
        listarMensajes() {
            return new Promise((resolve, reject) => {
                axios.get('http://127.0.0.1:3000/v1/sms')
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },
        enviarMensaje(mensaje) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:3000/v1/sms', mensaje)
                    .then((resp) => {
                        resolve(resp.data.response);
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },
    }
})();