import { PartenaireService } from '../../partenaire.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Ipartenaire } from '../partenaire';
import { Router, ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ninea', 'raisonSociale','telephone','email','adresse','statut','boutton']
  dataSource: MatTableDataSource<Ipartenaire>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




  partenaires :  Ipartenaire[];
  id : any;

  constructor(private _partenaireService : PartenaireService,
    private actRoute : ActivatedRoute,

    private _router : Router) { 
  }

  loadData(data){
       // Assign the data to the data source for the table to render
       this.dataSource = new MatTableDataSource(data);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this. _partenaireService.getPartenaire(  )
    .subscribe(
      res=>{this.partenaires = res,
      this.loadData(this.partenaires);
      },
      err=>console.log(err),

    )
  }

  updatePartenaire(id:number){
    if(window.confirm('Are you sure  you want to update ?')){
      this._partenaireService.updatePartenaire(id)
      .subscribe(data =>{
        this.ngOnInit();
      })
    }
}

applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
