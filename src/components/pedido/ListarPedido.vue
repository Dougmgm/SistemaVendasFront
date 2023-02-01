<template>
    <div>
        <h3>Listagem de pedidos</h3>
        <div class="col-7"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Data</th>
                        <th scope="col">ID do vendedor</th>
                        <th scope="col">ID do cliente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pedidos, index) in pedidos" :key="index">
                        <td>{{ pedidos.id }}</td>
                        <td>{{ pedidos.date }}</td>
                        <td>{{ pedidos.vendedorId }}</td>
                        <td>{{ pedidos.clienteId }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarPedido(pedidos.id)">Editar</button> <!--redirecionamento para "PUT" colocado-->
                            <button class="btn btn-danger" @click="excluirPedido(pedidos)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import PedidoDataService from '../../services/PedidoDataService';

export default {
    name: 'ListarPedidos',
    data() {
        return {
            pedidos: []
        }
    },
    methods: {
        obterPedido() {
            PedidoDataService.listar()
                .then(response => { 
                    this.pedidos = response.data;
                })
        },
        editarPedido(id) {
            this.$router.push('/pedido/' + id)
        },
        async excluirPedido(pedidos) {
            if (confirm(`Tem certeza que deseja excluir o pedido ${pedidos.id}?`))
            {
                await PedidoDataService.deletar(pedidos.id); 
                this.obterPedido() 
            }
        }
    },
    mounted() {
        this.obterPedido();
    }
}   
</script>
