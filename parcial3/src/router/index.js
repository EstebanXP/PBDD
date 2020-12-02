import { createRouter, createWebHashHistory } from 'vue-router'
import usuario from '@/components/usuario'
import historialRecibos from '@/components/historialRecibos'
import recibo from '@/components/recibo'
import status from '@/components/status'

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
  {
    path: '/recibo', // '/recibo/:id',
    name: 'recibo',
    component: recibo
    //mostrar el recibo actual
  },
  {
    path: '/estado',// '/estado/:id'
    name: 'estado',
    component: status
    //añadir usuario y direccion
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
