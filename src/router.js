import { createWebHashHistory, createRouter } from "vue-router";
import ListarVendedor from './components/vendedor/ListarVendedor.vue';
import TheWelcome from './components/TheWelcome.vue'


const routes = [
    {
        path:"/", //caminho raiz
        component: TheWelcome
    }, 

    {
        path:"/vendedor/listar",
        component: ListarVendedor
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router