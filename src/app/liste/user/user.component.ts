import { Component, OnInit, ViewChild } from '@angular/core';
import { Iuser } from '../Iuser';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';
import { AuthService } from '../../auth.service';
import { CompteService } from 'src/app/compte/compte.service';
import { Icompte } from '../../compte/compte';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  displayedColumns: string[] = ['id' ,'email', 'nomComplet', 'propriete','roles','statut','idCompte','boutton']
  dataSource: MatTableDataSource<Iuser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private idCompteData : [];
  private users : [];
  constructor(private _userService : UserService, private _auth : AuthService, private _compteservice : CompteService
              ) { }

  loadData(data){
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    
    this. _userService.getUserPartener()
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
  updateStatus(id:number){
      if(window.confirm('Are you sure  you want to update ?')){
        this._userService.updateStatus(id)
        .subscribe(
          data=>{
            this.ngOnInit();
          }
        )
      }
  }


  // select(){
  //   console.log(this.idCompteData)
  //   this._compteservice.ListerCompte()
  //   .subscribe(
  //     res=>{this.idCompteData = res,
  //       this.loadData(this.idCompteData);
  //     //  this.ngOnInit();
  //       },
  //       err=>console.log(err),
  //   )
  // }
  isAdminPartener(){
    return this._auth.isAdminPartener()
  }
}
