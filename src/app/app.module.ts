import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListarComponent } from './listar/listar.component';
import { ListadoComponent } from './listado/listado.component';
import { MmPlatosComponent } from './mm-platos/mm-platos.component';
import { MmListarPlatosComponent } from './mm-listar-platos/mm-listar-platos.component';
import { CwListaReservaComponent } from './cw-lista-reserva/cw-lista-reserva.component';
import { CwReservaLavadoComponent } from './cw-reserva-lavado/cw-reserva-lavado.component';
import { CwReservaDetalleComponent } from './cw-reserva-detalle/cw-reserva-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CwListaReservaComponent},
  { path: 'reserva', component: CwReservaDetalleComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    ListarComponent,
    ListadoComponent,
    MmPlatosComponent,
    MmListarPlatosComponent,
    CwListaReservaComponent,
    CwReservaLavadoComponent,
    CwReservaDetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
