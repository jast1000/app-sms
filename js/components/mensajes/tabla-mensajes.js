var Mensajes = Vue.component('tablaMensajes', {
    template: `
    <div>
        <h2>Mensajes enviados</h2>
        <br/>
        <div style="text-align: right;">
            <el-button type="primary" icon="el-icon-plus" v-on:click="crear">Nuevo</el-button>
        </div>

        <el-table v-bind:data="store.state.mensajes" style="width: 100%">
            <el-table-column prop="id_sms" label="#" width="50"></el-table-column>
            <el-table-column prop="alias_contacto" label="Destinatario" width="250"></el-table-column>
            <el-table-column label="Fecha" width="200">
                <template slot-scope="scope">
                    {{store.state.mensajes[scope.$index].envio | date-format}}
                </template>
            </el-table-column>
            <el-table-column label="Estado" width="100">
                <template slot-scope="scope">
                    {{store.state.mensajes[scope.$index].estado == 'ok' ? 'Exito' : 'Error'}}
                </template>            
            </el-table-column>
            <el-table-column label="Mensaje" width="400">
                <template slot-scope="scope">
                    <span class="columna-mensaje">
                        {{store.state.mensajes[scope.$index].mensaje}}
                    </span>
                </template>
            </el-table-column>
            <el-table-column width="100">
                <template slot-scope="scope">
                    <el-button v-on:click="verDetalle(scope.$index)" type="text" size="small">Ver detalle</el-button>
                </template>
            </el-table-column>
        </el-table>

        <detalle-mensaje v-if="dialogData.visible" v-bind:data="dialogData"></detalle-mensaje>
    </div>
    `,
    data() {
        return {
            dialogData: { visible: false }
        }
    },
    methods: {
        verDetalle(index) {
            var mensaje = store.state.mensajes[index];
            this.dialogData.mensaje = mensaje;
            this.dialogData.visible = true;
        },
        crear() {
            store.commit('crearMensaje');
        },
        listar() {
            var ref = this;
            mensajesService.listarMensajes()
                .then(function (mensajes) {
                    store.commit('setMensajes', mensajes);
                }).catch(function (error) {
                    ref.$notify({
                        title: 'Error',
                        message: 'Ocurrió un error al consultar los mensajes',
                        type: 'error'
                    });
                });
        }
    },
    mounted() {
        if (!store.state.mensajes) {
            this.listar();
        }
    }
});