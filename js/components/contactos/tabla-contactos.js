var Contactos = Vue.component('tablaContactos', {
    template: `
        <div>
            <h2>Lista de contactos</h2>
            <br />
            
            <div style="text-align: right;">
                <el-button type="primary" icon="el-icon-plus" v-on:click="crear">Nuevo</el-button>
            </div>

            <el-table v-bind:data="store.state.contactos" style="width: 100%">
                <el-table-column prop="alias" label="Alias" width="200"></el-table-column>
                
                <el-table-column label="Nombre" width="450">
                    <template slot-scope="scope">
                        <span class="columna-nombre">
                            {{store.state.contactos[scope.$index].nombres}}
                        </span>
                    </template>
                </el-table-column>

                <el-table-column prop="numero_celular" label="Número" width="250"></el-table-column>

                <el-table-column width="200">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" v-on:click="editar(scope.$index)">Editar</el-button>
                        <el-button type="text" size="small" v-on:click="eliminar(scope.$index)">Eliminar</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    `,
    data() {
        return {}
    },
    mounted() {
        if (!store.state.contactos) {
            this.listar();
        }
    },
    methods: {
        listar() {
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
        },
        crear() {
            store.commit('crearContacto');
        },
        editar(index) {
            console.log('Editar ', index);
            var contacto = store.state.contactos[index];
            store.commit('setContacto', contacto);
            this.crear();//Entrar a seccion de formulario
        },
        eliminar(index) {
            console.log('Eliminar ', index);
            var ref = this;
            var contacto = store.state.contactos[index];
            this.$confirm('¿Desea eliminar el contacto?', 'Confirmación', {
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
                type: 'warning'
            }).then(() => {
                    contactosService.eliminarContacto(contacto.id_contacto)
                        .then(function () {
                            ref.$notify({
                                title: 'Contacto eliminado',
                                message: 'El contacto fue eliminado',
                                type: 'success'
                            });
                            ref.listar();
                        }).catch(function (err) {
                            ref.$notify({
                                title: 'Error',
                                message: 'Ocurrió un error al eliminar el contacto',
                                type: 'info'
                            });
                        });
                    done();//Cerrar
                }).catch(() => {});
        }
    }
});