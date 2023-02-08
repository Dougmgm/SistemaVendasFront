<template>
    <div id="primeiro">
        <h3>Listagem de pedidos</h3>
        <div class="col-12"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped" id="tabela">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Data</th>
                        <th scope="col">ID do vendedor</th>
                        <th scope="col">ID do cliente</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(pedido, index) in pedidos" :key="index">
                        <td>{{ pedido.id }}</td>
                        <td>{{ obterData(pedido.date) }}</td>
                        <td>{{ pedido.vendedorId }}</td>
                        <td>{{ pedido.clienteId }}</td>
                        <td>valor aqui</td>    
                        <td>
                            <button class="btn btn-success" @click="editarPedido(pedido.id)">Editar</button> <!--redirecionamento para "PUT" colocado-->
                            <span> - </span>
                            <button class="btn btn-danger" @click="excluirPedido(pedido)">Excluir</button>
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
            pedidos: [],
            itemPedido: []
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
        },
        obterData(data){
            let dataPedido = new Date(data);
            return dataPedido.toLocaleString();
        }
    },
    mounted() {
        this.obterPedido();
    }
}   
</script>

<style scoped>
    #primeiro {
        margin: auto;
        width: 60%;
        /* border: 3px solid #73AD21; */
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    #tabela{
        margin: auto;
        width: 100%;
        /* border: 3px solid #73AD21; */
        padding: 10px;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd; 
    }
    
    th, td {
        text-align: left;
        padding: 16px;
    }
</style>