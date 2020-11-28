<template>
<div>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/recibo">Recibo Actual</router-link> |
    <router-link to="/recibos">Historial de recibos</router-link> |
    <router-link to="/estado">Estado del servicio</router-link> 
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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
