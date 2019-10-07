import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iuser } from '../Iuser';
import { UserService } from '../user.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent implements OnInit {

  displayedColumns: string[] = ['id' ,'email', 'name', 'propriete','statut','boutton']
  dataSource: MatTableDataSource<Iuser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private users : [];

  constructor(private _userService : UserService, private _auth : AuthService,) { }

  loadData(data){
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this. _userService.getUserSuper()
    .subscribe(
      res  => { this.users = res,
      this.loadData(this.users);
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
