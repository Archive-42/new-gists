<template>
  <div class="login">
    <h2>Login</h2>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="login">Sign in</button>
    <p>
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>
 
<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>
 
<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 50px;
}
input {
  width: 40%;
  padding: 20px;
  margin: 20px 0;
}
button {
  width: 10%;
  margin-top: 30px;
  padding: 20px;
  cursor: pointer;
}
p {
  margin-top: 50px;
  font-size: 16px;
}
p a {
  cursor: pointer;
}
</style>