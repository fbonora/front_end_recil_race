<template>
    <div>
      <h1 class="my-4 text-center">Gare di {{ meseCorrente }}</h1>
      <div class="row">
        <div
          v-for="gara in gareFiltrate"
          :key="gara._id"
          class="col-md-4 mb-4"
        >
          <GaraCard :gara="gara" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  import GaraCard from '../components/GaraCard.vue';
  
  export default {
    name: 'GarePerMese',
    components: { GaraCard },
    props: {
      month: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        gare: [],
        gareFiltrate: [],
        mesi: [
          'Gennaio',
          'Febbraio',
          'Marzo',
          'Aprile',
          'Maggio',
          'Giugno',
          'Luglio',
          'Agosto',
          'Settembre',
          'Ottobre',
          'Novembre',
          'Dicembre',
        ],
      };
    },
    computed: {
      meseCorrente() {
        return this.mesi[parseInt(this.month) - 1];
      },
    },
    methods: {
      async fetchGare() {
        try {
          const response = await api.getAllRaces();
          this.gare = response.data;
          this.gareFiltrate = this.gare.filter(
            // Filtra le gare in base al mese (qui dovrai aggiungere logica specifica per il mese se il backend non restituisce già un campo data)
            (gara) => new Date(gara.date).getMonth() + 1 === parseInt(this.month)
          );
        } catch (error) {
          console.error('Errore durante il caricamento delle gare:', error);
        }
      },
    },
    created() {
      this.fetchGare();
    },
  };
  </script>
  