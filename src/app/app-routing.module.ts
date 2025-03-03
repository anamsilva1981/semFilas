import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { DetalhesRestauranteComponent } from './pages/detalhes-restaurante/detalhes-restaurante.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConfirmacaoComponent } from './pages/confirmacao/confirmacao.component';
import { LoginComponent } from './pages/login/login.component';
import { MinhasReservasComponent } from './pages/minhas-reservas/minhas-reservas.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurantes', pathMatch: 'full' }, // Redireciona pra lista de restaurantes
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'restaurantes/:id', component: DetalhesRestauranteComponent }, // Usa parâmetro de rota (id)
  { path: 'reserva/:id', component: ReservaComponent }, // Passa o id do restaurante
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: '', component: MinhasReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
