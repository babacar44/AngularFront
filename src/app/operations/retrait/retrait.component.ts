import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Iretrait } from '../retrait';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  //codeEnvoi : any =  {CodeEnvoi: null};

  codeEnvoiArray : Iretrait[] = [
    {
      CodeEnvoi : ' '
    }
  ];


  constructor(private _operer : OperationsService) { }

  ngOnInit() {
    this.reseteForm;
  }
  reseteForm(form : NgForm){
    if(form != null  )
      form.resetForm();
    this.codeEnvoiArray = null;
  }
onRetrait(codeEnvoiArray){
  console.log(this.codeEnvoiArray)
  this._operer.getRetrait(codeEnvoiArray)
    .subscribe(
      data=>{ this.codeEnvoiArray = data
        this.isverify
    
      },
      err=>console.log(err),
    );
}
isverify(){
  return this._operer.isVerify
}
}
