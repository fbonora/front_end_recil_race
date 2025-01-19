import axios from 'axios';

// Crea un'istanza di Axios con configurazioni di base
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL di base per il backend
  timeout: 10000, // Timeout di 10 secondi
});

// Funzione per ottenere tutte le gare
const getAllRaces = () => {
  return api.get('/races');
};

// Funzione per ottenere una gara specifica per ID
const getRaceById = (id) => {
  return api.get(`/races/${id}`);
};

// Funzione per filtrare le gare in base all'elevazione
const filterByElevation = (elevMin, elevMax) => {
  return api.get(`/races/filter/elevation?elevMin=${elevMin}&elevMax=${elevMax}`);
};

// Funzione per filtrare le gare in base alla difficoltà
const filterByDifficulty = (difficulty) => {
  return api.get(`/races/filter/difficulty?difficulty=${difficulty}`);
};

// Funzione per filtrare le gare in base alla distanza
const filterByDistance = (kmMin, kmMax) => {
  return api.get(`/races/filter/distance?kmMin=${kmMin}&kmMax=${kmMax}`);
};

// Esporta tutte le funzioni
export default {
  getAllRaces,
  getRaceById,
  filterByElevation,
  filterByDifficulty,
  filterByDistance,
};
