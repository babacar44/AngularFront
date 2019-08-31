import { Component, OnInit } from '@angular/core';
import { DepotService } from '../depot.service';

@Component({
  selector: 'app-listercompte',
  templateUrl: './listercompte.component.html',
  styleUrls: ['./listercompte.component.css']
})
export class ListercompteComponent implements OnInit {

  comptes = [];

  constructor(private _compteservice : DepotService) { }

  ngOnInit() {
  this._compteservice.onListerCompte( )
  
  .subscribe(
    res=>this.comptes = res,
    err=>console.log(err),
  )
  }

}
