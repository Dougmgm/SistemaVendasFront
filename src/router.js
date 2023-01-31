import { createWebHashHistory, createRouter } from "vue-router";
import ListarVendedor from './components/vendedor/ListarVendedor.vue';
import TheWelcome from './components/TheWelcome.vue'
import CadastrarVendedor from './components/vendedor/CadastrarVendedor.vue'
import AtualizarVendedor from './components/vendedor/AtualizarVendedor.vue'

import ListarCliente from './components/cliente/ListarCliente.vue'
import CadastrarCliente from './components/cliente/CadastrarCliente.vue'

import ListarServico from './components/servico/ListarServico.vue'
import CadastrarServico from './components/servico/CadastrarServico.vue'




const routes = [
    {
        path:"/", //caminho raiz
        component: TheWelcome
    }, 

//----------------------------------------------------------vendedor---------------------------------------------------------


    {
        path:"/vendedor/listar",
        component: ListarVendedor
    },

    {
        path:"/vendedor/cadastrar",
        component: CadastrarVendedor
    },

    {
        path:"/vendedor/:id",
        component: AtualizarVendedor
    },

//----------------------------------------------------------cliente---------------------------------------------------------


    {
        path:"/cliente/listar",
        component: ListarCliente
    },

    {
        path:"/cliente/cadastrar",
        component: CadastrarCliente
    },

//----------------------------------------------------------serviço---------------------------------------------------------
    {
        path:"/servico/listar",
        component: ListarServico
    },

    {
        path:"/servico/cadastrar",
        component: CadastrarServico
    },


];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router