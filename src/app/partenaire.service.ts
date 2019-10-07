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

  private _getlistpartenaire =  "http://localhost:8000/super/listerPartenaire";
  private _edit = " http://localhost:8000/super/bloquerPartenaire/";
  private _getIt ="http://localhost:8000/api/listerpartener/";
  private _partenaireUrl ="http://localhost:8000/super/partenaireAdd";

  constructor(private http : HttpClient, private _injector : Injector) { }

  getPartenaire() : Observable<any>{
    return this.http.get<any>(this._getlistpartenaire)
              //  .pipe(catchError(this.errorHandler));
  }

  onPartenaire(partenaire: any){
    return this.http.post<any>(this._partenaireUrl,partenaire)
    .map((res) => res).catch(this.handleError)

  }

  getItById(id) : Observable<any>{
    return this.http.get<any>(this._getIt + id);
  }

  updatePartenaire(id): Observable<any>{
    return this.http.get<any>(this._edit + id)
  }

}
