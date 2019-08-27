import { Component, OnInit } from '@angular/core';
import { Depot } from '../Classes/depot';
import { DepotService } from '../services/depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  somme : Depot
  objDepot : Depot
  constructor(private _depotService: DepotService) { }

  ngOnInit() {



    var somme = new Depot();
    somme.montant = 500000;
    somme.depot = 18;
  this._depotService.deposer(this.somme)
  .subscribe(
    data=>
    {
      this.objDepot = data;

    }
  )

  }

}
