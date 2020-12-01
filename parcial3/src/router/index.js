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
    path: '/recibos',
    name: 'recibos',
    component: historialRecibos
    //mostrar todos los recibos

  },
  {
    path: '/recibo',
    name: 'recibo',
    component: recibo
    //mostrar el recibo actual
  },
  {
    path: '/estado',
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
