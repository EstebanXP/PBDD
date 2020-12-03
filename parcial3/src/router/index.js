import { createRouter, createWebHashHistory } from 'vue-router'
import usuario from '@/components/usuario'
import historialRecibos from '@/components/historialRecibos'


const routes = [
  {
    path: '/',
    name: 'usuario',
    component: usuario
    //inicio de sesion
  },
  {
    path: '/recibos/:id', //'/recibos/:id',
    name: 'recibos',
    component: historialRecibos
    //mostrar todos los recibos
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
