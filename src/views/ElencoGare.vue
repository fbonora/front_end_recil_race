<template>
  <div class="container">
    <h1 class="text-center">Elenco Gare</h1>

    <!-- Messaggi di caricamento ed errore -->
    <div v-if="loading" class="text-center">
      <p>Caricamento in corso...</p>
    </div>
    <div v-else-if="error" class="alert alert-danger text-center">
      {{ error }}
    </div>

    <!-- Filtri -->
    <div v-else class="filters mb-4">
      <div class="row">
        <div class="col-md-4">
          <label for="nome" class="form-label">Nome gara</label>
          <input
            v-model="filters.name"
            type="text"
            class="form-control"
            id="nome"
            placeholder="Cerca per nome"
          />
        </div>
        <div class="col-md-4">
          <label for="kmRange" class="form-label">Distanza (km)</label>
          <div class="input-group">
            <input
              v-model.number="filters.kmMin"
              type="number"
              class="form-control"
              placeholder="Min"
            />
            <input
              v-model.number="filters.kmMax"
              type="number"
              class="form-control"
              placeholder="Max"
            />
          </div>
        </div>
        <div class="col-md-4">
          <label for="difficulty" class="form-label">Difficoltà</label>
          <select v-model="filters.difficulty" class="form-select" id="difficulty">
            <option value="">Tutte</option>
            <option value="Facile">Facile</option>
            <option value="Moderata">Moderata</option>
            <option value="Difficile">Difficile</option>
          </select>
        </div>
      </div>
      <button @click="applyFilters" class="btn btn-primary mt-3">
        Applica Filtri
      </button>
    </div>

    <!-- Griglia delle gare -->
    <div
      class="gara-grid"
      :class="{ 'gara-grid-lg': isLargeScreen, 'gara-grid-md': isMediumScreen, 'gara-grid-sm': isSmallScreen }"
    >
      <div
        v-for="gara in filteredGare"
        :key="gara.id"
        class="gara-card-container"
      >
        <GaraCard :gara="gara" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api"; // Importa l'istanza di axios correttamente
import GaraCard from "../components/GaraCard.vue";

export default {
  name: "ElencoGare",
  components: { GaraCard },
  data() {
    return {
      gare: [], // Tutte le gare
      filters: {
        name: "",
        kmMin: null,
        kmMax: null,
        difficulty: "",
        elevMin: null,
        elevMax: null,
      },
      loading: true, // Indicatore di caricamento
      error: null, // Messaggio di errore
      isLargeScreen: false,
      isMediumScreen: false,
      isSmallScreen: false,
    };
  },
  computed: {
    filteredGare() {
      return this.gare.filter((gara) => {
        const matchesName =
          !this.filters.name ||
          gara.name.toLowerCase().includes(this.filters.name.toLowerCase());
        const matchesKm =
          (!this.filters.kmMin || gara.distance >= this.filters.kmMin) &&
          (!this.filters.kmMax || gara.distance <= this.filters.kmMax);
        const matchesDifficulty =
          !this.filters.difficulty ||
          gara.difficulty === this.filters.difficulty;
        const matchesElevation =
          (!this.filters.elevMin || gara.elevation >= this.filters.elevMin) &&
          (!this.filters.elevMax || gara.elevation <= this.filters.elevMax);

        return matchesName && matchesKm && matchesDifficulty && matchesElevation;
      });
    },
  },
  methods: {
    async fetchGare() {
      try {
        const response = await api.getAllRaces(); // Chiamata API usando l'istanza Axios
        this.gare = response.data; // Salva i dati ricevuti
      } catch (error) {
        console.error("Errore durante la chiamata API:", error);
        this.error = "Impossibile caricare le gare.";
      } finally {
        this.loading = false;
      }
    },
    async applyFilters() {
      try {
        this.loading = true;
        let response;

        // Applica i filtri in base ai parametri selezionati
        if (this.filters.elevMin || this.filters.elevMax) {
          response = await api.filterByElevation(
            this.filters.elevMin,
            this.filters.elevMax
          );
        } else if (this.filters.difficulty) {
          response = await api.filterByDifficulty(this.filters.difficulty);
        } else if (this.filters.kmMin || this.filters.kmMax) {
          response = await api.filterByDistance(
            this.filters.kmMin,
            this.filters.kmMax
          );
        } else {
          response = await api.getAllRaces(); // Nessun filtro, carica tutte le gare
        }

        this.gare = response.data; // Aggiorna la lista delle gare
      } catch (error) {
        console.error("Errore durante l'applicazione dei filtri:", error);
        this.error = "Impossibile applicare i filtri.";
      } finally {
        this.loading = false;
      }
    },
    handleResize() {
      const width = window.innerWidth;
      this.isLargeScreen = width >= 1200;
      this.isMediumScreen = width >= 768 && width < 1200;
      this.isSmallScreen = width < 768;
    },
  },
  mounted() {
    this.fetchGare();
    this.handleResize(); // Inizializza con le dimensioni correnti dello schermo
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.filters {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filters label {
  font-weight: bold;
}

.filters .btn {
  display: block;
  width: 100%;
}

h1 {
  color: #007bff;
}

.alert {
  margin-top: 20px;
}
.gara-grid {
  display: grid;
  gap: 16px; /* Spaziatura tra le card */
  padding: 16px;
}

.gara-grid-lg {
  grid-template-columns: repeat(4, 1fr); /* 4 colonne per schermi grandi */
}

.gara-grid-md {
  grid-template-columns: repeat(2, 1fr); /* 2 colonne per schermi medi */
}

.gara-grid-sm {
  grid-template-columns: 1fr; /* 1 colonna per schermi piccoli */
}

.gara-card-container {
  /* Puoi personalizzare ulteriormente lo stile della card */
}
</style>
