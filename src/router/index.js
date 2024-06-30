import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Autores from '../views/Autores.vue'
import FormularioAutor from '../views/FormularioAutor.vue'
import EditFormulario from '../views/EditFormulario.vue'
import Cliente from '../views/Cliente.vue'
import FormularioCliente from '../views/FormularioCliente.vue'
import EditFormularioCliente from '../views/EditFormularioCliente.vue'
import Libro from '../views/Libro.vue'
import FormularioLibro from '../views/FormularioLibro.vue'
import EditFormularioLibro from '../views/EditFormularioLibro.vue'
import VisitarAutor from '../views/VisitarAutor.vue'
import Prestamo from '../views/Prestamo.vue'
import VisitarCliente from '../views/VisitarCliente.vue'
import VisitarLibro from '../views/VisitarLibro.vue'
import FormularioPrestamo from '../views/FormularioPrestamo.vue'
import EditFormularioPrestamo from '../views/EditFormularioPrestamo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/autores',
    name: 'autores',
    component: Autores
  },
  {
    path: '/formularioAutor',
    name: 'formularioAutor',
    component: FormularioAutor
  },
  {
    path:'/edit-autor/:id',
    name:'edid-autor',
    component: EditFormulario
  },
  {
    path:'/cliente',
    name:'cliente',
    component: Cliente
  },
  {
    path: '/formularioCliente',
    name: 'formularioCliente',
    component: FormularioCliente
  },
  {
    path:'/edit-cliente/:id',
    name:'edid-cliente',
    component: EditFormularioCliente
  },
  {
    path:'/libro',
    name:'libro',
    component: Libro
  },
  {
    path:'/formularioLibro',
    name:'formularioLibro',
    component: FormularioLibro

  },
  {
  path:'/edit-libro/:id',
  name:'edit-libro',
  component: EditFormularioLibro
  },
  {
  path:'/visitar-autor/:id',
  name:'visitar-autor',
  component: VisitarAutor
},
{
  path:'/prestamo',
  name:'prestamo',
  component: Prestamo
},
{
  path:'/visitar-cliente/:id',
  name:'visitar-cliente',
  component: VisitarCliente
},
{
  path:'/visitar-libro/:id',
  name:'visitar-libro',
  component: VisitarLibro
},
{
  path:'/formularioPrestamo',
  name:'formularioPrestamo',
  component: FormularioPrestamo
},
{
  path:'/edit-prestamo/:id',
  name:'edit-prestamo',
  component: EditFormularioPrestamo
}


]

const router = new VueRouter({
  routes
})

export default router
