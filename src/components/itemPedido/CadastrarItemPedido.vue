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
                    <input type="number" min="0" required v-model="itemPedido.quantidade" class="form-control">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type="number" min="0" step="0.01" required v-model="itemPedido.valor" class="form-control">
                </div>

                <button class="btn btn-success" id="btnCadastro" v-on:click="cadastrarItemPedido">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemPedidoDataService from '../../services/ItemPedidoDataService';

    export default {
        name: 'CadastrarItemPedido',
        data() {
            return {
                itemPedido: { 
                    pedidoId: '',
                    servicoId: '',
                    quantidade: '',
                    valor: ''
                }
            }
        },
        methods: {
            cadastrarItemPedido() { 
                console.log("teste")
                if(this.itemPedido.pedidoId == '' | this.itemPedido.servicoId == '' | this.itemPedido.quantidade == '' | this.itemPedido.valor == '') {
                    alert("Favor preencher todos os dados")
                } else {
                    ItemPedidoDataService.cadastrar(this.itemPedido) 
                        .then(() => {
                            this.$router.push('listar');
                        }); 
                }
            },
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
        margin-bottom: 9%;
        width: 80%;
        padding: 10px;
    }
</style>