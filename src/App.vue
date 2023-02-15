<template>
  <NavBar />
  <Footer />
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import TheWelcome from './components/TheWelcome.vue';
  import Footer from './components/Footer.vue';


  export default {
    name: 'App',
    components: {
    TheWelcome,
    NavBar,
    Footer
    }
  }
  
</script>

