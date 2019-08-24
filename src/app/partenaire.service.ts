import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private _partenaireUrl =  "http://localhost:8000/api/listerpartenaire";
  

  constructor(private http : HttpClient) { }

  getPartenaire(){
    return this.http.get<any>(this._partenaireUrl)
  }

  
}
