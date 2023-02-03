<template>
    <div id="primeiro">
        <h3>Novo Servico</h3>
        <div class="form">
            <hr />
            <div class="col-9" id="tabela">
                <div>
                    <label class="form-label">Nome</label>
                    <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome"> <!--"v-model" para atrelar o dado digitado ao objeto de vendedor-->
                </div>
                <div>
                    <label class="form-label">Descrição</label>
                    <input type="text" required v-model="servico.descricao" class="form-control" placeholder="Descrição"> 
                </div>
                <button class="btn btn-success" id="btnCadastro" @click="atualizarServico">Atualizar</button>
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
                servico: { }
            }
        },
        methods: {
            obterServico(id) {
                ServicoDataService.obterPorId(id)
                    .then((response) => {
                        this.servico = response.data
                    });
            },
            atualizarServico() { 
                console.log("teste")

                ServicoDataService.atualizar(this.servico.id, this.servico) //chama o método de cadastro do data service
                    .then(() => {
                        this.$router.push('listar');
                    });
            }
        },
        mounted() {
            this.obterServico(this.$route.params.id);
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