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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

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
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
