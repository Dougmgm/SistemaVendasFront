import { createWebHashHistory, createRouter } from "vue-router";
import TheWelcome from './components/TheWelcome.vue'

import ListarVendedor from './components/vendedor/ListarVendedor.vue';
import CadastrarVendedor from './components/vendedor/CadastrarVendedor.vue'
import AtualizarVendedor from './components/vendedor/AtualizarVendedor.vue'

import ListarCliente from './components/cliente/ListarCliente.vue'
import CadastrarCliente from './components/cliente/CadastrarCliente.vue'
import AtualizarCliente from './components/cliente/AtualizarCliente.vue'

import ListarServico from './components/servico/ListarServico.vue'
import CadastrarServico from './components/servico/CadastrarServico.vue'
import AtualizarServico from './components/servico/AtualizarServico.vue'

import ListarPedido from './components/pedido/ListarPedido.vue'
import CadastrarPedido from './components/pedido/CadastrarPedido.vue'
import AtualizarPedido from './components/pedido/AtualizarPedido.vue'

import ListarItemPedido from './components/itemPedido/ListarItemPedido.vue'
import CadastrarItemPedido from './components/itemPedido/CadastrarItemPedido.vue'
import AtualizarItemPedido from './components/itemPedido/AtualizarItemPedido.vue'
import ListarPorPedidoId from './components/itemPedido/ListarPorPedidoId.vue'

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

    {
        path:"/cliente/:id",
        component: AtualizarCliente
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

    {
        path:"/servico/:id",
        component: AtualizarServico
    },

//----------------------------------------------------------pedido---------------------------------------------------------

    {
        path:"/pedido/listar",
        component: ListarPedido
    },

    {
        path:"/pedido/cadastrar",
        component: CadastrarPedido
    },

    {
        path:"/pedido/:id",
        component: AtualizarPedido
    },

    {
        path: "/pedido/ListarPorPedidoId/",
        component: ListarPorPedidoId
    },
    
//----------------------------------------------------------item pedido------------------------------------------------------

    {
        path:"/itemPedido/listar",
        component: ListarItemPedido
    },

   {
        path:"/itemPedido/cadastrar",
        component: CadastrarItemPedido
    },

    {
        path:"/itemPedido/:id",
        component: AtualizarItemPedido
    },

    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router