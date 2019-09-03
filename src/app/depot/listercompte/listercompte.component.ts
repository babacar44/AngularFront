import { Component, OnInit, ViewChild } from '@angular/core';
import { DepotService } from '../depot.service';
import { MatTableDataSource } from '@angular/material/table';
import { Idepot } from '../depot';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listercompte',
  templateUrl: './listercompte.component.html',
  styleUrls: ['./listercompte.component.css']
})
export class ListercompteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'raisonSociale', 'numCompte','solde']
  dataSource: MatTableDataSource<Idepot>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




  depots :  Idepot[];

  comptes = [];

  constructor(private _depotservice : DepotService) { }

  loadData(data){
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}
  ngOnInit() {
  this._depotservice.onListerCompte( )
  
  .subscribe(
    res=>{this.depots = res,
      this.loadData(this.depots);
      },
      err=>console.log(err),
  )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
