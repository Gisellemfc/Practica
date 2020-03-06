import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { VistaDetalleComponent } from './componentes/vista-detalle/vista-detalle.component';
import { BotonCompraComponent } from './componentes/boton-compra/boton-compra.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProximosEstrenosComponent } from './componentes/proximos-estrenos/proximos-estrenos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VistaDetalleComponent,
    BotonCompraComponent,
    ReservacionComponent,
    AdminComponent,
    ProximosEstrenosComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
