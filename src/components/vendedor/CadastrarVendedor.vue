<template>
    <h3>Novo Vendedor</h3>
    <div class="form">
    <hr/>
        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" required v-model="vendedor.nome" class="form-control" placeholder="Nome"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
            </div>
            <div class="mb-3">
                <label class="form-label">Login</label>
                <input type="text" required v-model="vendedor.login" class="form-control" placeholder="Login">
            </div>
            <div class="mb-3">
                <label class="form-label">Senha</label>
                <input type="password" required v-model="vendedor.senha" class="form-control" placeholder="">
            </div>
            <button class="btn btn-success" id="btnCadastro">Cadastrar</button>
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
        mothods: {
            cadastrarVendedor() { //metódo para cadastro do vendedor
                var data = {
                    nome: this.vendedor.nome,
                    login: this.vendedor.login,
                    senha: this.vendedor.senha
                };
                VendedorDataService.cadastrar(data) //chama o método de cadastro do data service
                        .then(() => {
                            this.$router.push('listar')
                        })
            }
        }
    }
</script>

<style scoped>
    .form{
        padding: 1%
    }

    #btnCadastro{
        margin-top: 3%
    }
</style>