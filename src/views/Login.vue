<template>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="text-center mb-4">Login</h2>
          <form @submit.prevent="handleLogin">
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
            <button type="submit" class="btn btn-primary w-100">Accedi</button>
          </form>
          <p class="text-center mt-3">
            Non hai un account? <router-link to="/registrazione">Registrati qui</router-link>.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        // Logica per autenticazione
        alert(`Login effettuato con l'email: ${this.email}`);
        // Redireziona a una pagina dopo l'accesso, se necessario
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  </style>
  