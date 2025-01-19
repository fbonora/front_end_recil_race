<template>
  <div id="app">

    
    <Navbar />
    <!-- Main Content -->
    <main class="py-4 hero-bg text-white">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-center text-white py-3">
      <p class="mb-0">© 2025 Gare Ciclistiche U23. Tutti i diritti riservati.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    Navbar, // Importazione del componente Navbar
  },
};
</script>

<style>
/* Stile base per l'intera applicazione */
#app {
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
}

main {
  min-height: 80vh;
}

.hero-bg {
    background-image: url(assets/img/slider-2.png);
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>

