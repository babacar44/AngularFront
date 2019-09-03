import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { DepotService } from '../depot.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

@Component({
  selector: 'app-ajoutdepot',
  templateUrl: './ajoutdepot.component.html',
  styleUrls: ['./ajoutdepot.component.css']
})
export class AjoutdepotComponent implements OnInit {

  constructor(private _dep : DepotService,
    private _router : Router, private _toastr : ToastrService) { }

errorMessage = [];
depotSolde ={}
  ngOnInit() {
  this._dep.onListerCompte();
  
  }
   
  onDepot(){
    //recupere et affiche les donnees dans la console
    // console.log(this.depotSolde)
    this._dep.onDepot(this.depotSolde)
    .subscribe(
      data => {console.log('success !', data ),
      //affiche de d'ajout validé grace à toastr
      this._toastr.success('depot validé sur le compte '),
      this._dep.onListerCompte();

        // (      error) => console.error('Error', error);
       this._router.navigate(['/depot']);
        // this.errorMessage = data;
        console.log(data);
      },
      error=>{this.errorMessage = error.error.detail,
      console.log(this.errorMessage)}
      );
  }
}
