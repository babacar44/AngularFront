import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import  'rxjs/add/observable/throw';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private _partenaireUrl =  "http://localhost:8000";
  

  constructor(private http : HttpClient) { }

  getPartenaire() : Observable<any>{
    return this.http.get<any>(this._partenaireUrl+"/api/listerpartenaire")
              //  .pipe(catchError(this.errorHandler));
  }


}
