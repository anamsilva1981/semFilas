import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { DetalhesRestauranteComponent } from './pages/detalhes-restaurante/detalhes-restaurante.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';
import { MinhasReservasComponent } from './pages/minhas-reservas/minhas-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    DetalhesRestauranteComponent,
    ReservaComponent,
    LoginComponent,
    CadastroComponent,
    ConfirmacaoComponent,
    MinhasReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
