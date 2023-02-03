<template>
    <div id="primeiro">
        <h3>Novo Pedido</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">Data</label>
                    <input type="text" disabled v-model="buscarData" class="form-control" id="data">
                </div>
                <div>
                    <label class="form-label">ID do vendedor</label>
                    <input type="text" required v-model="pedidos.vendedorId" class="form-control">
                </div>
                <div>
                    <label class="form-label">ID do cliente</label>
                    <input type="text" required v-model="pedidos.clienteId" class="form-control">
                </div>
                <button class="btn btn-success" id="btnCadastro" @click="cadastrarPedido">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import PedidoDataService from '../../services/PedidoDataService';

    export default {
        name: 'CadastrarPedido',
        data() {
            return {
                pedidos: { 
                    data: '',
                    vendedorId: '',
                    clienteId: ''
                }
            }
        },
        methods: {
            cadastrarPedido() {  
                console.log("teste")
                
                PedidoDataService.cadastrar(this.pedidos) //chama o método de cadastro do data service
                        .then(() => {
                            this.$router.push('listar');
                        });                       
            },
           dataAtual() {
                this.buscarData = new Date().toISOString().split('T')[0];
                console.log(this.buscarData)
            }
        },
        created() {
            this.dataAtual()
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
        border: 3px solid #73AD21;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }

    #tabela{
        margin: auto;
        width: 80%;
        padding: 10px;
    }
</style>