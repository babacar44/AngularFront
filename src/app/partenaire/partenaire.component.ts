import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  partenaires = []
  constructor(private _partenaireService : PartenaireService) { }

  ngOnInit() {
    this. _partenaireService.getPartenaire(  )
    .subscribe(
      res=>this.partenaires = res,
      err=>console.log(err),
    )
  }

}
