import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodesService {

  constructor(private http : HttpClient) { }

  getRessources(url){
    return this.http.get(url);
  }
}
