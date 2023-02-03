<template>
    <div id="primeiro">
        <h3>Novo Item Pedido</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">ID do Pedido</label>
                    <input type="text" required v-model="itemPedido.pedidoId" class="form-control" placeholder="ID do Pedido"> 
                </div>
                <div>
                    <label class="form-label">ID do Serviço</label>
                    <input type="text" required v-model="itemPedido.servicoId" class="form-control" placeholder="ID do Serviço">
                </div>
                <div>
                    <label class="form-label">Quantidade</label>
                    <input type="number" required v-model="itemPedido.quantidade" class="form-control">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type=number step=0.01 required v-model="itemPedido.valor" class="form-control">
                </div>

                <button class="btn btn-success" id="btnCadastro" v-on:click="atualizarItemPedido">Atualizar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemPedidoDataService from '../../services/ItemPedidoDataService';

    export default {
        name: 'AtualizarItemPedido',
        data() {
            return {
                itemPedido: { }
            }
        },
        methods: {

            obterItemPedido(id) {
                ItemPedidoDataService.obterPorId(id)
                    .then((response) => {
                        this.itemPedido = response.data
                    });
            },

            atualizarItemPedido() { 
                ItemPedidoDataService.atualizar(this.itemPedido.id, this.itemPedido)
                        .then(() => {
                            this.$router.push('listar');
                        });                       
            }

        },
        mounted() {
            this.obterItemPedido(this.$route.params.id);
        }
    }
</script>

<style scoped>
    .form{
        padding: 1%
    }

    #btnCadastro{
        margin-top: 2%
    }

    #primeiro {
        margin: auto;
        width: 40%;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }

    #tabela{
        margin: auto;
        width: 80%;
        padding: 10px;
    }
</style>