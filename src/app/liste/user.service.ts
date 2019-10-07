import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from './Iuser';
import { Observable } from 'rxjs';
import { Icompte } from '../compte/compte';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private _urlListUser = "http://localhost:8000/partenaire/listerUser";
  private _urlstatus = " http://localhost:8000/partenaire/changerStatut/";
  private _CompteUrl =  "http://localhost:8000/compte/lister";
  private _OperationsList = " http://localhost:8000/api/listerOperation";
  private _ListerAdmin = " http://localhost:8000/super/listerUser";

getUserPartener() : Observable <any>{
 return this.http.get<any>(this._urlListUser);
}

updateStatus(id) : Observable<any>{
  return this.http.post<any>(this._urlstatus + id,id)

}

ListerCompte() :Observable<any>{
  return this.http.get<any>(this._CompteUrl)
            //  .pipe(catchError(this.errorHandler));
}

ListerOperations() :Observable<any>{
  return this.http.get<any>(this._OperationsList);
}

getUserSuper() : Observable <any>{
  return this.http.get<any>(this._ListerAdmin);
 }
}
