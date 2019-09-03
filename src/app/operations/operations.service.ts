import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private _envoiUrl = " http://localhost:8000/api/envoi";

  constructor(private http : HttpClient) { }

  

DoEnvoi(envoi:any){
    this.http.post<any>(this._envoiUrl, envoi)

    
}



}
