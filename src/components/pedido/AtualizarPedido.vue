<template>
    <div id="primeiro">
        <h3>Atualizar Pedido</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela"> 
                <div>
                    <label class="form-label">ID</label>
                    <input type="text" disabled v-model="pedidos.id" class="form-control"> 
                </div>
                <div>
                    <label class="form-label">ID do vendedor</label>
                    <input type="text" required v-model="pedidos.vendedorId" class="form-control" placeholder="Nome"> 
                </div>
                <div>
                    <label class="form-label">ID do Cliente</label>
                    <input type="text" required v-model="pedidos.clienteId" class="form-control" placeholder="Login"> 
                </div>
                <div>
                    <label class="form-label">Valor Total</label>
                    <input type="password" disabled v-model="pedidos.senha" class="form-control">
                </div>
                <button class="btn btn-success" id="btnCadastro" v-on:click="atualizarPedido">Atualizar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import PedidoDataService from '../../services/PedidoDataService';

    export default {
        name: 'AtualizarPedido',
        data() {
            return {
                pedidos: { }
            }
        },
        methods: {

            obterPedido(id) {
                PedidoDataService.obterPorId(id)
                    .then((response) => {
                        this.pedidos = response.data
                    });
            },

            atualizarPedido() {
                PedidoDataService.atualizar(this.pedidos.id, this.pedidos)
                        .then(() => {
                            this.$router.push('listar');
                        });                       
            }

        },
        mounted() {
            this.obterPedido(this.$route.params.id);
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