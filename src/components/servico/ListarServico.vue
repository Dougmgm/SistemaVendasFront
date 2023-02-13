<template>
    <div id="primeiro">
        <h3>Listagem de serviços</h3>
        <div class="col-12"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped" id="tabela">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(servico, index) in servico" :key="index">
                        <td>{{ servico.id }}</td>
                        <td>{{ servico.nome }}</td>
                        <td>{{ servico.descricao }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarServico(servico.id)">Editar</button>
                            <span> - </span>
                            <button class="btn btn-danger" @click="excluirServico(servico)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ServicoDataService from '../../services/ServicoDataService';

export default {
    name: 'ListarServico',
    data() {
        return {
            servico: []
        }
    },
    methods: {
        obterServico() {
            ServicoDataService.listar()
                .then(response => {
                    this.servico = response.data;
                })
        },
        editarServico(id) { //método para editar
            this.$router.push('/servico/' + id)
        },
        async excluirServico(servico) {
            if (confirm(`Tem certeza que deseja excluir o serviço ${servico.nome}?`)) //Confirm exibe mensagem de "sim ou não" para pode deletar o vendedor
            {
                await ServicoDataService.deletar(servico.id); //literalmente aguarda o resultado da API para permitir a pagina mudar sozinha
                this.obterServico() //chama novamente para atualizar a pagina e não exibir o vendedor atualizado
            }
        }
    },
    mounted() {
        this.obterServico();
    }
}   
</script>

<style scoped>

    #primeiro {
        margin: auto;
        width: 60%;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
    }
    
    #tabela{
        margin: auto;
        width: 100%;
        padding: 10px;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
        text-align: center; 
    }
    
    th, td {
        text-align: center;
        padding: 16px;
    }

</style>