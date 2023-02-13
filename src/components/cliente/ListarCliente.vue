<template>
    <div id="primeiro">
        <h3>Listagem de clientes</h3>
        <div class="col-12"> <!--"col-8" serve para ajustar o tamanho com o numero sendo o modificador-->
            <hr/>
            <table class="table table-striped" id="tabela">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Login</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cliente, index) in clientes" :key="index">
                        <td>{{ cliente.id }}</td>
                        <td>{{ cliente.nome }}</td>
                        <td>{{ cliente.login }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarCliente(cliente.id)">Editar</button>
                            <span> - </span>
                            <button class="btn btn-danger" @click="excluirCliente(cliente)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ClienteDataService from '../../services/ClienteDataService';

export default {
    name: 'ListarCliente',
    data() {
        return {
            clientes: []
        }
    },
    methods: {
        obterClientes() {
            ClienteDataService.listar()
                .then(response => {
                    this.clientes = response.data;
                })
        },
        editarCliente(id) {
            this.$router.push('/cliente/' + id)
        },
        async excluirCliente(cliente) {
            if (confirm(`Tem certeza que deseja excluir o cliente ${cliente.nome}?`)) //Confirm exibe mensagem de "sim ou não" para pode deletar o vendedor
            {
                await ClienteDataService.deletar(cliente.id); //literalmente aguarda o resultado da API para permitir a pagina mudar sozinha
                this.obterClientes() //chama novamente para atualizar a pagina e não exibir o vendedor atualizado
            }
        }
    },
    mounted() {
        this.obterClientes();
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