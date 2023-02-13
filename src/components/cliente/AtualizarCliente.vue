<template>
    <div id="primeiro">
        <h3>Atualizar Cliente</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">Id</label>
                    <input type="text" disabled v-model="cliente.id" class="form-control"> 
                </div>
                <div>
                    <label class="form-label">Nome</label>
                    <input type="text" required v-model="cliente.nome" class="form-control" placeholder="Nome"> 
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" readonly v-model="cliente.login" class="form-control" placeholder="Login"> <!--required não está funcionando-->
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="cliente.senha" class="form-control">
                </div>
                <button class="btn btn-success" id="btnCadastro" v-on:click="atualizarCliente">Atualizar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ClienteDataService from '../../services/ClienteDataService';

    export default {
        name: 'AtualizarCliente',
        data() {
            return {
                cliente: { }
            }
        },
        methods: {

            obterCliente(id) {
                ClienteDataService.obterPorId(id)
                    .then((response) => {
                        this.cliente = response.data
                    });
            },

            atualizarCliente() {  
                ClienteDataService.atualizar(this.cliente.id, this.cliente) //chama o método de cadastro do data service
                        .then(() => {
                            this.$router.push('listar');
                        });                       
            }

        },
        mounted() {
            this.obterCliente(this.$route.params.id);
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