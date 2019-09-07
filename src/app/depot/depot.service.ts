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

  constructor(private http : HttpClient, private _injector : Injector) { }

  //injection du service
 authentication = this._injector.get(AuthService);

  onDepot(somdepot: {}){
    return this.http.post(this._depotUrl, somdepot)
    .map((res) => res).catch(this.authentication.handleError)
    
    
  }

  onListerCompte() :Observable<any>{
    return this.http.get<any>(this._CompteUrl+"/api/listercompte")
              //  .pipe(catchError(this.errorHandler));
  }


  
  

}

