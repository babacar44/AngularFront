import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompteAffectService } from '../compte-affect.service';
import { Iaffectation } from './affec';
import { UserService } from '../../liste/user.service';


@Component({
  selector: 'app-compte-affect',
  templateUrl: './compte-affect.component.html',
  styleUrls: ['./compte-affect.component.css']
})
export class CompteAffectComponent implements OnInit {
  displayedColumns: string[] = ['id','numCompte','solde']
  dataSource: MatTableDataSource<Iaffectation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  comptes : Iaffectation[]
  private users : [];

  constructor(private _compteservice : CompteAffectService, private _user : UserService,
    private _router : Router, private _toastr : ToastrService) { }

infoaffet : any  = 
  {
    // numCompte ,
    // email

  }


    loadData(data){
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }    
  ngOnInit() {
     this.registerUserData();
    //  this.listerUser();
  }

  registerUserData(){
    this._compteservice.listercompte()
    .subscribe(
      res=>{
        this.comptes = res,
        this.loadData(this.comptes);
      },
    err =>console.log(err),
    )
  }

  listerUser(){
    this. _user.getUserPartener()
    .subscribe(
      res  => { this.users = res,
      this.loadData(this.users);
      // console.log(this.users);
     this.ngOnInit();
      },
      err=>console.log(err),

    )
  }
  
  affecterCompte(infoaffet){
    console.log(infoaffet)
    const data ={
      numCompte : infoaffet,
      email : infoaffet
    }
  if(window.confirm('Are you sure  you want to update ?')){

    this._compteservice.affecterCompte(infoaffet)
    .subscribe(
      data =>{
        console.log(data)
        this.infoaffet = data
        this._toastr.success('affectation effectué')
      //  this.ngOnInit();
      },
      error => console.log('Error',error)
    );
  }

   }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  


}
