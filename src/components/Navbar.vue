<template>
  <nav class="navbar navbar-expand-lg navbar-custom">
    <div class="container-fluid">
      <!-- Logo o Nome del Brand -->
      <router-link class="navbar-brand" to="/">
        <img src="../assets/img/Logo_Trasp.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span class="brand-name">
          <span class="brand-resil">Resil</span><span class="brand-race">Race</span>
        </span>
      </router-link>
      <!-- Bottone del menu per dispositivi mobili -->
      <button
        class="navbar-toggler toggler-custom"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Menu di navigazione -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Allineamento destro -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/registrazione">Registrazione</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/sondaggi">Sondaggi</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/elenco-gare">Elenco Gare</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mesi
            </a>
            <ul class="dropdown-menu dropdown-custom" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/1`">
                  Gennaio
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/2`">
                  Febbraio
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/3`">
                  Marzo
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/4`">
                  Aprile
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/5`">
                  Maggio
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/6`">
                  Giugno
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/7`">
                  Luglio
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/8`">
                  Agosto
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/9`">
                  Settembre
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/10`">
                  Ottobre
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/11`">
                  Novembre
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="`/gare-mese/12`">
                  Dicembre
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar background color */
.navbar-custom {
  background-color: #cfe6ff;
  display: flex;
  justify-content: center; /* Centra gli elementi orizzontalmente */
  align-items: center; /* Centra gli elementi verticalmente */
}

/* Brand styling */
.brand-name {
  font-family: 'Wasraiders', sans-serif;
  font-size: 1.5rem;
}

.brand-resil {
  font-weight: bold;
  color: #473dc6;
}

.brand-race {
  font-weight: normal;
  color: #595ce2;
}

/* Toggler button */
.toggler-custom {
  border: 2px solid #595ce2;
  background-color: #cfe6ff;
}

/* Dropdown menu */
.dropdown-custom {
  background-color: #595ce2;
}

/* Dropdown items */
.dropdown-item {
  color: #ffffff;
}

.dropdown-item:hover {
  background-color: #473dc6;
  color: #ffffff;
}
</style>
