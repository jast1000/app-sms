Vue.component('formularioMensaje', {
    template: `
    <div>
        <h1>Nuevo mensaje</h2>
        <br /><br />
        <el-form ref="form" :model="form">
            <el-form-item label="Destinario">
                <el-select v-model="form.id_contacto" placeholder="Elegir destinatario">
                    <el-option
                    v-for="contacto in store.state.contactos"
                    :key="contacto.id_contacto"
                    :label="contacto.alias"
                    :value="contacto.id_contacto">
                    </el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Mensaje">
                <el-input
                type="textarea"
                :rows="2"
                placeholder="Mensaje..."
                v-model="form.mensaje">
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-on:click="enviar">Enviar</el-button>
                <el-button v-on:click="cancelar">Cancelar</el-button>
            </el-form-item>
        </el-form>
    </div>
    `,
    data() {
        return {
            form: {
                mensaje: ''
            }
        }
    },
    methods: {
        cancelar() {
            store.commit('cancelarCreacionMensaje');
        },
        enviar() {
            console.log(this.form);
            var ref = this;
            mensajesService.enviarMensaje(this.form)
                .then(() => {
                    return mensajesService.listarMensajes();
                }).then((mensajes) => {
                    store.commit('setMensajes', mensajes);
                    ref.$notify({
                        title: 'Mensaje enviado',
                        message: 'El mensaje fue enviado',
                        type: 'success'
                    });
                    ref.cancelar();//regresar
                }).catch((error) => {
                    ref.$notify({
                        title: 'Error',
                        message: 'Ocurrió un error al enviar el mensaje',
                        type: 'error'
                    });
                });
        }
    },
    mounted() {
        if (!store.state.contactos) {
            console.log('Ahhhhh=???');
            var ref = this;
            contactosService.listarContactos()
                .then(function (contactos) {
                    store.commit('setContactos', contactos);
                }).catch(function (error) {
                    ref.$notify({
                        title: 'Error',
                        message: 'Ocurrió un error al consultar los contactos',
                        type: 'error'
                    });
                });
        }
    }
});