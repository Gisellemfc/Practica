import { ProximosEstrenosComponent } from './componentes/proximos-estrenos/proximos-estrenos.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { VistaDetalleComponent } from './componentes/vista-detalle/vista-detalle.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'proximos-estrenos',
    component: ProximosEstrenosComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'home/vista-detalle/:id',
    component: VistaDetalleComponent
  },
  {
    path: 'comprar',
    component: ReservacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
