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
  [x: string]: any;

  addpartener ={}
  constructor(private _part : PartenaireService,
    private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {
    // this.resetForm();
    this.getPartenaire;
  }

  onPartenaire(){
      
    this._part.onPartenaire(this.addpartener)
    .subscribe(
      data=>{
        console.log('sucess !', data),

        this._toastr.success('Partenaire Bien Ajouté'),
        this._part.getPartenaire();
        this.ngOnInit();
        this.resetForm(),
        this._router.navigate(['/partenaire'])
        error => console.log('Error', error);

      }
    );
  }
}
