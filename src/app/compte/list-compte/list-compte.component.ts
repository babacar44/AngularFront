import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  comptes = [];
  constructor(private _compteservice : CompteService) { }

  ngOnInit() {
    this._compteservice.onListerCompte( )
  
    .subscribe(
      res=>this.comptes = res,
      err=>console.log(err),
    )
  }

}
