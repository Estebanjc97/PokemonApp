import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'pokemon/:id', component: PokemonDetailsComponent }
  ]},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
