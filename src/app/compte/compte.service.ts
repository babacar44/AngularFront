import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icompte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  private _postcompteUrl =  "http://localhost:8000/compte/ajouter"

  private _CompteUrl =  "http://localhost:8000/compte/listerAllCompte";

  
postCompte(data){
  console.log(data);
  return this.http.post<any>(this._postcompteUrl
    ,{"id":data})
}

ListerCompte() :Observable<Icompte[]>{
  return this.http.get<Icompte[]>(this._CompteUrl)
            //  .pipe(catchError(this.errorHandler));
}
 
}
