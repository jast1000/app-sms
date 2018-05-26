var Bienvenida = Vue.component('bienvenida', {
    props: ['data'],
    template: `
    <div class="contenedor-pagina bienvenida">
        <h1>Aplicación de envío de mensajes SMS</h1>
        <img src="./img/sms.png">
    </div>
    `
});