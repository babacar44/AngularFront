import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {


postEnvoi = {}
  constructor(private _operationService : OperationsService,
    private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {
  }

  DoEnvoi(){
    // this._operationService.DoEnvoi(this.postEnvoi)
    // .subscribe(
    // data =>{
    //     console.log('success !', data),
    //     this._toastr.success('Envoi validé  '),
    //       (      error: any) => console.log('Error',error);
    //   }
    // );
  }


		
}
