import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './auth.guard';
import { DepotComponent } from './depot/depot.component';
import { OperationsComponent } from './operations/operations.component';
import { CompteComponent } from './compte/compte.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterPartenerComponent } from './navbar/register-partener/register-partener.component';
import { EnvoiComponent } from './operations/envoi/envoi.component';
import { RetraitComponent } from './operations/retrait/retrait.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'partenaire',
    component: PartenaireComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registerPartener',
    component: RegisterPartenerComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'depot',
    component: DepotComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  },

  {
    path: 'envoi',
    component: EnvoiComponent
  },

  {
    path: 'retrait',
    component: RetraitComponent
  },

  {
    path: 'compte',
    component: CompteComponent
  },
  // {
  //   path: 'navbar',
  //   component: NavbarComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
