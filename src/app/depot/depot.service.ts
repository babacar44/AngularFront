import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DepotService {


  private _depotUrl = "  http://localhost:8000/api/depot"

  private _CompteUrl =  "http://localhost:8000";

  private _numcompteFinder = " http://localhost:8000/api/compteFinder";

  constructor(private http : HttpClient, private _injector : Injector) { }

  //injection du service
 authentication = this._injector.get(AuthService);

  faireDepot(data){
    return this.http.post<any>(this._depotUrl, data)
    // .map((res) => res).catch(this.authentication.handleError)
    
    
  }

  rechercherCompte(data){
    return this.http.post<any>(this._numcompteFinder,data)
  }

  onListerCompte() :Observable<any>{
    return this.http.get<any>(this._CompteUrl+"/api/listercompte")
              //  .pipe(catchError(this.errorHandler));
  }


  
  

}

