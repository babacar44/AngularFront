import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../../partenaire.service';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {

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
