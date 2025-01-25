<template>
    <div class="card" style="width: 100%;">
      <img
        src="../assets/img/race.jpg"
        class="card-img-top"
        alt="Immagine gara"
      />
      <div class="card-body">
        <h5 class="card-title">{{ gara.name }}</h5>
        <p class="card-text">
          <strong>Distanza:</strong> {{ gara.distance.toFixed(2) }} km
        </p>
        <p class="card-text">
          <strong>Dislivello:</strong> {{ gara.elevation.toFixed(2) }} m
        </p>
        <p class="card-text">
          <strong>Difficoltà:</strong> {{ gara.difficulty }}
        </p>
        <p class="card-text">
          <strong>Categoria:</strong> {{ gara.category }}
        </p>
        <p class="card-text">
          <strong>Tipo Gara:</strong> {{ gara.raceType }}
        </p>
        <p class="card-text">
          <strong>Descrizione:</strong> {{ gara.description }}
        </p>
        <router-link :to="`/gare/${gara._id}`" class="btn btn-primary">
          Dettagli Gara
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GaraCard',
    props: {
      gara: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-weight: bold;
  }
  
  .card-text {
    font-size: 14px;
    color: #555;
  }
  
  .btn {
    margin-top: 10px;
  }
  </style>
  