<template>
  <!-- Prima sezione con sfondo -->
  <div class="background-container first-section">
    <div class="container my-4">
        <img class="resilrace" src="../assets/img/ResilRace.png">
        <router-link to="/elenco-gare" class="btn btn-primary btn-lg bottone">Visualizza Gare</router-link>
    </div>
  </div>

  <!-- Seconda sezione con un'altra immagine di sfondo -->
  <div class="background-container second-section">
    <div class="container my-4">
        <h1 class="mb-4">QUESTO MESE</h1>
             <!-- Lista delle gare -->
        <div class="row">
          <div
            v-for="gara in filteredGare"
            :key="gara.id"
            class="col-md-4 mb-4"
          >
            <GaraCard :gara="gara" />
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Prima Sezione */
.first-section {
  background-image: url('../assets/img/Gaia.png');  /* Prima immagine di sfondo */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 80vh; /* Occupa tutta l'altezza della finestra */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resilrace {
  width: 95%;
}

.bottone{
  margin-top: 10rem;
}
.first-section .container {
  text-align: center;
  color: white; /* Colore del testo per visibilità su sfondo scuro */
}

/* Seconda Sezione */
.second-section {
  background-image: url('../assets/img/sfondo1.jpg');  /* Seconda immagine di sfondo */
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
}

.second-section .container {
  text-align: center;
  color: white;
}

/* Titoli e Testi */
h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: #003366;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #f0f0f0;
  margin-bottom: 10px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: #f0f0f0;
}

/* Bottoni */
.btn {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #FFEB3B;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  color: #003366;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #FF9800;
}
</style>
