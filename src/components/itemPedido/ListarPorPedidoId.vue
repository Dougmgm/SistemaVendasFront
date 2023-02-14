<template>
    <div id="primeiro">
        <h3>Listagem de itens do pedido</h3>
        <div class="col-12"> <!-- "col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            
            <hr />

            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username"
                        aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="idBusca">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"
                            @click="listarPorId(this.idBusca)">Procurar</button>
                    </div>
                </div>
            </div>

            <hr />

            <table class="table table-striped" id="tabela" v-if="idColocado">
                <thead>
                    <tr>
                        <th scope="col">ID do pedido</th>
                        <th scope="col">ID item do pedido</th>
                        <th scope="col">ID do serviço</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(itemPedido, index) in itemPedidos" :key="{ index }">
                        <td>{{ itemPedido.pedidoId }}</td>
                        <td>{{ itemPedido.id }}</td>
                        <td>{{ itemPedido.servicoId }}</td>
                        <td>{{ itemPedido.quantidade }}</td>
                        <td>{{ itemPedido.valor }}</td>
                        <td onchange="setTwoNumberDecimal">R$ {{ itemPedido.quantidade * itemPedido.valor }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarItemPedido(itemPedido.id)">Editar</button>
                            <!--redirecionamento para "PUT" colocado-->
                            <span> - </span>
                            <button class="btn btn-danger" @click="excluirItemPedido(itemPedido)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
                <div id="soma">Valor total: R$ {{ soma }}</div>
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
            itemPedidos: [],
            idColocado: false,
            idBusca: '',
            soma: '500'
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
            if (confirm(`Tem certeza que deseja excluir o item do pedido ${itemPedido.id}?`)) {
                await ItemPedidoDataService.deletar(itemPedido.id);
                this.obterItemPedido()
            }
        },

        listarPorId(pedidoId) {
            if (pedidoId == '') {
                this.idColocado = false;
                alert("Por favor inserir um id válido")
                return;
            }

            ItemPedidoDataService.listarPorId(pedidoId)
                .then(response => {
                    this.itemPedidos = response.data;
                    this.idColocado = true;
                })
        },

        valorTotal() {
            soma = (Number(soma) + (Number(this.itemPedidos.valor) * Number(this.itemPedidos.quantidade))).toFixed(2);
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
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

#tabela {
    margin: auto;
    width: 100%;
    padding: 10px;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}

th,
td {
    text-align: center;
    padding: 16px;
}

#soma {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>    