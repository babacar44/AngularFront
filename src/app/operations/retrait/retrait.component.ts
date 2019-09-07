import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Iretrait } from '../retrait';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  //codeEnvoi : any =  {CodeEnvoi: null};
  
  errorMessage : string;


  codeEnvoiArray : Iretrait[] = [
    {
      CodeEnvoi : ' '
    }
  ];
  afficher:boolean=false;

  infoRetrait : any =[
    {
      CodeEnvoi : ' ',
    cniRecepteur : ' '
    
  }
  ]

  constructor(private _operer : OperationsService, private _toastr : ToastrService) { }

  ngOnInit() {
    this.reseteForm;
  }
  reseteForm(form : NgForm){
    if(form != null  )
      form.resetForm();
    this.codeEnvoiArray = null;
  }
onRetrait(codeEnvoiArray){
  console.log(codeEnvoiArray)
  const data={
    CodeEnvoi:codeEnvoiArray
  }
  this._operer.getRetrait(data)
    .subscribe(
      data=>{
        console.log(data);
        this.codeEnvoiArray = data
        this.afficher=true;
      //  if (codeEnvoiArray) {
      //   this.isverify
      //  }
    
      },
      err=>console.log(err),
    );
}

DoRetrait(infoRetrait){
  console.log(infoRetrait)
  const data={
    CodeEnvoi : infoRetrait,
    cniRecepteur : infoRetrait
  }
  this._operer.faireRetrait(infoRetrait)
  .subscribe(
    data=>{
      this._toastr.success('retrait validé sur le compte '),

      console.log(data);
      this.infoRetrait = data
    },
  
  error=>{this.errorMessage = error.error.message,
    console.log(this.errorMessage)}
    );
}

}
