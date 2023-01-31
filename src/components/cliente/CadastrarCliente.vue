<template>
    <h3>Novo Cliente</h3>
    <div class="form">
    <hr/>
        <div class="col-4">
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input type="text" class="form-control" placeholder="Nome">
            </div>
            <div class="mb-3">
                <label class="form-label">Login</label>
                <input type="text" class="form-control" placeholder="Login">
            </div>
            <div class="mb-3">
                <label class="form-label">Senha</label>
                <input type="password" class="form-control" placeholder="">
            </div>
            <button class="btn btn-success" id="btnCadastro">Cadastrar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CadastrarCliente'
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