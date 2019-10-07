import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { observable, Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _registerUrl = "http://localhost:8000/partenaire/ajouterUser"
  // private _depotUrl = "  http://localhost:8000/api/depot"

  private _loginUrl = "  http://localhost:8000/authenticate"


  jwt : string;
  username : string;
  role : Array<string>;

  constructor(private http : HttpClient,
      private _router: Router) { }

      // onDepot(somdepot: any){
      //   return this.http.post<any>(this._depotUrl, somdepot)

        
      // }
/*
 registerUser(User: { imageName: any; name?: any; propriete?: any; adresse?: any; statut?: any; email?: any; telephone?: any; password?: any; partenaire?: any; username?: any; passwordConfirmation?: any; profil?: any; }){
    // return this.http.post<any>(this._registerUrl, user)

    const endpoint = 'http://localhost:8000/partenaire/ajouterUser';
    const formData: FormData = new FormData();
    formData.append('imageName',User.imageName);
    formData.append('username',User.username);
    formData.append('name',User.name);
    formData.append('propriete',User.propriete);
    formData.append('adresse',User.adresse);
    formData.append('statut',User.statut);
    formData.append('email',User.email);
    formData.append('telephone',User.telephone);
    formData.append('password',User.password);
    formData.append('partenaire',User.partenaire);
    formData.append('passwordConfirmation',User.passwordConfirmation);
    formData.append('profil',User.profil);
        
    return this.http
    .post(endpoint, formData).map((res) => res).catch(this.handleError);

  }
*/
  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  login(user){
    return this.http.post<any>(this._loginUrl, user)
    //.map((res) => res).catch(this.handleError)
    //.map((res) => res).catch(this.handleError)
    
    //par defaut on recupere les donnees sous formes json 

    // observe donne tte la reponse http mais ne le converti pas en json
  }


  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')

  }


  saveToken(jwt: string){
    //save le token dans le localStorage notamment dans jwt 
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }

  //a partir jwt on recupere l email et les role
  //
  parseJWT(){
    //ici on recupere email et les role 
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    console.log(objJWT)
    this.username = objJWT.username;
    console.log(this.username);
    this.role = objJWT.roles;
    console.log(this.role);

  ;

  }

  isSuperAdmin(){
    return this.role.indexOf("ROLE_SUPER_ADMIN")>=0;
  }

  isCaissier(){
    return this.role.indexOf("ROLE_CAISSIER")>=0;
  }

  isPartener(){
    return this.role.indexOf("ROLE_ADMIN_PARTENER")>=0;
  }

  isAdminWari(){
    return this.role.indexOf("ROLE_ADMIN_WARI")>=0;
  }

  isUser(){
    return this.role.indexOf("ROLE_USER")>=0;
  }

  isAdminPartener(){
    return this.role.indexOf("ROLE_ADMIN")>=0;
  }

  isAuthenticated(){
    return this.role && (this.isAdminWari() ||
     this.isAdminPartener() 
    || this.isCaissier() || this.isUser() ||
     this.isSuperAdmin() || this.isPartener());
  }

  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }

  //retourner les erreurs du back 

  handleError(error : Response){
    return Observable.throw(error || 'Server Error');
    

  }
 /* initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.role=undefined;
  }*/
}
