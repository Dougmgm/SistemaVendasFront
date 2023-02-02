<script setup>

</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<template>
  <div class="navbar">
    <a href="/">Home</a>
    <div class="dropdown">
      <button class="dropbtn">Vendedor
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/vendedor/listar">Listar vendedor</router-link>
        <router-link to="/vendedor/cadastrar">Cadastrar vendedor</router-link>
      </div>
    </div>
    
    <div class="dropdown">
      <button class="dropbtn">Cliente
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/cliente/listar">Listar cliente</router-link>
        <router-link to="/cliente/cadastrar">Cadastrar cliente</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Serviços
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/servico/listar">Listar serviços</router-link>
        <router-link to="/servico/cadastrar">Cadastrar serviços</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Pedidos
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/pedido/listar">Listar pedidos</router-link>
        <router-link to="/pedido/cadastrar">Cadastrar pedidos</router-link>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">Item dos Pedidos
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <router-link to="/servico/listar">Listar itens</router-link>
        <router-link to="/servico/cadastrar">Cadastrar itens</router-link>
      </div>
    </div>

  </div>
  <router-view />
</template>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
