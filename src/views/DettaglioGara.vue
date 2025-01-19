<template>
    <div class="container my-5">
      <div v-if="loading" class="text-center">Caricamento in corso...</div>
      <div v-else-if="gara">
        <h2>{{ gara.name }}</h2>
        <p><strong>Distanza:</strong> {{ gara.distance }} km</p>
        <p><strong>Dislivello:</strong> {{ gara.elevation }} m</p>
        <p><strong>Difficoltà:</strong> {{ gara.difficulty }}</p>
      </div>
      <div v-else class="text-center">Gara non trovata.</div>
    </div>
  </template>
  
  <script>
import api from '../services/api';  // Importa l'istanza di axios correttamente
  
  export default {
    name: 'DettaglioGara',
    data() {
      return {
        gara: null,
        loading: true,
      };
    },
    methods: {
      async fetchGara() {
        try {
          const response = await api.getRaceById(this.$route.params.id);
          this.gara = response.data;
        } catch (error) {
          console.error('Errore nel caricamento della gara:', error);
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      this.fetchGara();
    },
  };
  </script>
  