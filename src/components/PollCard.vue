<template>
  <div class="poll-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>

    <!-- Aggiungi le opzioni di selezione -->
    <div class="poll-options">
      <label v-for="(option, index) in options" :key="index">
        <input
          type="radio"
          :name="`poll-${pollId}`"
          :value="option"
          v-model="selectedOption"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PollCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pollId: {
      type: Number,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null, // Opzione selezionata
    };
  },
  methods: {
    // Metodo per verificare se l'utente ha selezionato un'opzione
    isSelected() {
      return this.selectedOption !== null;
    },
  },
};
</script>

<style scoped>
.poll-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  transition: box-shadow 0.2s;
}

.poll-card:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.poll-options {
  margin-top: 1rem;
}

.poll-options label {
  display: block;
  margin: 0.5rem 0;
}

.poll-options input {
  margin-right: 0.5rem;
}
</style>
