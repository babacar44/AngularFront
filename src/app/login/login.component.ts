import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData ={}
  constructor(private _auth : AuthService,
      private _router : Router) { }

  ngOnInit() {

  }
  
  loginUser(user: any){
    this._auth.loginUser(this.loginUserData)
    // this._auth.loginUser(user)

    .subscribe(
      res=>{
        let jwt = res.body;
        console.log(jwt);
        this._auth.saveToken(jwt);
        this._router.navigate(['/accueil']);

      //   if(res.token){
      //   console.log(res)
      //   localStorage.setItem('token', res.token)
      //   this._router.navigate(['/accueil'])

      // }
  

      }, 
      err=>console.log(err),
    )
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
