import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { AuthService } from './auth.service';
import { PartenaireService } from './partenaire.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { DepotComponent } from './depot/depot.component';
import { AccueilComponent } from './accueil/accueil.component';
import { OperationsComponent } from './operations/operations.component';
import { CompteComponent } from './compte/compte.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PartenaireComponent,
    DepotComponent,
    AccueilComponent,
    OperationsComponent,
    CompteComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard,PartenaireService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
