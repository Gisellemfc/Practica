import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { VistaDetalleComponent } from './componentes/vista-detalle/vista-detalle.component';
import { BotonCompraComponent } from './componentes/boton-compra/boton-compra.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { AdminComponent } from './componentes/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    VistaDetalleComponent,
    BotonCompraComponent,
    ReservacionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
