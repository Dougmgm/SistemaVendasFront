<template>
    <div id="primeiro">
        <h3>Novo Vendedor</h3>
        <div class="form">
            <hr />
            <div class="col-7" id="tabela">
                <div>
                    <label class="form-label">Nome</label>
                    <input type="text" required v-model="vendedor.name" class="form-control" placeholder="Nome"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" required v-model="vendedor.login" class="form-control" placeholder="Login"> <!--required não está funcionando-->
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="vendedor.senha" class="form-control">
                </div>
                <button class="btn btn-success" id="btnCadastro" v-on:click="cadastrarVendedor">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import VendedorDataService from '../../services/VendedorDataService';

    export default {
        name: 'CadastrarVendedor',
        data() {
            return {
                vendedor: { //criando o objeto que irá dar o nome, login e senha
                    nome: '',
                    login: '',
                    senha: ''
                }
            }
        },
        methods: {
            cadastrarVendedor() {  //metódo para cadastro do vendedor
                if(this.vendedor.name == ''| this.vendedor.login == '' | this.vendedor.senha == ''){
                    alert("Favor preencher todos os dados")
                } else {
                    VendedorDataService.cadastrar(this.vendedor) //chama o método de cadastro do data service
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
        margin-bottom: 20%;
        width: 80%;
        padding: 10px;
    }
</style>