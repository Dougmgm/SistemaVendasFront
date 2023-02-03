<template>
    <div id="primeiro">
        <h3>Listagem de vendedores</h3>
        <div class="col-12"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped" id="tabela">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">ID do pedido</th>
                        <th scope="col">ID do serviço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(itemPedido, index) in itemPedidos" :key="index">
                        <td>{{ itemPedido.id }}</td>
                        <td>{{ itemPedido.pedidoId }}</td>
                        <td>{{ itemPedido.servicoId }}</td>
                        <td>{{ itemPedido.quantidade }}</td>
                        <td>{{ itemPedido.valor }}</td>
                        <td onchange="setTwoNumberDecimal">R$ {{itemPedido.quantidade * itemPedido.valor}}</td>
                        <td>
                            <button class="btn btn-success" @click="editarItemPedido(itemPedido.id)">Editar</button> <!--redirecionamento para "PUT" colocado-->
                            <button class="btn btn-danger" @click="excluirItemPedido(itemPedido)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ItemPedidoDataService from '../../services/ItemPedidoDataService';

export default {
    name: 'ListarItemPedido',
    data() {
        return {
            itemPedidos: []
        }
    },
    methods: {
        obterItemPedido() {
            ItemPedidoDataService.listar()
                .then(response => { 
                    this.itemPedidos = response.data;
                })
        },
        editarItemPedido(id) { //método para editar
            this.$router.push('/itemPedido/' + id)
        },
        async excluirItemPedido(itemPedido) {
            if (confirm(`Tem certeza que deseja excluir o item do pedido ${itemPedido.id}?`)) 
            {
                await ItemPedidoDataService.deletar(itemPedido.id);
                this.obterItemPedido() 
            }
        }
    },
    mounted() {
        this.obterItemPedido();
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