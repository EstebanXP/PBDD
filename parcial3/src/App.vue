<template>
<div>
  <div id="nav">
    <img src="../logo.png" alt=""> <hr>
    <router-link v-if="$route.path != '/'" to="/" style="color:crimson">Cerrar Sesion</router-link> <hr>
  </div>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f75b9;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:#135a92;
}

#nav a.router-link-exact-active {
  color: #0e436d;
}
</style>
