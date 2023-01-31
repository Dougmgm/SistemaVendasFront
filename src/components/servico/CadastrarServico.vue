<template>
    <div>
        <h3>Novo Servico</h3>
        <div class="form">
            <hr />
            <div class="col-4">
                <div>
                    <label class="form-label">Nome</label>
                    <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
                </div>
                <div>
                    <label class="form-label">Descrição</label>
                    <input type="text" required v-model="servico.descricao" class="form-control" placeholder="Descrição"> 
                </div>
                <button class="btn btn-success" id="btnCadastro" v-on:click="cadastrarServico">Cadastrar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ServicoDataService from '../../services/ServicoDataService';

    export default {
        name: 'CadastrarServico',
        data() {
            return {
                servico: { //criando o objeto que irá dar o nome, login e senha
                    nome: '',
                    descricao: ''
                }
            }
        },
        methods: {
            cadastrarServico() {  //metódo para cadastro do vendedor
                console.log("teste")

                ServicoDataService.cadastrar(this.servico) //chama o método de cadastro do data service
                    .then(() => {
                        this.$router.push('listar');
                    });
            }
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
</style>