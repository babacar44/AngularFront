import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.css']
})
export class AddcompteComponent implements OnInit {

  addCompte = {}
  constructor(private _compteservice : CompteService,
    private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {
    this._compteservice.ListerCompte();
  }
  
  postCompte(){
    this._compteservice.postCompte(this.addCompte)
    .subscribe(
      data => {
        console.log('success !', data),
        this._toastr.success('Compte Crée'),
          (      error: any) => console.log('Error',error);
      }
    );
  }

}
