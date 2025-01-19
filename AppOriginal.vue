<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Gare Ciclistiche U23</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/registrazione" class="nav-link" active-class="active">Registrazione</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/elenco-gare" class="nav-link" active-class="active">Elenco Gare</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Calendario Gare
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li class="nav-item"><router-link class="nav-link" active-class="active" to="/elenco-gare">Febbraio</router-link></li>
                    <li><a class="dropdown-item" href="#">Marzo</a></li>
                    <li><a class="dropdown-item" href="#">Aprile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active">Help</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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
export default {
  name: "App",
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

