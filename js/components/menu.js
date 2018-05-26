var Menu = Vue.component('appMenu', {
    template: `
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="bienvenida">Inicio</el-menu-item>
        <el-menu-item index="mensajes">Mensajes</el-menu-item>
        <el-menu-item index="contactos">Contactos</el-menu-item>
    </el-menu>
    `,
    data() {
        return {
            activeIndex: 'bienvenida'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key);
            router.replace('/' + key);
        }
    }
});