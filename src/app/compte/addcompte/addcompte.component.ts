import { Component, OnInit, ViewChild } from '@angular/core';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Icompte } from '../compte';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.css']
})
export class AddcompteComponent implements OnInit {
  displayedColumns: string[] = ['id','partenaire','raisonSociale','ninea', 'numCompte','solde','Add']
  dataSource: MatTableDataSource<Icompte>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  comptes : Icompte[] 

  addCompte : any ={}
  constructor(private _compteservice : CompteService,
    private _router : Router, private _toastr : ToastrService) { }

    loadData(data){
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }    
  ngOnInit() {
    this._compteservice.ListerCompte()
    .subscribe(
      res=>{this.comptes = res,
        this.loadData(this.comptes);
      //  this.ngOnInit();
        },
        err=>console.log(err),
    )
  }
  
  postCompte(addCompte){

    console.log(addCompte)
    const data={
      partenaire : addCompte
     }
 if(window.confirm('Are you sure  you want to update ?')){

    this._compteservice.postCompte(addCompte)
    .subscribe(
      data => {
        // console.log('success !', data),
          console.log(data)
          this.addCompte = data
        this._toastr.success('Compte Crée'),
        this.ngOnInit();
      },
      (      error: any) => console.log('Error',error)

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
