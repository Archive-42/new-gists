<template>
  <div class="login">
    <h2>Login</h2>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input type="password" v-model="password" placeholder="Password"><br>
    <button @click="login">Sign in</button>
  </div>
</template>