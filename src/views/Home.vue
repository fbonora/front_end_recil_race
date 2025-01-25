<template>
  <div>
    <!-- Prima sezione con sfondo -->
    <div class="background-container first-section">
      <div class="container my-4">
        <img class="resilrace" src="../assets/img/ResilRace.png" />
        <router-link to="/elenco-gare" class="btn btn-primary btn-lg bottone"
          >Visualizza Gare</router-link
        >
      </div>
    </div>

    <!-- Seconda sezione con un'altra immagine di sfondo -->
    <div class="background-container second-section">
      <div class="container my-4">
        <h1 class="mb-4">QUESTO MESE</h1>
        <!-- Dropdown per selezionare il mese -->
        <div class="form-group mb-4">
          <label for="mese">Seleziona il mese:</label>
          <select
            id="mese"
            v-model="meseSelezionato"
            @change="fetchGare"
            class="form-control"
          >
            <option v-for="mese in mesi" :key="mese.value" :value="mese.value">
              {{ mese.label }}
            </option>
          </select>
        </div>
        <!-- Lista delle gare -->
        <div class="row">
          <div v-if="loading" class="col-12 text-center">
            <p>Caricamento in corso...</p>
          </div>
          <div
            v-for="gara in filteredGare"
            :key="gara._id"
            class="col-md-4 mb-4"
          >
            <GaraCard :gara="gara" />
          </div>
          <div
            v-if="!loading && filteredGare.length === 0"
            class="col-12 text-center"
          >
            <p>Nessuna gara trovata per il mese selezionato.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GaraCard from "@/components/GaraCard.vue";

export default {
  name: "Home",
  components: {
    GaraCard,
  },
  data() {
    return {
      meseSelezionato: 1, // Mese iniziale (Gennaio)
      filteredGare: [],
      loading: false,
      mesi: [
        { value: 1, label: "Gennaio" },
        { value: 2, label: "Febbraio" },
        { value: 3, label: "Marzo" },
        { value: 4, label: "Aprile" },
        { value: 5, label: "Maggio" },
        { value: 6, label: "Giugno" },
        { value: 7, label: "Luglio" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Settembre" },
        { value: 10, label: "Ottobre" },
        { value: 11, label: "Novembre" },
        { value: 12, label: "Dicembre" },
      ],
    };
  },
  methods: {
    async fetchGare() {
      this.loading = true;
      this.filteredGare = [];
      try {
        // Prima chiamata per ottenere la lista delle gare del mese
        const response = await axios.get(
          `http://localhost:3000/api/races/filter/month?month=${this.meseSelezionato}`
        );
        const gare = response.data;

        // Per ogni gara, recupera i dettagli completi
        const detailedGarePromises = gare.map((gara) =>
          this.fetchGaraDetails(gara.raceId)
        );

        // Attendi il completamento di tutte le chiamate
        this.filteredGare = await Promise.all(detailedGarePromises);
      } catch (error) {
        console.error("Errore nel recupero delle gare:", error);
        this.filteredGare = [];
      } finally {
        this.loading = false;
      }
    },
    async fetchGaraDetails(id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/races/${id}`
        );
        return response.data; // Dettagli completi della gara
      } catch (error) {
        console.error(`Errore nel recupero dei dettagli per la gara ${id}:`, error);
        return null; // In caso di errore, restituisci un valore nullo o fallback
      }
    },
  },
  created() {
    this.fetchGare(); // Recupera le gare all'inizializzazione del componente
  },
};
</script>

<style scoped>
/* Prima Sezione */
.first-section {
  background-image: url("../assets/img/Gaia.png"); /* Prima immagine di sfondo */
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

.bottone {
  margin-top: 10rem;
}
.first-section .container {
  text-align: center;
  color: white; /* Colore del testo per visibilità su sfondo scuro */
}

/* Seconda Sezione */
.second-section {
  background-image: url("../assets/img/sfondo1.jpg"); /* Seconda immagine di sfondo */
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
  font-family: "Bebas Neue", sans-serif;
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
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  color: #f0f0f0;
  margin-bottom: 10px;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  color: #f0f0f0;
}

/* Bottoni */
.btn {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #ffeb3b;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  color: #003366;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ff9800;
}
</style>
