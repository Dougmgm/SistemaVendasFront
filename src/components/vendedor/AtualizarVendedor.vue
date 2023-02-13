<template>
    <div id="primeiro">
        <h3>Atualizar Vendedor</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">Id</label>
                    <input type="text" disabled v-model="vendedor.id" class="form-control"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
                </div>
                <div>
                    <label class="form-label">Nome</label>
                    <input type="text" required v-model="vendedor.name" class="form-control" placeholder="Nome"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" readonly v-model="vendedor.login" class="form-control" placeholder="Login"> <!--required não está funcionando-->
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="vendedor.senha" class="form-control">
                </div>
                <button class="btn btn-success" id="btnCadastro" v-on:click="atualizarVendedor">Atualizar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import VendedorDataService from '../../services/VendedorDataService';

    export default {
        name: 'AtualizarVendedor',
        data() {
            return {
                vendedor: { }
            }
        },
        methods: {

            obterVendedor(id) {
                VendedorDataService.obterPorId(id)
                    .then((response) => {
                        this.vendedor = response.data
                    });
            },

            atualizarVendedor() {  //metódo para cadastro do vendedor
                VendedorDataService.atualizar(this.vendedor.id, this.vendedor) //chama o método de cadastro do data service
                        .then(() => {
                            this.$router.push('listar');
                        });                       
            }

        },
        mounted() {
            this.obterVendedor(this.$route.params.id);
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