<template>
    <div class="my-4">
      <div class="row">
        <div class="col-md-3">
          <input
            type="number"
            class="form-control"
            v-model.number="filters.elevMin"
            placeholder="Dislivello minimo"
          />
        </div>
        <div class="col-md-3">
          <input
            type="number"
            class="form-control"
            v-model.number="filters.elevMax"
            placeholder="Dislivello massimo"
          />
        </div>
        <div class="col-md-3">
          <input
            type="number"
            class="form-control"
            v-model.number="filters.kmMin"
            placeholder="Distanza minima (km)"
          />
        </div>
        <div class="col-md-3">
          <input
            type="number"
            class="form-control"
            v-model.number="filters.kmMax"
            placeholder="Distanza massima (km)"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <select class="form-control" v-model="filters.difficulty">
            <option value="">Tutte le difficoltà</option>
            <option value="Moderata">Moderata</option>
            <option value="Difficile">Difficile</option>
          </select>
        </div>
        <div class="col-md-4">
          <button class="btn btn-primary w-100" @click="applyFilters">Applica Filtri</button>
        </div>
        <div class="col-md-4">
          <button class="btn btn-secondary w-100" @click="resetFilters">Reset Filtri</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GareFiltri',
    data() {
      return {
        filters: {
          elevMin: null,
          elevMax: null,
          kmMin: null,
          kmMax: null,
          difficulty: '',
        },
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filter', this.filters);
      },
      resetFilters() {
        this.filters = {
          elevMin: null,
          elevMax: null,
          kmMin: null,
          kmMax: null,
          difficulty: '',
        };
        this.$emit('filter', this.filters);
      },
    },
  };
  </script>
  