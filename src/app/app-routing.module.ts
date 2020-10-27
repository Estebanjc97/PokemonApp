import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: 'Home', component: HomeComponent }
  ] },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
