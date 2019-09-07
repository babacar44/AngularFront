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
  
  loginUser(user: any){
    this._auth.login(this.loginUserData)
    .subscribe(
      res=>{
        let jwt = res.body;
        console.log(jwt.message);
        this.errorMessage = jwt.message
        this._auth.saveToken(jwt);
        this._router.navigate(['/accueil']);

      }, 
      error=>{this.errorMessage = error
       console.log(this.errorMessage)
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
