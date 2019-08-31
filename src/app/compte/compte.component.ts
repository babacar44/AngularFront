import { Component, OnInit } from '@angular/core';
import { CompteService } from './compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  
  constructor(private _compt : CompteService) { }

  ngOnInit() {
  }
  

}
