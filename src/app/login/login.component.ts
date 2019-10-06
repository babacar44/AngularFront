import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage ;

  loginUserData ={}
  constructor(private _auth : AuthService,
      private _router : Router) { }

  ngOnInit() {

  }
  
  loginUser(){
    this._auth.login(this.loginUserData)
    .subscribe(
      res=>{
        console.log(res)
        let jwt = res.body['token'];
        console.log(jwt);
        //this.errorMessage = jwt.message
        this._auth.saveToken(jwt);  
        this._router.navigate(['/accueil']);


        /*if (this.isSuperAdmin()) {
          this._router.navigate(['/partenaire']);

        }

        if (this.isCaissier()) {
          this._router.navigate(['/depot']);

        }


        if (this.isPartener()) {
          this._router.navigate(['/affectation']);

        }


        if (this.isAdminWari()) {
          this._router.navigate(['/partenaire']);

        }


        if (this.isUser()) {
          this._router.navigate(['/listerOperations']);

        }
        
        
        if (this.isAdminPartener()) {
          this._router.navigate(['/operations']);

        }*/
      }, 
      error=>{this.errorMessage = error
      // console.log(this.errorMessage)
        }
    );
  }

  isSuperAdmin(){
    return this._auth.isSuperAdmin()
  }
  isCaissier(){
    return this._auth.isCaissier()
  }

  isPartener(){
    return this._auth.isPartener()
  }

  isAdminWari(){
    return this._auth.isAdminWari()
  }

  isUser(){
    return this._auth.isUser()
  }

  isAdminPartener(){
    return this._auth.isAdminPartener()
  }

  
}
