import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from './Iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private _urlListUser = " http://localhost:8000/api/listerUser";


getUserPartener() : Observable <any>{
 return this.http.get<any>(this._urlListUser);
}

isAdminParte(){
  
}

}
