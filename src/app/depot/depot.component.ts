import { Component, OnInit } from '@angular/core';
import { Depot } from '../Classes/depot';
import { DepotService } from '../services/depot.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  constructor(private _auth : AuthService,
    private _router : Router) { }

  ngOnInit() {

  }
   
  
}
