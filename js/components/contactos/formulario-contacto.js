Vue.component('formularioContacto', {
    template: `
    <div>
        <el-form ref="form" :model="form">
            <el-form-item label="Alias">
                <el-input v-model="form.alias" placeholder="Nombre de pila..."></el-input>
            </el-form-item>

            <el-form-item label="Nombre completo">
                <el-input v-model="form.nombres" placeholder="Nombres..."></el-input>
            </el-form-item>

            <el-form-item label="Número celular">
                <el-input type="tel" v-model="form.numero_celular" placeholder="0000000000"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-on:click="guardar">Guardar</el-button>
                <el-button v-on:click="cancelar">Cancelar</el-button>
            </el-form-item>
        </el-form>
    </div>
    `,
    data() {
        return {
            form: {}
        }
    },
    methods: {
        cancelar() {
            store.commit('setContacto', {});
            store.commit('cancelarCreacionContacto');
        },
        guardar() {
            console.log(this.form);
            var ref = this;
            var promise;
            if (this.form.id_contacto) {
                promise = contactosService.actualizarContacto(this.form.id_contacto, this.form);
            } else {
                promise = contactosService.guardarContacto(this.form);
            }
            promise.then(function () {
                ref.form = {};
                ref.$notify({
                    title: 'Contacto guardado',
                    message: 'El contacto ha sido registrado',
                    type: 'success'
                });
                return contactosService.listarContactos();
            }).then(function (contactos) {
                store.commit('setContactos', contactos);
                ref.cancelar(); //regresamos a la lista de contactos
            }).catch(function (err) {
                ref.$notify({
                    title: 'Error',
                    message: 'Ocurrió un error al guardar el contacto',
                    type: 'error'
                });
            });
        }
    },
    mounted() {
        var contacto = store.state.contacto;
        if (contacto && contacto.id_contacto) {
            this.form = store.state.contacto;
        }
    }
});