import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iaffectation } from './compte-affect/affec';

@Injectable({
  providedIn: 'root'
})
export class CompteAffectService {

  constructor(private http : HttpClient) { }


private _listCompt =  "http://localhost:8000/compte/lister";
private _affecter = "http://localhost:8000/api/affectationCompte";


listercompte() :Observable<Iaffectation[]>{
  return this.http.get<Iaffectation[]>(this._listCompt)
}


affecterCompte(data){
  return this.http.post<any>(this._affecter,data)
}


}