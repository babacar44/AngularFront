import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { AjoutdepotComponent } from './depot/ajoutdepot/ajoutdepot.component';
import { ListercompteComponent } from './depot/listercompte/listercompte.component';
import { AjouterComponent } from './partenaire/ajouter/ajouter.component';
import { ListerComponent } from './partenaire/lister/lister.component';
import { AddcompteComponent } from './compte/addcompte/addcompte.component';
import { ListCompteComponent } from './compte/list-compte/list-compte.component';
import { OperationsService } from './operations/operations.service';
import { DepotService } from './depot/depot.service';
import { RegisterPartenerComponent } from './navbar/register-partener/register-partener.component';
import { EnvoiComponent } from './operations/envoi/envoi.component';
import { EnvoiListComponent } from './operations/envoi-list/envoi-list.component';
import { RetraitComponent } from './operations/retrait/retrait.component';
import { UserComponent } from './liste/user/user.component';
import { CompteService } from './compte/compte.service';
import { CompteAffectComponent } from './partenaire/compte-affect/compte-affect.component';
import { OpererlistComponent } from './liste/opererlist/opererlist.component';
import { SuperUserComponent } from './liste/super-user/super-user.component';


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
    AddcompteComponent,
    RetraitComponent,
    CompteAffectComponent,
     
    AjoutdepotComponent, 
    ListercompteComponent,
    AjouterComponent,
    ListerComponent,
    AddcompteComponent,
    ListCompteComponent,
    RegisterPartenerComponent,
    EnvoiComponent,
    EnvoiListComponent,
    RetraitComponent,
    UserComponent,
    CompteAffectComponent,
    OpererlistComponent,
    SuperUserComponent,
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
  
  ],
    
  providers: [AuthService,AuthGuard,PartenaireService,OperationsService,DepotService,CompteService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
