import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PokelistComponent } from './pages/pokelist/pokelist.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'home', component: NavbarComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'pokelist', component: PokelistComponent },
    { path: 'pokemon/:name', component: PokemonDetailsComponent }
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
