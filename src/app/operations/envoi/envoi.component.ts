import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ienvoi } from '../envoi';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {


 postEnvoi = {}
//  = {
// //   id: null,
// // CodeEnvoi : null ,
// // Envoyeur :null,
// // Montant :null,
// // Destinataire :null,
// // compte :null,
// // cniEnvoyeur :null,
// // telEnvoyeur :null,
// // telRecepteur :null
// }
  constructor(private _operationService : OperationsService,
    private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {

}


resetUserForm(form : NgForm){
  form.reset();
}

  faireEnvoi(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Envoyer !'
    }).then((result) => {
      if (result.value) {
        this._operationService.faireEnvoi(this.postEnvoi)
    .subscribe(
    data =>{
        console.log('success !', data),
    
        error => console.log('Error', error);
      }
    );
        Swal.fire(
          'Envoyé!',
          'Envoi.',
          'success'
        ),
        this._toastr.success(' ok Envoi')
      }
    })

  }

 
    

		
}
