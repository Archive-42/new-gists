<template>
  <div class="register">
    <p>Register</p>
    <input type="text" v-model="email" placeholder="Email">
    <br>
    <input type="password" v-model="password" placeholder="Password">
    <br>
    <button @click="signUp">Register</button>
    <span><router-link to="/login">login</router-link>.
    </span>
  </div>
</template>
