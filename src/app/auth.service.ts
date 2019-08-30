import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private _registerUrl = " http://localhost:8000/api/inscription"
  private _depotUrl = "  http://localhost:8000/api/depot"

  private _loginUrl = "  http://localhost:8000/api/login"


  jwt : string;
  email : string;
  roles : Array<string>;

  constructor(private http : HttpClient,
      private _router: Router) { }

      onDepot(somdepot: any){
        return this.http.post<any>(this._depotUrl, somdepot)
        
      }

  registerUser(User: { imageName: any; nomComplet?: any; propriete?: any; adresse?: any; statut?: any; email?: any; telephone?: any; password?: any; partenaire?: any; compte?: any; passwordConfirmation?: any; profil?: any; }){
    // return this.http.post<any>(this._registerUrl, user)

    const endpoint = 'http://localhost:8000/api/inscription';
    const formData: FormData = new FormData();
    formData.append('imageName',User.imageName);
    formData.append('nomComplet',User.nomComplet);
    formData.append('propriete',User.propriete);
    formData.append('adresse',User.adresse);
    formData.append('statut',User.statut);
    formData.append('email',User.email);
    formData.append('telephone',User.telephone);
    formData.append('password',User.password);
    formData.append('partenaire',User.partenaire);
    formData.append('compte',User.compte);
    formData.append('passwordConfirmation',User.passwordConfirmation);
    formData.append('profil',User.profil);

    return this.http
    .post(endpoint, formData);

  }

  
  login(user: any){
    return this.http.post<any>(this._loginUrl, user, {observe:'response'})
    
  }

  // loggedIn(){
  //   return !!localStorage.getItem('token')
    
  // }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')

  }

  saveToken(jwt: string){
    localStorage.setItem('token',jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();
  }
  parseJWT(){
    //ici on recupere email et les roles 
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    console.log(objJWT)
    this.email = objJWT.email;
    console.log(this.email);
    this.roles = objJWT.roles;
    console.log(this.roles);

  ;

  }

  isSuperAdmin(){
    return this.roles.indexOf("ROLE_SUPER_ADMIN")>=0;
  }

  isCaissier(){
    return this.roles.indexOf("ROLE_CAISSIER")>=0;
  }

  isPartener(){
    return this.roles.indexOf("ROLE_ADMIN_PARTENER")>=0;
  }

  isAdminWari(){
    return this.roles.indexOf("ROLE_ADMIN_WARI")>=0;
  }

  isUser(){
    return this.roles.indexOf("ROLE_USER")>=0;
  }

  isAdminPartener(){
    return this.roles.indexOf("ROLE_ADMIN")>=0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdminWari() ||
     this.isAdminPartener() 
    || this.isCaissier() || this.isUser() ||
     this.isSuperAdmin() || this.isPartener());
  }

  loadToken(){;
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
}
