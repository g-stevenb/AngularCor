import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludadorComponent } from './saludador/saludador.component';
import { ListarComponent } from './listar/listar.component';
import { ListadoComponent } from './listado/listado.component';
import { MmPlatosComponent } from './mm-platos/mm-platos.component';
import { MmListarPlatosComponent } from './mm-listar-platos/mm-listar-platos.component';
import { CwListaReservaComponent } from './cw-lista-reserva/cw-lista-reserva.component';
import { CwReservaLavadoComponent } from './cw-reserva-lavado/cw-reserva-lavado.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludadorComponent,
    ListarComponent,
    ListadoComponent,
    MmPlatosComponent,
    MmListarPlatosComponent,
    CwListaReservaComponent,
    CwReservaLavadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
