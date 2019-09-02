import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  private _postcompteUrl =  "http://localhost:8000/api/addcompte"

  private _CompteUrl =  "http://localhost:8000/api/listercompte";

  
postCompte(compte: {}){
  return this.http.post<any>(this._postcompteUrl
    ,compte)
}

ListerCompte() :Observable<any>{
  return this.http.get<any>(this._CompteUrl)
            //  .pipe(catchError(this.errorHandler));
}
 
}
