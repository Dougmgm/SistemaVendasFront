<template>
    <div id="primeiro">
        <h3>Novo Pedido</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">Data</label>
                    <input type="text" disabled :value="obterData(dataImput)" class="form-control" id="data">
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
            dataImput: new Date(),
            pedidos: {
                date: new Date().toISOString(),
                vendedorId: '',
                clienteId: ''
            }
        }
    },
    methods: {
        cadastrarPedido() {
            var data ={
                date: this.pedidos.date,
                vendedorId: this.pedidos.vendedorId,
                clienteId: this.pedidos.clienteId
            };
            PedidoDataService.cadastrar(data).then(() => {
                    this.$router.push('listar');
                });
        },
        obterData(data) {
            let dataPedido = data;
            return dataPedido.toLocaleString();
        }
    }
}
</script>

<style scoped>
.form {
    padding: 1%
}

#btnCadastro {
    margin-top: 2%
}

#primeiro {
    margin: auto;
    margin-bottom: 8%;
    width: 40%;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

#tabela {
    margin: auto;
    width: 80%;
    padding: 10px;
}
</style>