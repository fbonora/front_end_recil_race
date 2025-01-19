<template>
    <div class="container my-4">
      <div class="text-left">
        <h1 class="mb-4">Benvenuto nel sito delle Gare Ciclistiche U23</h1>
        <ul>
            <li class="lead">Scopri tutte le gare</li>
            <li class="lead">Filtra le competizioni per trovare quella più adatta a te!</li>
            <li class="lead">Consulta il calendario gare</li>
            <li class="lead">Registrati per scaricare le tracce gpx</li>
            <li class="lead">Vota il tuo ciclista preferito</li>
        </ul>
        <router-link to="/elenco-gare" class="btn btn-primary btn-lg mt-3">Visualizza Gare</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .container {
    text-align: left;
    margin-top: 50px;
  }
  </style>
  