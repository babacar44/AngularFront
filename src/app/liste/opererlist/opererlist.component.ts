import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ioperations } from './operer';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../user.service';

@Component({
  selector: 'app-opererlist',
  templateUrl: './opererlist.component.html',
  styleUrls: ['./opererlist.component.css']
})
export class OpererlistComponent implements OnInit {

  displayedColumns: string[] = ['CodeEnvoi', 'Envoyeur', 'dateEnvoi','Montant','comEnvoi','Destinataire','telEnvoyeur','telRecepteur','dateRetrait','statut']
  dataSource: MatTableDataSource<Ioperations>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  Operations : Ioperations[];
  constructor(private _oper : UserService) { }

  loadData(data){
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}

  ngOnInit() {
    this._oper.ListerOperations()
    .subscribe(
      res=>{
        this.Operations = res,
        this.loadData(this.Operations);
      },
      error=>console.log(error),
    )
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
