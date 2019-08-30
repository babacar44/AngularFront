import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depot } from '../Classes/depot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private _depotUrl = "http://localhost:8000";

  constructor(private http : HttpClient) {}
  
  // deposer(somme : Depot):Observable<any>{
  //   return this.http.post(this._depotUrl+"/api/depot",somme);
  // }

}
