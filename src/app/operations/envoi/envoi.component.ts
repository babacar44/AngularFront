import { Component, OnInit, Injector } from '@angular/core';
import { OperationsService } from '../operations.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ienvoi } from '../envoi';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
//import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {

errorMessage : string;
afficherRecu=false;

 postEnvoi ={};

  constructor(private _operationService : OperationsService,
    private _router : Router, private _toastr : ToastrService,
    private _injector : Injector) { }

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
        console.log(data);
        Swal.fire({
          title : '<strong>Info</strong>',
          type : 'success',
          html :
            '<h2>Destinataire</h2>'

            +'<p>NomComplet : ' +data.Destinataire+'</p>'
            +'<p>telephone : ' +data.telRecepteur+'</p>'

            +'<h2>Envoyeur</h2>'

            +'<p>Envoyeur : ' +data.Envoyeur +'</p>'
            +'<p>CNI : ' +data.cniEnvoyeur+'</p>'
            +'<p>telephone : ' +data.telEnvoyeur+'</p>'
          
            +'<h2>Transaction</h2>'
            
            +'<p>CodeEnvoi : ' +data.CodeEnvoi+'</p>' 
            +'<p>Montant : ' +data.Montant+ 'CFA' + '</p>'
            +'<p>Commission : ' +data.commission+ 'CFA' +  '</p>',

        showCloseButton:true,
        focusConfirm: false,
        confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        }
          
        ),
        this._toastr.success(' ok Envoi'),
        this.recu();

      },
  
    
    );
        
      }
    }),
    // .then((result) => {
    //   if (result.data) {
    //     this.recu();
    //   }
    // }),
    error =>{
      this.errorMessage = error,
      console.log(this.errorMessage)
    }

  }
  recu(){
    this.afficherRecu=true;
    setTimeout(()=>{
      window.print();
    },3000)
  }
  
		
}
