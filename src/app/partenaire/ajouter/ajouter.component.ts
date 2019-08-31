import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../../partenaire.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  addpartener ={}
  constructor(private _part : PartenaireService,
    private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    form.resetForm();
    if(form != null)
    this._part.addpartener = {
        raisonSociale : null,
        nomComplet : null,
        telephone : null,
        email : null ,
        adresse : null,
    }
  }
  onPartenaire(){
      
    this._part.onPartenaire(this.addpartener)
    .subscribe(
      data=>{
        console.log('sucess !', data),
        this._toastr.success('Partenaire Bien Ajouté'),
        // this.resetForm(form),
        error => console.log('Error', error);

      }
    );
  }
}
