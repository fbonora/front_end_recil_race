<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center mb-4">Registrazione</h2>
          <form @submit.prevent="handleRegistration">
            <div class="form-group mb-3">
              <label for="name">Nome</label>
              <input
                type="text"
                id="name"
                class="form-control"
                v-model="name"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label for="confirmPassword">Conferma Password</label>
              <input
                type="password"
                id="confirmPassword"
                class="form-control"
                v-model="confirmPassword"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Registrati</button>
          </form>
          <p class="text-center mt-3">
            Hai già un account? <router-link to="/login">Accedi qui</router-link>.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Registrazione",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleRegistration() {
        if (this.password !== this.confirmPassword) {
          alert("Le password non corrispondono!");
          return;
        }
        // Logica per la registrazione
        alert(`Registrazione effettuata per l'utente: ${this.name}`);
        // Redireziona dopo la registrazione, se necessario
        this.$router.push("/login");
      },
    },
  };
  </script>
  