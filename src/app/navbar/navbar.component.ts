import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
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

  isAuthenticated(){
    return this._auth.isAuthenticated();
  }
}
