import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ienvoi } from './envoi';
import { Iretrait } from './retrait';



@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private _envoiUrl = "http://localhost:8000/api/envoi";
  private _retrait = " http://localhost:8000/api/codeFinder";
  
  constructor(private http : HttpClient) { }

  

  faireEnvoi(envoi){
    return this.http.post<any>(this._envoiUrl, envoi)

    
    
}

  getRetrait(codeEnvoi : Iretrait){  
    return this.http.post<any>(this._retrait,codeEnvoi)
  }
  isVerify(): Observable <any>{
    return this.http.get<any>(this._retrait)

  }

// getAllEnvoi() : Observable<Ienvoi[]>{
//   // return this.http.get<Ienvoi[]>();
// }

}
