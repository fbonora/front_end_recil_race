<template>
  <div class="polls-view">
    <h1>Sondaggi</h1>
    <div class="polls-grid">
      <PollCard
        v-for="poll in polls"
        :key="poll.id"
        :pollId="poll.id"
        :title="poll.title"
        :description="poll.description"
        :options="poll.options"
        v-model:selectedOption="poll.selectedOption" />
    </div>

    <!-- Bottone di invio -->
    <button 
      :disabled="!canSubmit" 
      @click="submitPolls"
      class="submit-button"
    >
      Invia Sondaggio
    </button>
  </div>
</template>

<script>
import PollCard from "@/components/PollCard.vue";

export default {
  name: "PollsView",
  components: {
    PollCard,
  },
  data() {
    return {
      polls: [
        {
          id: 1,
          title: "Sondaggio 1",
          description: "Descrizione del sondaggio 1",
          options: ["Opzione 1", "Opzione 2", "Opzione 3", "Opzione 4"],
          selectedOption: null, // Per memorizzare l'opzione selezionata
        },
        {
          id: 2,
          title: "Sondaggio 2",
          description: "Descrizione del sondaggio 2",
          options: ["Opzione A", "Opzione B", "Opzione C", "Opzione D"],
          selectedOption: null,
        },
        {
          id: 3,
          title: "Sondaggio 3",
          description: "Descrizione del sondaggio 3",
          options: ["Opzione X", "Opzione Y", "Opzione Z", "Opzione W"],
          selectedOption: null,
        },
      ],
    };
  },
  computed: {
    // Controlla se tutti i sondaggi hanno una risposta selezionata
    canSubmit() {
      return this.polls.every(poll => poll.selectedOption !== null);
    },
  },
  methods: {
    // Funzione per inviare i sondaggi al backend
    submitPolls() {
      const pollData = this.polls.map(poll => ({
        id: poll.id,
        selectedOption: poll.selectedOption,
      }));

      // Esegui la chiamata al backend per inviare i dati del sondaggio
      console.log("Dati del sondaggio:", pollData);

      // Simula invio dati al backend (sostituisci con una chiamata reale)
      // axios.post('/api/submit-survey', pollData)
      //   .then(response => {
      //     console.log("Risposta del server:", response.data);
      //     this.$router.go(0);  // Ricarica la pagina
      //   })
      //   .catch(error => {
      //     console.error("Errore nel submit:", error);
      //   });

      // Per simulare il refresh della pagina
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
.polls-view {
  padding: 2rem;
}

.polls-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.submit-button {
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
