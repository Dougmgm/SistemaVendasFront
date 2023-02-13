<template>
    <div id="primeiro">
        <h3 id="teste">Listagem de vendedores</h3>
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
                    <tr v-for="(vendedor, index) in vendedores" :key="index">
                        <td>{{ vendedor.id }}</td>
                        <td>{{ vendedor.name }}</td>
                        <td>{{ vendedor.login }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarVendedor(vendedor.id)">Editar</button> <!--redirecionamento para "PUT" colocado-->
                            <span> - </span>
                            <button class="btn btn-danger" @click="excluirVendedor(vendedor)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import VendedorDataService from '../../services/VendedorDataService';

export default {
    name: 'ListarVendedor',
    data() {
        return {
            vendedores: []
        }
    },
    methods: {
        obterVendedores() {
            VendedorDataService.listar()
                .then(response => { 
                    this.vendedores = response.data;
                })
        },
        editarVendedor(id) { //método para editar
            this.$router.push('/vendedor/' + id)
        },
        async excluirVendedor(vendedor) {
            if (confirm(`Tem certeza que deseja excluir o vendedor ${vendedor.name}?`)) //Confirm exibe mensagem de "sim ou não" para pode deletar o vendedor
            {
                await VendedorDataService.deletar(vendedor.id); //literalmente aguarda o resultado da API para permitir a pagina mudar sozinha
                this.obterVendedores() //chama novamente para atualizar a pagina e não exibir o vendedor atualizado
            }
        }
    },
    mounted() {
        this.obterVendedores();
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