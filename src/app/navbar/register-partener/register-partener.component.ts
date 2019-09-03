import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-partener',
  templateUrl: './register-partener.component.html',
  styleUrls: ['./register-partener.component.css']
})
export class RegisterPartenerComponent implements OnInit {

  imageUrl:string="/assets/img/Avatar-Transparent-Image.png"
  registerUserData = {imageName : File=null}
  errorMessage = [];
  constructor(private _auth : AuthService,
      private _router : Router, private _toastr : ToastrService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
    this.registerUserData.imageName = file.item(0);

    //show image preview 
    var reader =  new  FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.registerUserData.imageName);
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (      res: any)=>{
        console.log(res)
      // localStorage.setItem('token', res.token)
      // this._router.navigate(['/partenaire'])
      this._toastr.success('Partenaire Bien Ajouté')

      },
      error=>{this.errorMessage = error.errors.detail,
        console.log(this.errorMessage)}


    )
  }

}
