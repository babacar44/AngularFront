import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { DepotService } from '../depot.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';
import { NgForm } from '@angular/forms';
import { Idepot } from '../depot';

@Component({
  selector: 'app-ajoutdepot',
  templateUrl: './ajoutdepot.component.html',
  styleUrls: ['./ajoutdepot.component.css']
})
export class AjoutdepotComponent implements OnInit {

  constructor(private _dep : DepotService,
    private _router : Router, private _toastr : ToastrService) { }

errorMessage : string;
depotSolde : Idepot[]= [
  {
    numCompte : ' '
  }
];

afficher : boolean = false;

infoDepot : any ={}
// [
//   {
//     numCompte : ' ',
//     montant : ' '
//   }
// ]


  ngOnInit() {
    this.reseteForm;
  }
  reseteForm(form : NgForm){
    if(form != null  )
      form.resetForm();
    this.depotSolde = null;
  }

  rechercherCompte(depotSolde){
    console.log(depotSolde);
    const data = {
      numCompte : depotSolde
    }
  this._dep.rechercherCompte(data)
  .subscribe(
    data=>{
      console.log(data);
      this.depotSolde = data
      this.afficher=true;
    },
    error=>{this.errorMessage = error,
    console.log(this.errorMessage)}
  );
  }

  faireDepot(infoDepot){
    //recupere et affiche les donnees dans la console
    // console.log(this.depotSolde)
    console.log(infoDepot)
    // const data = {
    //   numCompte:infoDepot,
    //   montant : infoDepot
    // }
        this._dep.faireDepot(infoDepot)
    .subscribe(
      data => {
      //affiche de d'ajout validé grace à toastr
      this._toastr.success('depot validé sur le compte '),
      // this._dep.onListerCompte();

        // (      error) => console.error('Error', error);       
        // this.errorMessage = data;
        this.infoDepot = data
        console.log(data);
      },
      error=>{this.errorMessage = error,
      console.log(this.errorMessage)}
      );
  }
}
