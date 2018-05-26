Vue.component('detalleMensaje', {
    props: ['data'],
    template: `
    <el-dialog
    title="Detalle"
    :visible="data.visible"
    :show-close="false"
    width="30%">
        <strong>Destinatario: </strong>{{data.mensaje.contacto}}
        <br />
        <strong>Envío: </strong>{{data.mensaje.envio | date-format}}
        <br />
        <strong>Mensaje: </strong> {{data.mensaje.mensaje}}        
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" v-on:click="close">Aceptar</el-button>
        </span>
    </el-dialog>
    `,
    data() {
        return {
            data: {}
        };
    },
    methods: {
        close() {
            this.data.visible = false;
        },
        handleClose(done) {
            console.log(done);
        }
    }
});