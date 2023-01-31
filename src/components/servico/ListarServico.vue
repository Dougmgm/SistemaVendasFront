<template>
    <div>
        <h3>Listagem de serviços</h3>
        <div class="col-7"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(servico, index) in servicos" :key="index">
                        <td>{{ servico.nome }}</td>
                        <td>{{ servico.descricao }}</td>
                        <td>
                            <button class="btn btn-success">Editar</button>
                            <button class="btn btn-danger">Excluir</button>
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
            servicos: []
        }
    },
    methods: {
        obterServico() {
            ServicoDataService.listar()
                .then(response => {
                    this.servicos = response.data;
                })
        }
    },
    mounted() {
        this.obterServico();
    }
}   
</script>
