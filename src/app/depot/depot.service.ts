import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  private _depotUrl = "  http://localhost:8000/api/depot"

  private _CompteUrl =  "http://localhost:8000";

  constructor(private http : HttpClient, private _router: Router) { }


  onDepot(somdepot: any){
    return this.http.post<any>(this._depotUrl, somdepot)
    
    
  }

  onListerCompte() :Observable<any>{
    return this.http.get<any>(this._CompteUrl+"/api/listercompte")
              //  .pipe(catchError(this.errorHandler));
  }

  
  

}

