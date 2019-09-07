import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import  'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  [x: string]: any;

  private _partenaireUrl =  "http://localhost:8000";
  private _edit = " http://localhost:8000/api/listerpart/";
  private _getIt ="http://localhost:8000/api/listerpartener/";

  constructor(private http : HttpClient, private _injector : Injector) { }

  getPartenaire() : Observable<any>{
    return this.http.get<any>(this._partenaireUrl+"/api/listerpartenaire")
              //  .pipe(catchError(this.errorHandler));
  }

  onPartenaire(partenaire: any){
    return this.http.post<any>(this._partenaireUrl+"/api/partenaire",partenaire)
    .map((res) => res).catch(this.handleError)

  }

  getItById(id) : Observable<any>{
    return this.http.get<any>(this._getIt + id);
  }

  updatePartenaire(id): Observable<any>{
    return this.http.get<any>(this._edit + id)
  }

}
